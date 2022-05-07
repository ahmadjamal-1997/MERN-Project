import React, { Fragment } from 'react';
import mealsImage from '../assets/meals.jpg';
import classes from '../Layout/Header.module.css';
import HeaderCatButton from './HeaderCartButton';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Header = (props) => {

  const navigate = useNavigate();
  const logout = (e) => {
    e.preventDefault()
    axios.get('http://localhost:8000/api/logout', { withCredentials: true })
    navigate("/logreg")
}

  return <Fragment>
    <header className={classes.header}>
      <h1>Foodify</h1>
      <HeaderCatButton onClick={props.onShowCart} />
      <button onClick={e => logout(e)} className='btn btn-light mb-2'>Logout</button>
    </header>
    <div className={classes['main-image']}>
      <img src={mealsImage} alt='food' />
    </div>
  </Fragment>
};

export default Header