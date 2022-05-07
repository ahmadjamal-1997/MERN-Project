import React, { Fragment } from 'react';
import mealsImage from '../assets/meals.jpg';
import classes from '../Layout/Header.module.css';
import HeaderCatButton from './HeaderCartButton';
const Header = (props) => {
  return <Fragment>
    <header className={classes.header}>
      <h1>Foodify</h1>
      <HeaderCatButton onClick={props.onShowCart} />
    </header>
    <div className={classes['main-image']}>
      <img src={mealsImage} alt='food' />
    </div>
  </Fragment>
};

export default Header