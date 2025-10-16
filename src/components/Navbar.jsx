import React from "react";
export default function Navbar() {
  return (
    <header className="nav">
      <div className="logo">Reflect</div>
      <div className="links">
        <div>Product</div>
        <div>Pricing</div>
        <div>Resources</div>
      </div>
      <div>
        <button className="btn-outline">Log in</button>
        <button className="cta">Start free trial</button>
      </div>
    </header>
  );
}
