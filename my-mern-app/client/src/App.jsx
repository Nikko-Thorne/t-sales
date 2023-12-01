import React, { useEffect, useState } from "react";
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

  const [salesPitches, setSalesPitches] = useState({
    Vl: "",
    Hsi: "",
    Bts: "",
    Acc: "",
  });

  const [currentPitch, setCurrentPitch] = useState("");
  const [currentCategory, setCurrentCategory] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleEditButtonClick = (pitch_category) => {
    setCurrentCategory(pitch_category);
    setCurrentPitch(salesPitches[pitch_category]);
    setShowModal(true);
  };

  const saveSalesPitch = (category, pitch) => {
    const upperCaseCategory = category.toUpperCase();
    setSalesPitches((prevPitches) => ({
      ...prevPitches,
      [upperCaseCategory]: pitch,
    }));
  };

  const extendedSaveSalesPitch = (category, pitch) => {
    saveSalesPitch(category, pitch);
    setShowModal(false);
  };

  useEffect(() => {
    const savedPitches = localStorage.getItem("salesPitches");
    try {
      // Try parsing the JSON string
      if (savedPitches) {
        setSalesPitches(JSON.parse(savedPitches));
      } else {
        // If there's no data, set default values
        setSalesPitches({
          Vl: "",
          Hsi: "",
          Bts: "",
          Acc: "",
        });
      }
    } catch (error) {
      // If parsing fails, handle the error (e.g., log it)
      console.error("Error parsing JSON:", error);
      // Set default values
      setSalesPitches({
        Vl: "",
        Hsi: "",
        Bts: "",
        Acc: "",
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("salesPitches", JSON.stringify(salesPitches));
  }, [salesPitches]);

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
                  {salesPitches[pitch_category.toUpperCase()] && (
                    <p>{salesPitches[pitch_category.toUpperCase()]}</p>
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
