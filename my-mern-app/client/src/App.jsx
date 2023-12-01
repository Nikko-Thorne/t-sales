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
    setDiscovery((prevDiscovery) => ({
      ...prevDiscovery,
      [itemName]: !prevDiscovery[itemName],
    }));
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

  const [currentPitch, setCurrentPitch] = useState("");
  const [currentCategory, setCurrentCategory] = useState("");
  const [showModal, setShowModal] = useState(false);

  const saveSalesPitch = (category, pitch) => {
    setUser((prevUser) => ({
      ...prevUser,
      salesPitches: { ...prevUser.salesPitches, [category]: pitch },
    }));
  };

  const handleEditButtonClick = (pitch_category) => {
    setCurrentCategory(pitch_category);
    setCurrentPitch(user.salesPitches[pitch_category]);
    setShowModal(true);
  };

  const extendedSaveSalesPitch = (pitch_category, pitch) => {
    saveSalesPitch(pitch_category, pitch);
    setShowModal(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>T Sales</h1>
      </header>
      <div className="App-content">
        <aside className="discovery-sidebar">
          <h2 onClick={resetDiscoveryHighlights} style={{ cursor: "pointer" }}>
            Discovery
          </h2>
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
        </aside>
        <main className="App-body">
          <h2 className="pitches-header">Pitches</h2>
          <div className="saved-pitches-container">
            {pitch_categories.map((pitch_category) => (
              <div
                key={pitch_category}
                className={`category-container ${pitch_category.toLowerCase()}`}
              >
                <div className="category-header">
                  <span className="category-title">{pitch_category}</span>
                </div>

                <div className="saved-pitch">
                  {user.salesPitches[pitch_category] && (
                    <p>{user.salesPitches[pitch_category]}</p>
                  )}
                </div>

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
    </div>
  );
}

export default App;
