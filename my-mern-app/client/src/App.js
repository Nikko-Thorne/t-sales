import React, { useState } from 'react';
import './App.css';
import CategoryList from './CategoryList';
import SalesPitchForm from './SalesPitchForm';

function App() {
  const categories = ['Vl', 'Hsi', 'Bts', 'Acc'];

  const [user, setUser] = useState({
    name: '',
    salesPitches: {
      vl: '',
      hsi: '',
      bts: '',
      acc: ''
    },
  });

  const saveSalesPitch = (category, pitch) => {
    // update the user's pitches
    setUser(prevUser => ({
      ...prevUser,
      salesPitches: {
        ...prevUser.salesPitches,
        [category]: pitch,
      },
    }));
  };

  return (
    <div className="App">
    <header className="App-header">
      <h1>Personalized Sales Pitch App</h1>
      <CategoryList categories={categories} user={user} onSaveSalesPitch={saveSalesPitch} />
      <SalesPitchForm categories={categories} user={user} onSaveSalesPitch={saveSalesPitch} />
    </header>
  </div>
  );
}