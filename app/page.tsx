"use client";

import Counter from "../components/Counter";
import "./globals.css"

export default function Home() {
  return (
    <main className="container">
      <h1>Next.js Button Counter</h1>

      <section className="counter-section">
        <h2>Default Counter</h2>
        <Counter />
      </section>

      <section className="counter-section">
        <h2>Custom Counter (Start at 5, Step = 2) </h2>
        <Counter />
      </section>
    </main>
  )
}