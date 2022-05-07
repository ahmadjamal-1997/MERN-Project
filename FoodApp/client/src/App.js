import React, { useState } from 'react';
import './App.css';
import Cart from '../src/components/Cart/Cart';
import Header from '../src/components/Layout/Header';
import Meals from '../src/components/Meals/Meals';
import CartProvider from './store/CartProvider'

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} onClose={hideCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
