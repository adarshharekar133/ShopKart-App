
import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <main className="not-found-page">
      <div className="not-found-content">

        <div className="not-found-illustration">
          🛒
          <span>404</span>
        </div>

        <p className="not-found-label">PAGE NOT FOUND</p>

        <h1>
          Oops! Page <span>Not Found</span>
        </h1>

        <p className="not-found-description">
          Sorry, the page you are looking for doesn't exist,
          has been moved, or is temporarily unavailable.
        </p>

        <div className="not-found-buttons">
          <Link to="/" className="not-found-home-btn">
            ← Back to Home
          </Link>

          <Link to="/products" className="not-found-products-btn">
            Explore Products →
          </Link>
        </div>

      </div>
    </main>
  );
}

export default NotFound;
