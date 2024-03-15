import React, { useState } from "react";
import Footer from "./Footer";

const AddMedicineForm = ({ onAddMedicine }) => {
  const [medicineData, setMedicineData] = useState({
    name: "",
    dosage: "",
    description: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMedicineData({
      ...medicineData,
      [name]: value,
    });
  };

  const handleAddMedicine = () => {
    if (
      medicineData.name &&
      medicineData.dosage &&
      medicineData.description &&
      medicineData.price
    ) {
      onAddMedicine(medicineData);
      setMedicineData({
        name: "",
        dosage: "",
        description: "",
        price: "",
      });
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="container mx-auto flex items-center justify-center flex-grow p-6">
          <div className="w-full max-w-lg">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="name"
                value={medicineData.name}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Dosage</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="dosage"
                value={medicineData.dosage}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Description</label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                rows="3"
                name="description"
                value={medicineData.description}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Price</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="price"
                value={medicineData.price}
                onChange={handleChange}
              />
            </div>

            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleAddMedicine}
            >
              Add Medicine
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AddMedicineForm;
