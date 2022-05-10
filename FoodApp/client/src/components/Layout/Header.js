import React, { Fragment, useEffect, useState } from 'react';
import mealsImage from '../assets/meals.jpg';
import classes from '../Layout/Header.module.css';
import HeaderCatButton from './HeaderCartButton';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Header = (props) => {

  const navigate = useNavigate();

  const[user, setUser] = useState({});

  const[loaded, setLoaded] = useState(false);


  useEffect(()=>{
      axios.get("http://localhost:8000/api/logreg", {withCredentials:true})
          .then(res=>{
              console.log(res)
              axios.get("http://localhost:8000/api/user/"+res.data.userId, {withCredentials:true})
              .then(res=>{
                  console.log(res)
                  setUser(res.data)
                  setLoaded(true)
              })
              .catch(err=>{
                  console.log("errrrrrrr",err)
              })
          })
          .catch(err=>{
              console.log("errrrrrrr",err)
              navigate("/main")
          })
  }, [])



  const logout = (e) => {
    e.preventDefault()
    axios.get('http://localhost:8000/api/logout', { withCredentials: true })
    navigate("/main")
}

  return <Fragment>
    <header className={classes.header}>
      <h1>Foodify</h1>
      <HeaderCatButton onClick={props.onShowCart} />
      <p>{user.firstName}</p>
      <button onClick={e => logout(e)} className='btn btn-light mb-2'>Logout</button>
      <button onClick={() => navigate("/meals/new")} className='btn btn-light mb-2'>Add Meal</button>
    </header>
    <div className={classes['main-image']}>
      <img src={mealsImage} alt='food' />
    </div>
  </Fragment>
};

export default Header