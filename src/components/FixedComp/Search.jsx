import React from 'react';
import '../../index.css'; // Import the CSS file

export default function Search({ placeholder }) {
  return (
    <div className="search-container">
      {/* Input Field */}
      <input
        type="text"
        className="search-input"
        placeholder={placeholder}
      />
      <button className="search-button">
        🔍
      </button>
    </div>
  );
}
