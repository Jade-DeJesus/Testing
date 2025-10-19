import React from "react";
import { Link } from 'react-router-dom';
import heroImage from "../assets/hero.jpg";


export default function HomePage() {

  return (
    <div className="bg-gray-50 text-gray-800 font-sans">

      {/* ✅ Hero Section (Bootstrap-style look) */}
      <section className="container text-center mt-5 d-flex flex-column flex-md-row align-items-center justify-content-between">
        
        {/* Left Text Section */}
        <div className="md:w-1/2 text-md-start">
          <h1 className="fw-bold mb-3" style={{ color: '#4CAF50' }}>
            Fresh Produce
          </h1>
          <h2 className="fw-bold mb-3">Delivered to Your Door</h2>
          <p className="text-muted mb-4">
            Shop the finest selection of organic fruits and vegetables — farm fresh,
            handpicked daily, and delivered straight to your doorstep.
          </p>
          <a href="/products" className="btn btn-success btn-lg">
            Shop Now
          </a>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 mt-4 mt-md-0">
          <img
            src={heroImage}
            alt="Fresh produce"
            className="img-fluid rounded shadow"
            style={{ maxWidth: "500px" }}
          />
        </div>
      </section>


      {/* ✅ Why Choose Us Section — Pure CSS version (no Tailwind required) */}
      <section style={{ backgroundColor: "white", padding: "60px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "32px", fontWeight: "bold", color: "#222", marginBottom: "40px" }}>
          Why Choose Us?
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "60px",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          {/* Feature 1 */}
          <div style={{ width: "180px" }}>
            <div
              style={{
                backgroundColor: "#E8FBE8",
                borderRadius: "50%",
                width: "80px",
                height: "80px",
                margin: "0 auto 15px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "36px",
              }}
            >
              🥬
            </div>
            <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#111" }}>100% Organic</h3>
            <p style={{ color: "#666", fontSize: "14px", marginTop: "8px" }}>
              Fresh from certified organic farms
            </p>
          </div>

          {/* Feature 2 */}
          <div style={{ width: "180px" }}>
            <div
              style={{
                backgroundColor: "#E8FBE8",
                borderRadius: "50%",
                width: "80px",
                height: "80px",
                margin: "0 auto 15px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "36px",
              }}
            >
              🚚
            </div>
            <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#111" }}>Free Delivery</h3>
            <p style={{ color: "#666", fontSize: "14px", marginTop: "8px" }}>On orders over ₱50</p>
          </div>

          {/* Feature 3 */}
          <div style={{ width: "180px" }}>
            <div
              style={{
                backgroundColor: "#E8FBE8",
                borderRadius: "50%",
                width: "80px",
                height: "80px",
                margin: "0 auto 15px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "36px",
              }}
            >
              ⏰
            </div>
            <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#111" }}>Daily Fresh</h3>
            <p style={{ color: "#666", fontSize: "14px", marginTop: "8px" }}>
              Restocked every morning
            </p>
          </div>

          {/* Feature 4 */}
          <div style={{ width: "180px" }}>
            <div
              style={{
                backgroundColor: "#E8FBE8",
                borderRadius: "50%",
                width: "80px",
                height: "80px",
                margin: "0 auto 15px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "36px",
              }}
            >
              🛡️
            </div>
            <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#111" }}>Quality Guarantee</h3>
            <p style={{ color: "#666", fontSize: "14px", marginTop: "8px" }}>
              30-day money-back guarantee
            </p>
          </div>
        </div>
      </section>




      {/* ✅ Call to Action (with Hero Background & 50% Overlay) */}
      <section
        style={{
          position: "relative",
          color: "white",
          textAlign: "center",
          padding: "100px 20px",
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          overflow: "hidden",
        }}
      >
        {/* ✅ Semi-transparent dark overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)", // 50% opacity overlay
            zIndex: 0,
          }}
        ></div>

        {/* ✅ Content */}
        <div style={{ position: "relative", zIndex: 1, maxWidth: "700px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "40px",
              fontWeight: "bold",
              marginBottom: "15px",
            }}
          >
            Start Your Healthy Journey Today 🌱
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.9)",
              fontSize: "18px",
              lineHeight: "1.6",
              marginBottom: "30px",
            }}
          >
            Join thousands of happy customers who trust us for their daily fresh produce needs.
          </p>
          <button
            style={{
              backgroundColor: "white",
              color: "#2E7D32",
              padding: "12px 32px",
              border: "none",
              borderRadius: "8px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#E8F5E9")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "white")}
          >
            Shop Now
          </button>
        </div>
      </section>


      {/* ✅ Footer (Fully Fixed with Inline Styles) */}
      <footer
        style={{
          backgroundColor: "#1B5E20", // dark green
          color: "white",
          padding: "60px 20px",
          marginTop: "60px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "40px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "white",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "20px",
                  color: "#1B5E20",
                }}
              >
                🥬
              </div>
              <span style={{ fontSize: "22px", fontWeight: "bold", color: "white" }}>FreshMart</span>
            </div>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "14px", lineHeight: "1.6" }}>
              Your trusted source for fresh, organic produce delivered daily with care and sustainability.
            </p>
          </div>

          {/* Footer Links */}
          {[
            { title: "Shop", links: ["Vegetables", "Fruits", "Herbs", "Special Offers"] },
            { title: "Company", links: ["About Us", "Our Farms", "Sustainability", "Careers"] },
            { title: "Support", links: ["Contact Us", "FAQs", "Shipping", "Returns"] },
          ].map((section, i) => (
            <div key={i}>
              <h4 style={{ color: "white", marginBottom: "16px", fontWeight: "600", fontSize: "18px" }}>
                {section.title}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {section.links.map((link, j) => (
                  <li key={j} style={{ marginBottom: "8px" }}>
                    <a
                      href="#"
                      style={{
                        color: "rgba(255,255,255,0.85)",
                        textDecoration: "none",
                        transition: "all 0.3s",
                      }}
                      onMouseOver={(e) => (e.target.style.color = "#FFF")}
                      onMouseOut={(e) => (e.target.style.color = "rgba(255,255,255,0.85)")}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.2)",
            marginTop: "40px",
            paddingTop: "20px",
            textAlign: "center",
            color: "rgba(255,255,255,0.7)",
            fontSize: "14px",
          }}
        >
          © 2025 FreshMart. All rights reserved.
        </div>
      </footer>


    </div>
  );
}
