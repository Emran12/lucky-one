import React, { useEffect, useState } from 'react';
import FavMeal from '../FavMeal/FavMeal';
import Meal from '../Meal/Meal';
import './Meals.css';

const Meals = () => {
    const [meals, setMeals] = useState([]);
    const [addedMeal, setAddedMeal] = useState([]);
    useEffect (()=>{
        fetch('meals.json')
        .then(res => res.json())
        .then(data => setMeals(data))
     } , [])

     const handleChooseMeal = (meal) => {
       const newMeal = [...addedMeal, meal];
       setAddedMeal(newMeal);
     }


    return (
        <div className='meals-container'>
            <div className="meals">
                {
                    meals.map(meal => <Meal key = {meal.id} meal={meal} handleChooseMeal ={handleChooseMeal}></Meal>)   
                }
            </div>
            <div className="favourite-meals">
                <FavMeal meals = {addedMeal}></FavMeal>
                <button>Choose 1 For One</button> <br></br>
                <button>Choose Again</button>
            </div>
        </div>
    );
};

export default Meals;