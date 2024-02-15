// CartContext.js
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';


const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

//   const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const loadCartData = async () => {
      try {
        const storedCartItems = await AsyncStorage.getItem('cartItems');
        if (storedCartItems !== null) {
          setCartItems(JSON.parse(storedCartItems));
        }
      } catch (error) {
        console.error('Error loading cart data:', error);
      }
    };

    loadCartData();
  }, []);

  useEffect(() => {
    const saveCartData = async () => {
      try {
        await AsyncStorage.setItem('cartItems', JSON.stringify(cartItems));
      } catch (error) {
        console.error('Error saving cart data:', error);
      }
    };

    saveCartData();
  }, [cartItems]);


  // Function to add item to cart
  const addToCart = (item) => {
    setCartItems(prevItems => [...prevItems, item]);
  };

  // Function to remove item from cart
  const removeFromCart = (itemId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  //Function to clear cart
  const clearCart = () => {
    setCartItems([])
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
