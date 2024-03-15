import React from "react";
import Footer from "./Footer";

const Cart = ({ cartItems, setCartItems }) => {
  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity--;

    if (updatedCart[index].quantity === 0) {
      updatedCart.splice(index, 1);
    }

    setCartItems(updatedCart);
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="mt-5 flex-grow">
          <h2 className="text-xl font-semibold mb-4 px-4">Your Cart</h2>
          {cartItems.length === 0 ? (
            <p className="text-center">Your cart is empty.</p>
          ) : (
            <div className="flex flex-wrap mx-4">
              <div className="w-full md:w-2/3 mb-4">
                {cartItems.map((item, index) => (
                  <div key={index} className="mb-4">
                    <div className="bg-white shadow rounded p-4 flex justify-between items-center">
                      <div className="flex items-center">
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          className="h-20 w-20 object-cover mr-4"
                        />
                        <div>
                          <h5 className="text-lg font-medium">
                            {item.name} - {item.dosage}
                          </h5>
                          <p className="text-gray-600">{item.description}</p>
                          <p className="text-gray-800">
                            ₹{item.price} ({item.quantity}{" "}
                            {item.quantity > 1 ? "items" : "item"})
                          </p>
                        </div>
                      </div>
                      <button
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                        onClick={() => removeFromCart(index)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="w-full md:w-1/3 mb-4">
                <div className="bg-white shadow rounded p-4">
                  <h4 className="text-lg font-semibold mb-3">Summary</h4>
                  <p className="text-gray-600">Total items: {cartItems.length}</p>
                  <p className="text-gray-800">Total price: ₹{totalPrice.toFixed(2)}</p>
                </div>
              </div>
            </div>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Cart;
