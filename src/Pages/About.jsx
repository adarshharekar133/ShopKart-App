
import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

// Trusted Brands Data
const brands = [
  { id: 1, name: "Samsung", image: "https://www.google.com/s2/favicons?domain=samsung.com&sz=128" },
  { id: 2, name: "boAt", image: "https://www.google.com/s2/favicons?domain=boat-lifestyle.com&sz=128" },
  { id: 3, name: "Puma", image: "https://www.google.com/s2/favicons?domain=puma.com&sz=128" },
  { id: 4, name: "LG", image: "https://www.google.com/s2/favicons?domain=lg.com&sz=128" },
  { id: 5, name: "Philips", image: "https://www.google.com/s2/favicons?domain=philips.com&sz=128" },
  { id: 6, name: "The Ordinary", image: "https://www.google.com/s2/favicons?domain=theordinary.com&sz=128" },
  { id: 7, name: "Nivea", image: "https://www.google.com/s2/favicons?domain=nivea.com&sz=128" },
  { id: 8, name: "Himalaya", image: "https://www.google.com/s2/favicons?domain=himalayawellness.in&sz=128" },
  { id: 9, name: "Apple", image: "https://www.google.com/s2/favicons?domain=apple.com&sz=128" },
  { id: 10, name: "Fastrack", image: "https://www.google.com/s2/favicons?domain=fastrack.in&sz=128" },
  { id: 11, name: "Amazon", image: "https://www.google.com/s2/favicons?domain=amazon.in&sz=128" },
  { id: 12, name: "Levi's", image: "https://www.google.com/s2/favicons?domain=levi.com&sz=128" },
  { id: 13, name: "Nike", image: "https://www.google.com/s2/favicons?domain=nike.com&sz=128" },
  { id: 14, name: "Adidas", image: "https://www.google.com/s2/favicons?domain=adidas.com&sz=128" },
  { id: 15, name: "Zara", image: "https://www.google.com/s2/favicons?domain=zara.com&sz=128" },
  { id: 16, name: "H&M", image: "https://www.google.com/s2/favicons?domain=hm.com&sz=128" },
  { id: 17, name: "Canon", image: "https://www.google.com/s2/favicons?domain=canon.com&sz=128" },
  { id: 18, name: "Dyson", image: "https://www.google.com/s2/favicons?domain=dyson.com&sz=128" },
  { id: 19, name: "Intel", image: "https://www.google.com/s2/favicons?domain=intel.com&sz=128" },
  { id: 20, name: "Ray-Ban", image: "https://www.google.com/s2/favicons?domain=ray-ban.com&sz=128" }
];

// About Component
function About() {
  return (
    <main className="about-page">

      {/* About Hero Section */}
      <section className="about-hero">
        <div className="about-content">

          <div className="about-label">
            <span></span>
            ABOUT US
          </div>

          <h1>
            About <span>us</span>
          </h1>

          <h2>
            Making everyday shopping simpler,
            <br />
            faster and more enjoyable.
          </h2>

          <p>
            At ShopKart, we believe great products should be accessible
            to everyone. We are an online shopping destination offering
            a wide range of high-quality products at great prices,
            delivered right to your doorstep.
          </p>

          <p>
            From fashion and electronics to home essentials and more —
            we're here to make shopping easier, better, and more
            delightful for you.
          </p>

          <div className="about-buttons">

            <Link to="/products" className="shop-btn">
              Shop now
              <span>→</span>
            </Link>

            <a href="#brands" className="learn-btn">
              Learn more
            </a>

          </div>

          <div className="about-tagline">
            Shop Smarter, Live Better
            <span></span>
          </div>

        </div>
      </section>

      {/* Trusted Brands Section */}
      <section className="brands-section" id="brands">

        <div className="brands-heading">
          <h2>Trusted by leading brands</h2>

          <p>
            We're proud to partner with some of the world's most trusted
            brands to bring you the best products and shopping experience.
          </p>
        </div>

        {/* Brands Grid */}
        <div className="brands-grid">

          {brands.map((brand) => (
            <div className="brand-item" key={brand.id}>

              <img
                src={brand.image}
                alt={brand.name}
                loading="lazy"
              />

            </div>
          ))}

        </div>

      </section>

    </main>
  );
}

export default About;
