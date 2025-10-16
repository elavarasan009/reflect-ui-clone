import React from "react";
export default function Hero() {
  return (
    <section className="hero">
      <div className="text">
        <h1>Think better with Reflect</h1>
        <p>Never miss a note, idea, or connection. Instantly sync across devices.</p>
        <div style={{ marginTop: 20 }}>
          <button className="cta">Start 14-day trial</button>
          <button className="btn-outline" style={{ marginLeft: 12 }}>How it works</button>
        </div>
      </div>
      <div className="hero-card">
        <div style={{height:200, width:'100%', background:'#FFF3E0', borderRadius:8, display:'flex', justifyContent:'center', alignItems:'center', color:'#FF8E72'}}>
          UI Preview
        </div>
        <div style={{ marginTop:12, fontSize:14, color:'#555555'}}>Capture ideas and connect them quickly.</div>
      </div>
    </section>
  );
}
