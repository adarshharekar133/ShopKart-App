
import React, { useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import "./Products.css";

/* =====================================================
   PRODUCT DATA
===================================================== */

export const products = [
  {
    id: 1,
    name: "Samsung Galaxy M14 5G",
    category: "Electronics",
    price: "12,499",
    originalPrice: "14,999",
    rating: 4.4,
    reviews: 1850,
    discount: "17%",
    isAvailable: true,
    image:
      "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=800&q=90",
  },
  {
    id: 2,
    name: "boAt Rockerz 450",
    category: "Electronics",
    price: "1,599",
    originalPrice: "2,999",
    rating: 4.5,
    reviews: 1200,
    discount: "47%",
    isAvailable: true,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=90",
  },
  {
    id: 3,
    name: "Red Tape Sneakers",
    category: "Fashion",
    price: "2,099",
    originalPrice: "3,999",
    rating: 4.5,
    reviews: 980,
    discount: "48%",
    isAvailable: true,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=90",
  },
  {
    id: 4,
    name: "Noise ColorFit Pro 4",
    category: "Electronics",
    price: "2,999",
    originalPrice: "4,999",
    rating: 4.6,
    reviews: 2300,
    discount: "40%",
    isAvailable: true,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=90",
  },
  {
    id: 5,
    name: "Levi's Jeans",
    category: "Fashion",
    price: "2,099",
    originalPrice: "3,499",
    rating: 4.5,
    reviews: 890,
    discount: "40%",
    isAvailable: true,
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=90",
  },
  {
    id: 6,
    name: "boAt Airdopes 141",
    category: "Electronics",
    price: "1,299",
    originalPrice: "2,490",
    rating: 4.4,
    reviews: 3400,
    discount: "48%",
    isAvailable: true,
    image:
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=800&q=90",
  },
  {
    id: 7,
    name: "Men's Casual Shirt",
    category: "Fashion",
    price: "899",
    originalPrice: "1,499",
    rating: 4.3,
    reviews: 760,
    discount: "40%",
    isAvailable: true,
    image:
      "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?auto=format&fit=crop&w=800&q=90",
  },
  {
    id: 8,
    name: "Minimalist Table Lamp",
    category: "Home & Kitchen",
    price: "1,199",
    originalPrice: "1,999",
    rating: 4.5,
    reviews: 540,
    discount: "40%",
    isAvailable: true,
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=90",
  },
];

/* =====================================================
   PRODUCTS PAGE
===================================================== */

function Products() {
  const navigate = useNavigate();

  const { dispatch } = useOutletContext();

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [maxPrice, setMaxPrice] = useState(20000);
  const [selectedRating, setSelectedRating] = useState(0);
  const [availability, setAvailability] = useState("");
  const [addedProductId, setAddedProductId] = useState(null);

  /* =====================================================
     FILTER HANDLERS
  ===================================================== */

  const handleCategoryChange = (category) => {
    setSelectedCategories((previous) =>
      previous.includes(category)
        ? previous.filter((item) => item !== category)
        : [...previous, category]
    );
  };

  const handleRatingChange = (rating) => {
    setSelectedRating((previous) =>
      previous === rating ? 0 : rating
    );
  };

  const handleAvailabilityChange = (value) => {
    setAvailability((previous) =>
      previous === value ? "" : value
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setMaxPrice(20000);
    setSelectedRating(0);
    setAvailability("");
  };

  /* =====================================================
     ADD TO CART
  ===================================================== */

  const handleAddToCart = (e, product) => {
    e.stopPropagation();

    dispatch({
      type: "ADD_ITEM",
      payload: product,
    });

    setAddedProductId(product.id);

    setTimeout(() => {
      setAddedProductId((currentId) =>
        currentId === product.id ? null : currentId
      );
    }, 2000);
  };

  /* =====================================================
     FILTER PRODUCTS
  ===================================================== */

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);

    const priceMatch =
      Number(product.price.replace(",", "")) <= maxPrice;

    const ratingMatch = product.rating >= selectedRating;

    const availabilityMatch =
      availability === "" ||
      (availability === "inStock" && product.isAvailable) ||
      (availability === "outOfStock" && !product.isAvailable);

    return (
      categoryMatch &&
      priceMatch &&
      ratingMatch &&
      availabilityMatch
    );
  });

  /* =====================================================
     PRODUCT NAVIGATION
  ===================================================== */

  const openProductDetails = (productId) => {
    navigate(`/products/${productId}`);
  };

  /* =====================================================
     UI
  ===================================================== */

  return (
    <main className="products-page">

      {/* PRODUCTS BANNER */}

      <section className="products-banner">
        <div className="banner-content">
          <h1>
            All <span>Products</span>
          </h1>

          <p>
            Explore our wide range of top quality products
          </p>
        </div>

        <div className="banner-icons">
          <div className="banner-icon">🎧</div>
          <div className="banner-icon">📷</div>
          <div className="banner-icon">👕</div>
          <div className="banner-icon">🛍️</div>
          <div className="banner-icon">⌚</div>
        </div>
      </section>

      {/* PRODUCTS CONTENT */}

      <section className="products-content">

        {/* FILTER SIDEBAR */}

        <aside className="filter-sidebar">

          <div className="filter-title">
            <h3>FILTERS</h3>

            <button type="button" onClick={clearFilters}>
              Clear All
            </button>
          </div>

          {/* CATEGORIES */}

          <div className="filter-group">
            <h4>Categories</h4>

            {["Electronics", "Fashion", "Home & Kitchen", "Beauty", "Sports", "Books"].map(
              (category) => (
                <label key={category}>
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleCategoryChange(category)}
                  />
                  {category}
                </label>
              )
            )}
          </div>

          {/* PRICE RANGE */}

          <div className="filter-group">
            <h4>Price Range</h4>

            <input
              type="range"
              min="199"
              max="20000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
            />

            <div className="price-range">
              <span>₹199</span>
              <span>₹{maxPrice.toLocaleString("en-IN")}</span>
            </div>
          </div>

          {/* RATINGS */}

          <div className="filter-group">
            <h4>Ratings</h4>

            {[5, 4, 3].map((rating) => (
              <label key={rating}>
                <input
                  type="checkbox"
                  checked={selectedRating === rating}
                  onChange={() => handleRatingChange(rating)}
                />

                <span>
                  {"⭐".repeat(rating)}
                  {"☆".repeat(5 - rating)} & above
                </span>
              </label>
            ))}
          </div>

          {/* AVAILABILITY */}

          <div className="filter-group">
            <h4>Availability</h4>

            <label>
              <input
                type="checkbox"
                checked={availability === "inStock"}
                onChange={() => handleAvailabilityChange("inStock")}
              />
              <span>In Stock</span>
            </label>

            <label>
              <input
                type="checkbox"
                checked={availability === "outOfStock"}
                onChange={() => handleAvailabilityChange("outOfStock")}
              />
              <span>Out of Stock</span>
            </label>
          </div>

        </aside>

        {/* PRODUCTS AREA */}

        <div className="products-area">

          <div className="products-header">
            <p>
              Showing{" "}
              <strong>
                {filteredProducts.length} of {products.length}
              </strong>{" "}
              products
            </p>
          </div>

          {/* PRODUCT GRID */}

          <div className="products-grid">

            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (

                <div
                  className="product-card"
                  key={product.id}
                  title="Click for more info"
                  onClick={() => openProductDetails(product.id)}
                  style={{ cursor: "pointer" }}
                >

                  {/* PRODUCT IMAGE */}

                  <div className="product-image">

                    {product.discount && (
                      <span className="discount-badge">
                        -{product.discount}
                      </span>
                    )}

                    {/* WISHLIST BUTTON */}

                    <button
                      className="wishlist-button"
                      type="button"
                      onClick={(e) => e.stopPropagation()}
                      aria-label="Add to wishlist"
                    >
                      ♡
                    </button>

                    <img
                      src={product.image}
                      alt={product.name}
                    />

                  </div>

                  {/* PRODUCT INFO */}

                  <div className="product-info">

                    <small>{product.category}</small>

                    <h3>{product.name}</h3>

                    <div className="rating">
                      ⭐ {product.rating}
                      <span> ({product.reviews.toLocaleString("en-IN")})</span>
                    </div>

                    <div className="product-price">
                      ₹{product.price}
                      <del>₹{product.originalPrice}</del>
                    </div>

                    {/* ADD TO CART BUTTON */}

                    <button
                      className="add-cart-button"
                      type="button"
                      onClick={(e) => handleAddToCart(e, product)}
                    >
                      {addedProductId === product.id
                        ? "✓ Added to Cart"
                        : "🛒 Add to Cart"}
                    </button>

                  </div>

                </div>

              ))
            ) : (

              <div className="no-products">
                <h3>No Products Found!</h3>
                <p>Try changing your filters.</p>

                <button type="button" onClick={clearFilters}>
                  Clear Filters
                </button>
              </div>

            )}

          </div>

        </div>

      </section>

    </main>
  );
}

export default Products;
