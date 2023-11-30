// App.js
import React, { useState } from "react";
import "./App.css";
import DiscoveryItems from "./DiscoveryItems";
import EditPitchModal from "./EditPitchModal";

function App() {
  const [discovery, setDiscovery] = useState({
    phone: false,
    home: false,
    hotspot: false,
    smart_watch: false,
    tablet: false,
    wearable_tracker: false,
  });

  const toggleDiscoveryItem = (itemName) => {
    console.log("Current State:", discovery);
    setDiscovery((prevDiscovery) => ({
      ...prevDiscovery,
      [itemName]: !prevDiscovery[itemName],
    }));
    console.log("Updated State:", discovery);
  };

  const resetDiscoveryHighlights = () => {
    setDiscovery({
      phone: false,
      home: false,
      hotspot: false,
      smart_watch: false,
      tablet: false,
      wearable_tracker: false,
    });
  };

  const categories = [
    "phone",
    "home",
    "hotspot",
    "smart_watch",
    "tablet",
    "wearable_tracker",
  ];

  const pitch_categories = ["Vl", "Hsi", "Bts", "Acc"];

  const [user, setUser] = useState({
    name: "",
    salesPitches: {
      Vl: "",
      Hsi: "",
      Bts: "",
      Acc: "",
    },
  });

  // States to manage the current sales pitch to be edited
  const [currentPitch, setCurrentPitch] = useState("");
  const [currentCategory, setCurrentCategory] = useState("");
  // State to manage whether the edit modal is visible
  const [showModal, setShowModal] = useState(false);

  // Function to handle updating the sales pitch
  const saveSalesPitch = (category, pitch) => {
    setUser((prevUser) => ({
      ...prevUser,
      salesPitches: {
        ...prevUser.salesPitches,
        [category.toUpperCase()]: pitch,
      },
    }));
  };

  // Function to initiate editing a pitch
  const handleEditButtonClick = (pitch_categories) => {
    setCurrentCategory(pitch_categories);
    setCurrentPitch(user.salesPitches[pitch_categories]);
    setShowModal(true); // Show the modal
  };

  // Extended saveSalesPitch function that also hides the modal
  const extendedSaveSalesPitch = (pitch_categories, pitch) => {
    saveSalesPitch(pitch_categories, pitch);
    setShowModal(false); // Hide the modal
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>T Sales</h1>
      </header>
      <main className="App-body">
        <h2 onClick={resetDiscoveryHighlights} style={{ cursor: "pointer" }}>
          Discovery
        </h2>
        <div className="discovery-section">
          {categories.map((item) => (
            <DiscoveryItems
              key={item}
              itemName={item}
              isSelected={discovery[item]}
              onToggle={toggleDiscoveryItem}
              image={`${item}.svg`}
              className={`discovery-item ${item}`}
            />
          ))}
        </div>
        <div className="saved-pitches-container">
          {pitch_categories.map((pitch_category) => (
            <div
              key={pitch_category}
              className={`category-container ${pitch_category.toLowerCase()}`}
            >
              <div className="category-header">
                <span className="category-title">{pitch_category}</span>
              </div>

              {/* Saved pitch section moved above */}
              <div className="saved-pitch">
                {user.salesPitches[pitch_category.toUpperCase()] && (
                  <p>{user.salesPitches[pitch_category.toUpperCase()]}</p>
                )}
              </div>

              {/* Edit button moved below the "Saved Pitch" section */}
              <button
                className="edit-button"
                onClick={() => handleEditButtonClick(pitch_category)}
              >
                Edit
              </button>
            </div>
          ))}
        </div>
        {showModal && (
          <EditPitchModal
            category={currentCategory}
            pitch={currentPitch}
            onSave={extendedSaveSalesPitch}
            onClose={() => setShowModal(false)}
          />
        )}
      </main>
    </div>
  );
}

export default App;
