
import React, { useState, useReducer, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

// Initial Cart State
const initialCartState = [];

// Cart Reducer
function cartReducer(state, action) {
  switch (action.type) {

    case "ADD_ITEM": {
      const existingItem = state.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [
        ...state,
        { ...action.payload, quantity: 1 }
      ];
    }

    case "INCREASE_QUANTITY":
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

    case "DECREASE_QUANTITY":
      return state
        .map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);

    case "REMOVE_ITEM":
      return state.filter(
        (item) => item.id !== action.payload
      );

    case "CLEAR_CART":
      return [];

    case "LOAD_CART":
      return action.payload;

    default:
      return state;
  }
}

// Main App Component
function App() {

  // User State
  const [userName, setUserName] = useState("");

  // Cart State
  const [cartItems, dispatch] = useReducer(
    cartReducer,
    initialCartState
  );

  // Cart Loading State
  const [cartLoaded, setCartLoaded] = useState(false);

  // Restore Cart from LocalStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");

    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);

        if (Array.isArray(parsedCart)) {
          dispatch({
            type: "LOAD_CART",
            payload: parsedCart
          });
        }
      } catch (error) {
        console.error("Error loading cart:", error);
      }
    }

    setCartLoaded(true);
  }, []);

  // Save Cart to LocalStorage
  useEffect(() => {
    if (!cartLoaded) return;

    localStorage.setItem(
      "cart",
      JSON.stringify(cartItems)
    );
  }, [cartItems, cartLoaded]);

  return (
    <>
      {/* Global Navbar */}
      <Navbar
        userName={userName}
        cart={cartItems}
      />

      {/* All Pages */}
      <Outlet
        context={{
          userName,
          setUserName,
          cartItems,
          dispatch
        }}
      />

      {/* Global Footer */}
      <Footer />
    </>
  );
}

export default App;
