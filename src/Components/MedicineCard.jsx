import React from 'react';

const MedicineCard = ({ name, dosage, description, price, addToCart, buyNow }) => {
  const handleAddToCart = () => {
    addToCart({ name, dosage, description, price });
  };

  const handleBuyNow = () => {
    buyNow({ name, dosage, description, price });
  };

  return (
    <div className="mb-2 mt-3 border border-gray-300 shadow-lg rounded-lg medicine-card">
      <div className="p-3">
        <h5 className="text-lg font-bold">{name}</h5>
        <p className="text-sm text-gray-500 mb-2">Dosage: {dosage}</p>
        <p className="mb-2">{description}</p>
        <p className="text-sm text-green-500 mb-4">Price: {price}</p>

        <div className="flex justify-between items-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleAddToCart}>
            Add to Cart
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={handleBuyNow}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default MedicineCard;
