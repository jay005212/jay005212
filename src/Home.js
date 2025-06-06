// src/Home.js
import React from 'react';
import './Home.css'; // optional if you want to add custom styling

export default function Home() {
  return (
    <div className="home-container">
      <h1>🌐 AI Email Draft Assistant</h1>
      <p>Welcome! You’ve successfully logged in or registered.</p>

      <div className="card">
        <h2>Start Drafting Your Email</h2>
        <p>Select a language and describe your message.</p>
        <button onClick={() => alert('Coming Soon!')}>
          ✍ Start Writing
        </button>
      </div>
    </div>
  );
}