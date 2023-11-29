// App.js
import React, { useState } from 'react';
import './App.css';
import DiscoveryItems from './DiscoveryItems';

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
      </main>
    </div>
  );
}

export default App;
