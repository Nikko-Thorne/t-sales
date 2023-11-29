//discoveryItems.jsx
import React from 'react';
import PropTypes from 'prop-types';
import 'discoveryItems.css';

const DiscoveryItems = ({ itemName, isSelected, onToggle}) => {
    return (
        <div
        //apply css class to the div based on whether the item is selected
        className={`discovery-item ${isSelected ? 'selected' : ''}'}`}
        //attach the ontoggle event handler to the div 
        onClick={() => onToggle(itemName)}
        >
            {/* display the image */}
            <img src={`./public/${itemName}.svg`} alt={itemName} />

        </div>
    );
};

DiscoveryItems.propTypes = {
    itemName: PropTypes.string.isRequired,
    isSelected: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired
};

export default DiscoveryItems;