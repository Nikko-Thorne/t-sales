// CategoryList.js
import React from 'react';
import './CategoryList.css'; // Import the CSS file

function CategoryList({ categories, user, onSaveSalesPitch }) {
  const handleSalesPitch = (category) => {
    const pitch = prompt(`Enter sales pitch for ${category}:`);
    if (pitch !== null) {
      onSaveSalesPitch(category, pitch);
    }
  };

  return (
    <div>
      <h2>Categories</h2>
      <div className="container">
        {categories.map(category => (
          <div key={category} className="category">
            <strong>{category}</strong>: {user.salesPitches[category]}
            <button onClick={() => handleSalesPitch(category)}>
              Edit Pitch
            </button>
            <input
              type="text"
              value={user.salesPitches[category]}
              onChange={(e) => onSaveSalesPitch(category, e.target.value)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryList;
