// App.js
import React, { useState } from 'react';
import './App.css';
import CategoryList from './CategoryList';
import EditPitchModal from './EditPitchModal';

function App() {
  //Categories
  const categories = ['vl', 'hsi', 'bts', 'acc'];

  const [user, setUser] = useState({
    name: '',
    salesPitches: {
      vl: '',
      hsi: '',
      bts: '',
      acc: '',
    },
  });

  // States to manage the current sales pitch to be edited
  const [currentPitch, setCurrentPitch] = useState('');
  const [currentCategory, setCurrentCategory] = useState('');
  // State to manage whether the edit modal is visiblea
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
  const handleEditButtonClick = (category) => {
    setCurrentCategory(category);
    setCurrentPitch(user.salesPitches[category]);
    setShowModal(true); // Show the modal
  };

  // Extended saveSalesPitch function that also hides the modal
  const extendedSaveSalesPitch = (category, pitch) => {
    saveSalesPitch(category, pitch);
    setShowModal(false); // Hide the modal
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>T Sales</h1>
      </header>
      <main className="App-body">
        <CategoryList
          categories={categories}
          user={user}
          onEditButtonClick={handleEditButtonClick}
        />

        {/* This section is for displaying the saved pitches */}
        <section className="saved-pitches">
          <h2>Pitches</h2>
          <div className="pitches-container">
            {categories.map((category) => (
              <div className="pitch-column" key={category}>
                {/* Only display saved pitch if it's not empty */}
                {user.salesPitches[category.toLowerCase()] && (
                  <>
                    <h3>{category} Sales Pitch:</h3>
                    <p>{user.salesPitches[category.toLowerCase()]}</p>
                  </>
                )}
              </div>
            ))}
          </div>
        </section>
 
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