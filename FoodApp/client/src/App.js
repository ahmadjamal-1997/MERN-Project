import React, { useState } from 'react';
import './App.css';
import Cart from '../src/components/Cart/Cart';
import Header from '../src/components/Layout/Header';
import Meals from '../src/components/Meals/Meals';
import CartProvider from './store/CartProvider'
import LogReg from './components/LogReg/LogReg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/logreg" element={<LogReg />} />

          <Route path="/"
            element={
              <PrivateRoute>
                <CartProvider>
                  {cartIsShown && <Cart onClose={hideCartHandler} />}
                  <Header onShowCart={showCartHandler} onClose={hideCartHandler} />
                  <main>
                    <Meals />
                  </main>
                </CartProvider>
              </PrivateRoute>
            } />

          {/* <Route path="/projects/new" element={<PrivateRoute>
            <ProjectForm />
          </PrivateRoute>} /> */}

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
