import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  //item amount state
  const [itemAmount, setItemAmount] = useState(0);
  useEffect(()=>{
    if(cart){
      const amount = cart.reduce((accumulator,currentItem) => {
        return accumulator + currentItem.amount;
      },0);
      setItemAmount(amount);
    }
  },[cart]);

  //total price state
  const[total,setTotal]=useState(0)
  useEffect(()=>{
    const total=cart.reduce((accumulator,currentItem)=>{
      return accumulator+ currentItem.price * currentItem.amount;
    },0);
    setTotal(total);
  });


  // addToCart
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  // removeFromCart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  // clear Cart
  const clearCart = () => {
    setCart([]);
  };
  //increase  amount
  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem, id);
  };

  //Decrease  amount
  const DecreaseAmount = (id) => {
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    if (cartItem.amount < 2) {
      removeFromCart(id);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        DecreaseAmount,
        itemAmount,
        total
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
