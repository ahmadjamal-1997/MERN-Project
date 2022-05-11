import React, { useState } from 'react';
import './App.css';
import Cart from '../src/components/Cart/Cart';
import Header from '../src/components/Layout/Header';
import Meals from '../src/components/Meals/Meals';
import CartProvider from './store/CartProvider'
import LogReg from './components/LogReg/LogReg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import MealForm from './components/AddMeal/MealForm';
import UpdateMeal from './components/UpdateMeal/UpdateMeal';
import Main from './components/Layout/Main'
import RegForm from './components/LogReg/RegForm';
import LoginForm from './components/LogReg/LoginForm';
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
          <Route path="/Main" element={<Main />} />
          <Route path="/register" element={<LogReg />} />
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

          <Route path="/meals/new" element={
            <PrivateRoute>
              <MealForm />
            </PrivateRoute>
          } />
          <Route path="/main" element={
            
              <Main />
            
          } />


          {/* <Route path="/projects/new" element={<PrivateRoute>
            <ProjectForm />
          </PrivateRoute>} /> */}
          <Route path="/update/:id" element={<PrivateRoute>
              <UpdateMeal />
            </PrivateRoute>}/>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
