// CategoryList.jsx
import React from 'react';
import './CategoryList.css'; // Import the CSS file

function CategoryList({ categories, user, onEditButtonClick }) {
  return (
    <div>
      <h2>Categories</h2>
      <div className="container">
        {categories.map(category => (
          <div key={category} className="category">
            <strong>{category}</strong>: {user.salesPitches[category.toLowerCase()]}
            <button onClick={() => onEditButtonClick(category.toLowerCase())}>
              Edit Pitch
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryList;