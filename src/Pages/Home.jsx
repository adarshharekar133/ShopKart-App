import React from "react";
import "./Home.css";
import { products } from "./Products"; // Import the products data

function Home() {
  return (
    <>

     

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">

          <h1>
            Good Choices. <br />
            <span>Great Prices.</span>
          </h1>

          <p>
            Everything you need, <br />
            delivered to your door.
          </p>

          <div className="hero-buttons">
            <button className="shop-btn">Shop Now →</button>
            <button className="deal-btn">Explore Deals</button>
          </div>

          {/* Hero Benefits */}
         <div className="hero-benefits">

         <div className="benefit-item">
           <i className="bi bi-shield-check"></i>
            <p>100% Secure Payments</p>
         </div>

        <div className="benefit-item">
          <i className="bi bi-clock"></i>
          <p>7 Days Easy Returns</p>
         </div>

        <div className="benefit-item">
          <i className="bi bi-truck"></i>
          <p>Fast & Free Delivery</p>
        </div>

        </div>

        </div>
      </section>


      {/* Shop By Category */}
<section className="category-section">

  <div className="section-heading">
    <div>
      <span className="section-tag">EXPLORE</span>
      <h2>Shop by Category</h2>
      <p>Find everything you need, all in one place.</p>
    </div>

    <a href="#" className="view-all">
      View All Categories <span>→</span>
    </a>
  </div>


  <div className="category-list">

    {/* Electronics */}
    <div className="category-card electronics">
      <div className="category-image">
        <img
          src="https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=600&q=85"
          alt="Electronics"
        />
      </div>

      <div className="category-info">
        <h3>Electronics</h3>
        <p>1200+ Products</p>
      </div>

      <span className="category-arrow">→</span>
    </div>


    {/* Fashion */}
    <div className="category-card fashion">
      <div className="category-image">
        <img
          src="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=600&q=85"
          alt="Fashion"
        />
      </div>

      <div className="category-info">
        <h3>Fashion</h3>
        <p>1800+ Products</p>
      </div>

      <span className="category-arrow">→</span>
    </div>


    {/* Home & Kitchen */}
    <div className="category-card home-kitchen">
      <div className="category-image">
        <img
          src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=85"
          alt="Home and Kitchen"
        />
      </div>

      <div className="category-info">
        <h3>Home & Kitchen</h3>
        <p>950+ Products</p>
      </div>

      <span className="category-arrow">→</span>
    </div>


    {/* Beauty */}
    <div className="category-card beauty">
      <div className="category-image">
        <img
          src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&q=85"
          alt="Beauty and Personal Care"
        />
      </div>

      <div className="category-info">
        <h3>Beauty & Care</h3>
        <p>750+ Products</p>
      </div>

      <span className="category-arrow">→</span>
    </div>


    {/* Sports */}
    <div className="category-card sports">
      <div className="category-image">
        <img
          src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=600&q=85"
          alt="Sports and Fitness"
        />
      </div>

      <div className="category-info">
        <h3>Sports & Fitness</h3>
        <p>600+ Products</p>
      </div>

      <span className="category-arrow">→</span>
    </div>


    {/* Books */}
    <div className="category-card books">
      <div className="category-image">
        <img
          src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=600&q=85"
          alt="Books and Stationery"
        />
      </div>

      <div className="category-info">
        <h3>Books & Stationery</h3>
        <p>500+ Products</p>
      </div>

      <span className="category-arrow">→</span>
    </div>

  </div>
</section>


{/* Trending Products */}
<section className="products-section" id="trending">

  <div className="section-heading">

    <div className="trending-heading">

      <h2 className="trending-title">

        <span className="trending-icon">
          <img
            src="https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=100&q=80"
            alt="Trending"
          />
        </span>

        <span>
          Trending <strong>Now</strong>
        </span>

      </h2>

      <div className="trending-accent"></div>

      <p className="trending-subtitle">
        Most popular choices this week
      </p>

    </div>

    <a href="/products" className="view-products">
      View All Products <span>→</span>
    </a>

  </div>


  {/* Product Grid */}
  <div className="product-grid">

    {products.map((product) => (

      <div className="product-card" key={product.id}>

        <div className="product-image">

          <img
            src={product.image}
            alt={product.name}
          />

        </div>


        <div className="product-details">

          <div className="product-meta">

            <span className="product-category">
              {product.category}
            </span>

            <span className="product-rating">
              ⭐ {product.rating} ({product.reviews})
            </span>

          </div>


          <h3>{product.name}</h3>


          <div className="product-price">
            ₹{product.price}
          </div>


          <div className="product-actions">

            <button className="buy-now-button">
              Buy Now
            </button>

            <button className="cart-button">

              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=100&q=80"
                alt="Cart"
              />

            </button>

          </div>

        </div>

      </div>

    ))}

  </div>

</section>
    </>
  );
}

export default Home;