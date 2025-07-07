import React from "react";

export default function HomePage() {
  return (
    <main style={{ padding: "2rem", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      <h1>🌟 Welcome to My Booking Site! 🌟</h1>
      <p>
        This is the starting point of your new website. Customize this page to
        showcase your services, booking options, and much more.
      </p>
      <section style={{ marginTop: "2rem" }}>
        <h2>🚀 Get Started</h2>
        <ul>
          <li>🎨 Customize your design and branding</li>
          <li>📅 Add booking forms and calendars</li>
          <li>🤖 Integrate AI helpers and chatbots</li>
          <li>🌐 Deploy easily to GitHub and Cloudflare</li>
        </ul>
      </section>
      <footer style={{ marginTop: "4rem", fontSize: "0.9rem", color: "#666" }}>
        <p>Made with ❤️ by You</p>
      </footer>
    </main>
  );
}
