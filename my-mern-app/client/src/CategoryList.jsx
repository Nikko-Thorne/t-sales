import React from 'react';

function CategoryList({ categories, user, onSaveSalesPitch }) {
  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map(category => (
          <li key={category}>
            <strong>{category}</strong>: {user.salesPitches[category]}
            <button
              onClick={() => {
                const pitch = prompt(`Enter sales pitch for ${category}:`);
                if (pitch !== null) {
                  onSaveSalesPitch(category, pitch);
                }
              }}
            >
              Edit Pitch
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;
