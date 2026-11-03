
import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    orderId: "",
    message: "",
    help: []
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    setSubmitted(false);
  };

  const handleHelpChange = (e) => {
    const { value, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      help: checked
        ? [...prev.help, value]
        : prev.help.filter((item) => item !== value)
    }));

    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="contact-page">
      <section className="contact-wrapper">

        {/* LEFT SIDE - CONTACT INFORMATION */}
        <div className="contact-info">

          <div className="info-block">
            <div className="info-icon">💬</div>
            <div>
              <h3>Chat with us</h3>
              <p>Our friendly team is here to help.</p>
              <strong>support@shopkart.com</strong>
            </div>
          </div>

          <div className="info-block">
            <div className="info-icon">📞</div>
            <div>
              <h3>Call us</h3>
              <p>Mon - Sat from 9AM to 6PM.</p>
              <strong>+91 98765 43210</strong>
            </div>
          </div>

          <div className="info-block">
            <div className="info-icon">📍</div>
            <div>
              <h3>Visit our office</h3>
              <p>Come say hello at our office.</p>
              <strong>
                123 Shopping Street,
                <br />
                Bangalore, Karnataka 560001
              </strong>
            </div>
          </div>

          {/* GOOGLE MAP */}
          <div className="map-section">
            <iframe
              src="https://www.google.com/maps?q=I.T.VEDANT%20Mumbai&output=embed"
              title="ShopKart Office Location"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>

          {/* SOCIAL MEDIA */}
          <div className="social-section">
            <h3>Follow us</h3>

            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">f</a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">𝕏</a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer">▶</a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">◎</a>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE - CONTACT FORM */}
        <div className="contact-form-section">
          <div className="form-content">

            <h1>
              Have a question?
              <br />
              We're here for <span>you!</span>
            </h1>

            <p className="form-intro">
              Tell us more about your query, suggestion, or feedback.
              <br />
              We'd love to hear from you and get back as soon as possible.
            </p>

            <form onSubmit={handleSubmit}>

              <div className="form-field">
                <label htmlFor="name">Your name *</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="email">Your email *</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="orderId">Order ID</label>
                <input
                  id="orderId"
                  type="text"
                  name="orderId"
                  value={formData.orderId}
                  onChange={handleChange}
                  placeholder="Enter your order ID (optional)"
                />
              </div>

              <div className="form-field message-field">
                <label htmlFor="message">Your message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message here..."
                  maxLength="500"
                  required
                />

                <span className="character-count">
                  {formData.message.length}/500
                </span>
              </div>

              <div className="help-section">
                <p>
                  How can we help you?
                  <span> Select all that apply</span>
                </p>

                <div className="help-options">
                  {[
                    "Order Issue",
                    "Return / Refund",
                    "Payment Help",
                    "Account Support",
                    "Product Inquiry",
                    "Other"
                  ].map((option) => (
                    <label key={option}>
                      <input
                        type="checkbox"
                        value={option}
                        checked={formData.help.includes(option)}
                        onChange={handleHelpChange}
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button type="submit" className="contact-submit">
                Send Message <span>→</span>
              </button>

              {submitted && (
                <p className="success-message">
                  Thanks! Your message has been submitted.
                </p>
              )}

            </form>
          </div>
        </div>

      </section>
    </main>
  );
}

export default Contact;

