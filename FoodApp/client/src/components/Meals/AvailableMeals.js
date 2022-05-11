import React, { useEffect, useState} from 'react'
import axios from 'axios'
import classes from '../Meals/AvailableMeals.module.css'
import Card from '../UI/Card'
import MealItem from '../Meals/MealItem/MealItem'

// const DUMMY_MEALS = [
//     {
//         id: 'm1',
//         name: 'Sushi',
//         description: 'Finest fish and veggies',
//         price: 22.99,
//     },
//     {
//         id: 'm2',
//         name: 'Schnitzel',
//         description: 'A german specialty!',
//         price: 16.5,
//     },
//     {
//         id: 'm3',
//         name: 'Barbecue Burger',
//         description: 'American, raw, meaty',
//         price: 12.99,
//     },
//     {
//         id: 'm4',
//         name: 'Green Bowl',
//         description: 'Healthy...and green...',
//         price: 18.99,
//     },
// ];

const AvailableMeals = () => {

    const [meals, setMeals] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/meals")
            .then((res) => {
                setMeals(res.data);
            })
            .catch((err) => console.log(err));
    }, []);
    const mealsList = meals.map((meal, idx) => (
        <MealItem
            key={idx}
            id={meal._id}
            name={meal.name}
            description={meal.description}
            price={meal.price} />
    ));


    return <section className={classes.meals}>
        <Card>
            <ul>{mealsList}</ul>
        </Card>
    </section>
}

export default AvailableMeals