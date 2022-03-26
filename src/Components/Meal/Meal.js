import React from 'react';
import './Meal.css';

const Meal = (props) => {
    const {name, img, price} = props.meal; 
    return (
        <div className='meal-container'>
            <img src={img} alt="" />
            <div className='meal-info'>
                <p>{name}</p>
                <p>Price: ${price}</p>
                <button className='btn-meal'>Add Meal</button>
            </div>
            
        </div>
    );
};

export default Meal;