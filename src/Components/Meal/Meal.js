import React from 'react';
import './Meal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';

const Meal = (props) => {
    const {name, img, price} = props.meal; 
    return (
        <div className='meal-container'>
            <img src={img} alt="" />
            <div className='meal-info'>
                <p>{name}</p>
                <p>Price: ${price}</p>
                <button className='btn-meal' onClick={()=>props.handleChooseMeal(props.meal)}>Add Meal <span className='cart-logo'><FontAwesomeIcon  icon = {faShoppingCart}></FontAwesomeIcon> </span> </button>
            </div>
            
        </div>
    );
};

export default Meal;