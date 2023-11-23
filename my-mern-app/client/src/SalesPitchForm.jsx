import React, { useState } from 'react';

function SalesPitchForm({ categories, user, onSaveSalesPitch }) {
    const [formValues, setFormValues] = useState({
        vl: user.salesPitches.vl,
        hsi: user.salesPitches.hsi,
        bts: user.salesPitches.bts,
        acc: user.salesPitches.acc,
    });

    const handleChange = (category, value) => {
        setFormValues(prevValues => ({
            ...prevValues,
            [category]: value,
        }));
    };

    const handleSalesPitch = () => {
        onSaveSalesPitch('vl', formValues.vl);
        onSaveSalesPitch('hsi', formValues.hsi);
        onSaveSalesPitch('bts', formValues.bts);
        onSaveSalesPitch('acc', formValues.acc);
    };

    return (
        <div>
            <h2>Sales Pitch Form</h2>
            <form>
                {categories.map(category => (
                    <div key={category}>
                        <label htmlFor={category}>{category}</label>
                        <input
                            id={category}
                            type="text"
                            value={formValues[category]}
                            onChange={e => handleChange(category, e.target.value)}
                        />
                    </div>
                ))}
                <button type="button" onClick={handleSalesPitch}>
                    Save Sales Pitch
                </button>
            </form>
        </div>
    );
}

export default SalesPitchForm;