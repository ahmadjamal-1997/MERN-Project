import React, { Fragment } from 'react';
import image from '../assets/main_image.jpg';
import classes from '../Layout/Header.module.css';
import HeaderCatButton from './HeaderCartButton';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Main = () => {
  return (
    <div>
        <header className={classes.header}>
    <h1>Foodify</h1>
  </header>
  <div className={classes['main']}>
  {/* <img src={image} alt='food' /> */}
    <p className={classes['p']}>Welcome to Foodify! Start your journey now</p>
    <Link to={"/logreg"} ><button className={classes['m']}>Click here</button></Link>
  </div>
  </div>
  )
}

export default Main