
    import React, { useState } from "react";
    import {
    Link,
    useNavigate,
    useParams,
    useOutletContext
    } from "react-router-dom";

    import productDetails from "../data/productDetails";
    import "./ProductDetails.css";

    function ProductDetails() {

    const { id } = useParams();
    const navigate = useNavigate();

    const { dispatch } = useOutletContext();

    const [quantity, setQuantity] = useState(1);

    // Find Product
    const product = productDetails.find(
        (item) => item.id === Number(id)
    );

    // Product Not Found
    if (!product) {
        return (
        <main className="product-not-found">
            <div className="not-found-content">
            <h1>Product Not Found!</h1>

            <p>
                Sorry, the product you are looking for
                does not exist or may have been removed.
            </p>

            <Link to="/products" className="back-products-btn">
                ← Back to Products
            </Link>
            </div>
        </main>
        );
    }

    // Add Product to Cart
    const addProductToCart = () => {

        for (let i = 0; i < quantity; i++) {
        dispatch({
            type: "ADD_ITEM",
            payload: product
        });
        }

    };

    // Add to Cart
    const handleAddToCart = () => {

        addProductToCart();

        alert(`${quantity} item(s) added to cart successfully!`);

    };

    // Buy Now
    const handleBuyNow = () => {

        addProductToCart();

        navigate("/cart");

    };

    // Format Specification Keys
    const formatKey = (key) => {
        return key
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, (letter) =>
            letter.toUpperCase()
        );
    };

    return (

        <main className="product-details-page">

        {/* Breadcrumb */}
        <div className="product-breadcrumb">

            <Link to="/">Home</Link>
            <span>/</span>

            <Link to="/products">Products</Link>
            <span>/</span>

            <span>{product.name}</span>

        </div>

        {/* Product Overview */}
        <section className="product-overview">

            {/* Product Image */}
            <div className="product-image-section">

            <span className="detail-discount-badge">
                {product.discount} OFF
            </span>

            <img
                src={product.image}
                alt={product.name}
            />

            </div>

            {/* Product Information */}
            <div className="product-info-section">

            <p className="product-category">
                {product.category}
            </p>

            <h1>{product.name}</h1>

            <p className="product-brand">
                Brand: <strong>{product.brand}</strong>
            </p>

            {/* Rating */}
            <div className="product-rating">

                <span>⭐ {product.rating}</span>

                <span>
                ({product.reviews.toLocaleString("en-IN")} reviews)
                </span>

            </div>

            {/* Short Description */}
            <p className="product-short-description">
                {product.shortDescription}
            </p>

            {/* Pricing */}
            <div className="product-pricing">

                <span className="current-price">
                ₹{product.price.toLocaleString("en-IN")}
                </span>

                <span className="original-price">
                ₹{product.originalPrice.toLocaleString("en-IN")}
                </span>

                <span className="discount">
                {product.discount} OFF
                </span>

            </div>

            {/* Availability */}
            <div className="product-availability">

                <strong>
                ● {product.availability}
                </strong>

                <p>
                Free delivery available on eligible orders.
                </p>

            </div>

            {/* Purchase Section */}
            <div className="purchase-section">

                {/* Quantity */}
                <div className="quantity-section">

                <span>Quantity</span>

                <div className="quantity-control">

                    <button
                    type="button"
                    disabled={quantity <= 1}
                    onClick={() =>
                        setQuantity((previous) =>
                        Math.max(1, previous - 1)
                        )
                    }
                    >
                    −
                    </button>

                    <span>{quantity}</span>

                    <button
                    type="button"
                    onClick={() =>
                        setQuantity((previous) => previous + 1)
                    }
                    >
                    +
                    </button>

                </div>

                </div>

                {/* Buttons */}
                <div className="purchase-buttons">

                <button
                    type="button"
                    className="add-cart-btn"
                    onClick={handleAddToCart}
                >
                    🛒 Add to Cart
                </button>

                <button
                    type="button"
                    className="buy-now-btn"
                    onClick={handleBuyNow}
                >
                    Buy Now →
                </button>

                </div>

            </div>

            {/* Extra Information */}
            <div className="product-extra-info">

                <p>🚚 Free Delivery on Eligible Orders</p>
                <p>↩️ Easy 7-Day Returns</p>
                <p>🔒 Secure Shopping Experience</p>

            </div>

            </div>

        </section>

        {/* Description */}
        <section className="product-description-section">

            <h2>Product Description</h2>

            <p>{product.description}</p>

        </section>

        {/* Features */}
        <section className="product-features-section">

            <h2>Key Features</h2>

            <ul>

            {product.keyFeatures.map((feature, index) => (
                <li key={index}>
                <span>✓</span> {feature}
                </li>
            ))}

            </ul>

        </section>

        {/* Specifications */}
        <section className="specifications-section">

            <h2>Specifications</h2>

            <div className="specifications-grid">

            {Object.entries(product.specifications).map(
                ([key, value]) => (

                <div key={key}>

                    <strong>{formatKey(key)}</strong>

                    <span>{value}</span>

                </div>

                )
            )}

            </div>

        </section>

        {/* Customer Reviews */}
        <section className="product-reviews-section">

            <h2>Customer Reviews</h2>

            <div className="reviews-list">

            {product.customerReviews.map((review, index) => (

                <article
                className="review-card"
                key={index}
                >

                <h3>{review.name}</h3>

                <p className="review-rating">
                    ⭐ {review.rating}/5
                </p>

                <p>{review.comment}</p>

                </article>

            ))}

            </div>

        </section>

        </main>

    );

    }

    export default ProductDetails;
