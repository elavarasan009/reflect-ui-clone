import React from "react";
import FeatureCard from "./FeatureCard";
export default function Features() {
  const items = [
    { title: "Fast capture", desc: "Quickly write ideas and link them." },
    { title: "Networked notes", desc: "Connect notes to reveal insights." },
    { title: "AI helpers", desc: "Summaries, templates, and writing help." },
  ];
  return (
    <section className="features">
      <div className="grid-3">
        {items.map((it,i) => <FeatureCard key={i} title={it.title} desc={it.desc} />)}
      </div>
    </section>
  );
}
