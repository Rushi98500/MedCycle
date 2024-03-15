import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Components/HomePage';
import LogIn from './Components/LogIn';
import MedicineGrid from './Components/MedicineGrid';
import AddMedicineForm from './Components/AddMedicineForm';
import ForgotPassword from './Components/ForgotPassword';
import Cart from './Components/Cart';
import NotFoundPage from './Components/NotFoundPage';
import AdminDashboard from './Components/AdminDashboard';
import UserDashboard from './Components/UserDashboard';
import ConditionalNavbar from './Components/ConditionalNavbar';
import NotificationSystem from './Components/NotificationSystem';


const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const addToCart = (item) => {
    const updatedCart = [...cartItems];
    const existingItemIndex = updatedCart.findIndex(
      (cartItem) => cartItem.name === item.name &&
        cartItem.dosage === item.dosage &&
        cartItem.description === item.description &&
        cartItem.price === item.price
    );

    if (existingItemIndex !== -1) {
      updatedCart[existingItemIndex].quantity += 1;
    } else {
      updatedCart.push({ ...item, quantity: 1 });
    }

    setCartItems(updatedCart);
  };

  return (
    <>
      <BrowserRouter>
        <ConditionalNavbar setCartItems={setCartItems} setSearchTerm={setSearchTerm} />
        <Routes>
          <Route index element={<LogIn />} />
          <Route path="home" element={<HomePage />} />
          <Route path="medicine" element={<MedicineGrid addToCart={addToCart} searchTerm={searchTerm} />} />
          <Route path="add_medicine" element={<AddMedicineForm />} />
          <Route path="login" element={<LogIn />} />
          <Route path="forgotpassword" element={<ForgotPassword />} />
          <Route path="cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/user" element={<UserDashboard />} />
          <Route path="/notificationSystem" element={<NotificationSystem />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
