import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Meals.css';

const Meals = () => {
    const [meals, setMeals] = useState([]);
    useEffect (()=>{
        fetch('meals.json')
        .then(res => res.json())
        .then(data => setMeals(data))
     } , [])
    return (
        <div className='meals-container'>
            <div className="meals">
                {
                    meals.map(meal => <Meal key = {meal.id} meal={meal}></Meal>)   
                }
            </div>
            <div className="favourite-meals">
                <p>Choose meals</p>
               
            </div>
        </div>
    );
};

export default Meals;