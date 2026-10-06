import React, { useState } from "react";
import Navbar from "../components/Navbar";
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

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [maxPrice, setMaxPrice] = useState(20000);
  const [selectedRating, setSelectedRating] = useState(0);
  const [availability, setAvailability] = useState("");

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories( selectedCategories.filter((item) => item !== category));
    } 
   else {
      setSelectedCategories([ ...selectedCategories, category]);
    }
  };

  const handleRatingChange = (rating) => {
    setSelectedRating(Number(rating));
  };

  const handleAvailabilityChange = (value) => {
    setAvailability(value);
  };

  const clearFilters = () => {
  setSelectedCategories([]);
  setMaxPrice(20000);
  setSelectedRating(0);
  setAvailability("");
};

  const filteredProducts = products.filter((product) => {

    const categoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);


    const priceMatch =
      Number(product.price.replace(",", "")) <= maxPrice;


    const ratingMatch =
      product.rating >= selectedRating;


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

  return (
    <>

      <main className="products-page">

        {/* =================================================
            PRODUCTS BANNER
        ================================================= */}

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


        {/* =================================================
            PRODUCTS CONTENT
        ================================================= */}

        <section className="products-content">

          {/* =================================================
              FILTER SIDEBAR
          ================================================= */}

          <aside className="filter-sidebar">

            {/* Filter Header */}

            <div className="filter-title">

              <h3>FILTERS</h3>

              <button onClick={clearFilters}>
              Clear All
              </button>

            </div>


            {/* =================================================
                CATEGORIES
            ================================================= */}

            <div className="filter-group">

              <h4>Categories</h4>

              <label>
                 <input type="checkbox" checked={selectedCategories.includes("Electronics")}
                    onChange={() => handleCategoryChange("Electronics")}/>
                    Electronics
              </label>

              <label>
                <input type="checkbox" checked={selectedCategories.includes("Fashion")}
                  onChange={() => handleCategoryChange("Fashion")}/>
                Fashion
              </label>

              <label>
                <input type="checkbox" checked={selectedCategories.includes("Home & Kitchen")}
                  onChange={() => handleCategoryChange("Home & Kitchen")}/>
                Home & Kitchen
              </label>  
                

              <label>
                <input type="checkbox" checked={selectedCategories.includes("Beauty")}
                  onChange={() => handleCategoryChange("Beauty")}/>
                Beauty
              </label>

              <label>
                <input type="checkbox" checked={selectedCategories.includes("Sports")}
                  onChange={() => handleCategoryChange("Sports")}/>
                Sports
              </label>

              <label>
                <input type="checkbox" checked={selectedCategories.includes("Books")}
                  onChange={() => handleCategoryChange("Books")}/>
                Books
              </label>

            </div>


            {/* =================================================
                PRICE RANGE
            ================================================= */}

            <div className="filter-group">

              <h4>Price Range</h4>

              <input type="range" min="199" max="20000"
                  value={maxPrice}  onChange={(e) => setMaxPrice(Number(e.target.value))} 
               />

              <div className="price-range">
                 <span>₹199</span>
                 <span>₹{maxPrice}</span>
              </div>

            </div>


            {/* =================================================
                RATINGS
            ================================================= */}

            <div className="filter-group">

              <h4>Ratings</h4>
            <label>
  <input
    type="checkbox"
    checked={selectedRating === 5}
    onChange={() => handleRatingChange(5)}
  />
  <span>⭐⭐⭐⭐⭐ & above</span>
</label>

<label>
  <input
    type="checkbox"
    checked={selectedRating === 4}
    onChange={() => handleRatingChange(4)}
  />
  <span>⭐⭐⭐⭐☆ & above</span>
</label>

<label>
  <input
    type="checkbox"
    checked={selectedRating === 3}
    onChange={() => handleRatingChange(3)}
  />
  <span>⭐⭐⭐☆☆ & above</span>
</label>
            </div>


            {/* =================================================
                AVAILABILITY
            ================================================= */}

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


          {/* =================================================
              PRODUCTS AREA
          ================================================= */}

          <div className="products-area">

            <div className="products-header">

              <p>
                Showing <strong>{filteredProducts.length} of {products.length}</strong> products
              </p>

            </div>


            {/* =================================================
                DYNAMIC PRODUCT GRID
            ================================================= */}

            <div className="products-grid">

  {filteredProducts.length > 0 ? (

    filteredProducts.map((product) => (

      <div className="product-card" key={product.id}>

        <div className="product-image">

          {product.discount && (
            <span className="discount-badge">
              -{product.discount}
            </span>
          )}

          <button className="wishlist-button" type="button">
            ♡
          </button>

          <img
            src={product.image}
            alt={product.name}
          />

        </div>

        <div className="product-info">

          <small>{product.category}</small>

          <h3>{product.name}</h3>

          <div className="rating">
            ⭐ {product.rating}
            <span> ({product.reviews})</span>
          </div>

          <div className="product-price">
            ₹{product.price}
            <del>₹{product.originalPrice}</del>
          </div>

          <button className="add-cart-button" type="button">
            🛒 Add to Cart
          </button>

        </div>

      </div>

    ))

  ) : (

    <div className="no-products">
      <h3>No Products Found!</h3>
      <p>Try changing your filters.</p>
    </div>

  )}


            </div>

          </div>

        </section>

      </main>
    </>
  );
}

export default Products;

