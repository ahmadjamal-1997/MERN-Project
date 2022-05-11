import React from 'react';
import classes from '../Layout/Main.module.css';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { purple, yellow } from '@mui/material/colors';

const Main = () => {
  const navigate = useNavigate();
  const ColorButton = styled(Button)(({ theme }) => ({
    marginLeft: 20,
    color: theme.palette.getContrastText(purple[50]),
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: yellow[700],
    },
  }));

  return (
    <div>
        <header className={classes.header}>
          <h1>Foodify</h1>
          <div>
              {<ColorButton variant="contained" onClick={ () => navigate('/register') } >Join us</ColorButton>}
          </div>
        </header>
        <div className={classes['main']}>
            <p className={classes['p']}>"The Shortest to a human's Soul is Food" Order your heart's content from Foodify 😋</p>
        </div>
  </div>
  )
}

export default Main