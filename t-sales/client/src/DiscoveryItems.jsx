// DiscoveryItems.jsx
import React from "react";
import PropTypes from "prop-types";
import "./DiscoveryItems.css";

const DiscoveryItems = ({ itemName, isSelected, onToggle, image }) => {
  return (
    <div
      className={`discovery-item ${isSelected ? "selected" : ""}`}
      onClick={() => onToggle(itemName)}
    >
      {/* Use the image prop to dynamically set the src attribute */}
      <img className="discovery-image" src={`/${image}`} alt={itemName} />
    </div>
  );
};

DiscoveryItems.propTypes = {
  itemName: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
};

export default DiscoveryItems;
