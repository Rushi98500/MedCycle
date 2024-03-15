import React from 'react';
import MedicineCard from './MedicineCard';
import Footer from './Footer';

const MedicineGrid = ({ addToCart, searchTerm }) => {

  const medicines = [
    { name: 'Aspirin', dosage: '75mg', description: 'Blood thinner and pain relief', price: 5.99 },
    { name: 'Cetirizine', dosage: '5mg', description: 'Antihistamine for allergies', price: 8.49 },
    { name: 'Atorvastatin', dosage: '20mg', description: 'Cholesterol-lowering medication', price: 12.99 },
    { name: 'Morphine', dosage: '10mg', description: 'Strong painkiller', price: 25.99 },
    { name: 'Albuterol', dosage: '100mcg', description: 'Bronchodilator for asthma', price: 9.99 },
    { name: 'Diazepam', dosage: '5mg', description: 'Anxiolytic and muscle relaxant', price: 15.49 },
    { name: 'Metformin', dosage: '500mg', description: 'Antidiabetic medication', price: 7.99 },
    { name: 'Warfarin', dosage: '2mg', description: 'Anticoagulant for blood clot prevention', price: 14.99 },
    { name: 'Sertraline', dosage: '50mg', description: 'Antidepressant', price: 19.99 },
    { name: 'Hydrochlorothiazide', dosage: '25mg', description: 'Diuretic for blood pressure', price: 10.99 },
    { name: 'Gabapentin', dosage: '300mg', description: 'Neuropathic pain medication', price: 22.49 },
    { name: 'Ciprofloxacin', dosage: '500mg', description: 'Antibiotic for bacterial infections', price: 13.99 },
    { name: 'Fluticasone', dosage: '50mcg', description: 'Inhaled corticosteroid for asthma', price: 16.99 },
    { name: 'Lisinopril', dosage: '10mg', description: 'ACE inhibitor for blood pressure', price: 11.49 },
    { name: 'Levothyroxine', dosage: '50mcg', description: 'Thyroid hormone replacement', price: 18.99 },
    { name: 'Naproxen', dosage: '220mg', description: 'Nonsteroidal anti-inflammatory drug', price: 9.99 },
    { name: 'Escitalopram', dosage: '10mg', description: 'Antidepressant', price: 17.49 },
    { name: 'Furosemide', dosage: '40mg', description: 'Loop diuretic for edema', price: 12.99 },
    { name: 'Pantoprazole', dosage: '40mg', description: 'Proton pump inhibitor for acid reflux', price: 15.99 },
    { name: 'Clonazepam', dosage: '1mg', description: 'Antiepileptic and anxiolytic', price: 20.49 },
    { name: 'Ibuprofen', dosage: '200mg', description: 'Pain reliever and anti-inflammatory', price: 7.49 },
    { name: 'Amlodipine', dosage: '5mg', description: 'Calcium channel blocker for hypertension', price: 4.49 },
    { name: 'Omeprazole', dosage: '20mg', description: 'Proton pump inhibitor for gastric issues', price: 13.49 },
    { name: 'Dexamethasone', dosage: '4mg', description: 'Corticosteroid for inflammation', price: 16.49 },
    { name: 'Hydrocodone', dosage: '5mg', description: 'Opioid analgesic for severe pain', price: 23.99 },
    { name: 'Azithromycin', dosage: '250mg', description: 'Macrolide antibiotic for infections', price: 11.99 },
    { name: 'Propranolol', dosage: '40mg', description: 'Beta-blocker for hypertension', price: 8.99 },
    { name: 'Simvastatin', dosage: '20mg', description: 'Cholesterol-lowering medication', price: 9.49 },
    { name: 'Clonazepam', dosage: '1mg', description: 'Antiepileptic and anxiolytic', price: 20.49 },
    { name: 'Ibuprofen', dosage: '200mg', description: 'Pain reliever and anti-inflammatory', price: 7.49 },
    { name: 'Amlodipine', dosage: '5mg', description: 'Calcium channel blocker for hypertension', price: 4.49 },
    { name: 'Omeprazole', dosage: '20mg', description: 'Proton pump inhibitor for gastric issues', price: 13.49 },
    { name: 'Dexamethasone', dosage: '4mg', description: 'Corticosteroid for inflammation', price: 16.49 },
    { name: 'Hydrocodone', dosage: '5mg', description: 'Opioid analgesic for severe pain', price: 23.99 },
    { name: 'Azithromycin', dosage: '250mg', description: 'Macrolide antibiotic for infections', price: 11.99 },
    { name: 'Propranolol', dosage: '40mg', description: 'Beta-blocker for hypertension', price: 8.99 },
    { name: 'Simvastatin', dosage: '20mg', description: 'Cholesterol-lowering medication', price: 9.49 },
    { name: 'Simvastatin', dosage: '20mg', description: 'Cholesterol-lowering medication', price: 9.49 },
    { name: 'Hydrocodone', dosage: '5mg', description: 'Opioid analgesic for severe pain', price: 23.99 },
    { name: 'Azithromycin', dosage: '250mg', description: 'Macrolide antibiotic for infections', price: 11.99 },



    // Add more medicines as needed
  ];

  const filteredMedicines = medicines.filter((medicine) =>
  medicine.name.toLowerCase().includes(searchTerm.toLowerCase())
);
return (
  <>
    <div className="container mx-auto my-6">
      <div className="flex flex-wrap -mx-16">
        {filteredMedicines.map((medicine, index) => (
          <div key={index} className="p-1 w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
            <MedicineCard {...medicine} addToCart={addToCart} />
          </div>
        ))}
      </div>
    </div>
    <Footer />
  </>
);
};

export default MedicineGrid;
