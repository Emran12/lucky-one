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
     
       if (addedMeal.length < 4){
        const newMeal = [...addedMeal, meal]; 
        setAddedMeal(newMeal);
       }
     }

     const selectOne = ()=>{
        const newMeal =  addedMeal[Math.floor(Math.random()*addedMeal.length)];
        setAddedMeal([newMeal]);
     
     }

     const selectAgain = ()=>{
         const newMeal = [];
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
                <h1>Selected Meals</h1>
                {
                    addedMeal.map(meal => <FavMeal key= {meal.id} meal ={meal}></FavMeal>)
                }
                <button className='btn' onClick={selectOne}>Select One</button> <br></br>
                <button className='btn' onClick={selectAgain}>Select Again</button>
            </div>
        </div>
    );
};

export default Meals;