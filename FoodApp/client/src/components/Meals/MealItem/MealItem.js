import React, { useContext } from 'react'
import classes from '../MealItem/MealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';
import { Link } from 'react-router-dom';

const MealItem = (props) => {
    const price = `$${props.price.toFixed(2)}`;
    const cartCtx = useContext(CartContext);

    const addToCartHandler = amount => {
        console.log(props.id);
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });
    };
    return <li className={classes.meal}>
        <div>
            <h3><Link style={{color:'rgb(38 154 53)', textDecoration: 'none'}} to={"/update/" + props.id}>{props.name}</Link></h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div>
            <MealItemForm onAddToCartHandler={addToCartHandler} />
        </div>
    </li>
}

export default MealItem