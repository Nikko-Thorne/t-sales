// EditPitchModal.jsx
import React from 'react';
import './EditPitchModal.css';  // Make sure to style your modal

function EditPitchModal({ category, pitch, onSave, onClose }) {
  // Controlled input state
  const [newPitch, setNewPitch] = React.useState(pitch);

  return (
    <div className="editPitchModal">
      <div className="modalContent">
        <h2>Edit Sales Pitch for {category}</h2>
        <textarea
          rows="5"
          value={newPitch}
          onChange={(e) => setNewPitch(e.target.value)}
        />
        <div>
          <button onClick={() => {
            onSave(category.toLowerCase(), newPitch);
            onClose();
          }}>
            Save Pitch
          </button>
          <button onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditPitchModal;