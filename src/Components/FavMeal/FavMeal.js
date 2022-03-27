import React from 'react';
import './FavMeal.css';

const FavMeal = ({meal}) => {
    return (
        <div>
         {
             <div className='selected-meals'>
                 <p><img src={meal.img} alt="" />{meal.name} </p>
             </div>
         } 
        </div>
    );
};

export default FavMeal;