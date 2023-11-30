// App.js
import React, { useState } from 'react';
import './App.css';
import DiscoveryItems from './DiscoveryItems';
import CategoryList from './CategoryList';
import EditPitchModal from './EditPitchModal';

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
    console.log('Current State:', discovery);
    setDiscovery((prevDiscovery) => ({
      ...prevDiscovery,
      [itemName]: !prevDiscovery[itemName],
    }));
    console.log('Updated State:', discovery);
  };
  

  const categories = ['phone', 'home', 'hotspot', 'smart_watch', 'tablet', 'wearable_tracker'];

  const pitch_categories = ['Vl', 'Hsi', 'Bts', 'Acc'];

  const [user, setUser] = useState({
    name: '',
    salesPitches: {
      Vl: '',
      Hsi: '',
      Bts: '',
      Acc: '',
    },
  });

  // States to manage the current sales pitch to be edited
  const [currentPitch, setCurrentPitch] = useState('');
  const [currentCategory, setCurrentCategory] = useState('');
  // State to manage whether the edit modal is visible
  const [showModal, setShowModal] = useState(false);

  // Function to handle updating the sales pitch
  const saveSalesPitch = (category, pitch) => {
    setUser(prevUser => ({
      ...prevUser,
      salesPitches: {
        ...prevUser.salesPitches,
        [category]: pitch,
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
        <h2>Discovery</h2>
        <div className="discovery-section">
          {categories.map((item) => (
            <DiscoveryItems
              key={item}
              itemName={item}
              isSelected={discovery[item]}
              onToggle={toggleDiscoveryItem}
              image={`${item}.svg`}
            />
          ))}
        </div>
        <div className="sales-pitch-section">
          <CategoryList
          categories={pitch_categories}
          user={user}
          onEditButtonClick={handleEditButtonClick}
        />
        {/* This section is for displaying the saved pitches */}
        <section className="saved-pitches">
          <h2>Saved Pitches</h2>
          <div className="pitches-container">
            {pitch_categories.map((pitch_categories) => (
              <div className="pitch-column" key={pitch_categories}>
                {/* Only display saved pitch if it's not empty */}
                {user.salesPitches[pitch_categories.toLowerCase()] && (
                  <>
                    <h3>{pitch_categories} Sales Pitch:</h3>
                    <p>{user.salesPitches[pitch_categories.toLowerCase()]}</p>
                  </>
                )}
            </div>
            ))}
          </div>
        </section>
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
