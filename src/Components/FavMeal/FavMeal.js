import React from 'react';

const FavMeal = ({meal}) => {
    return (
        <div>
         {
             <p>{meal.name}</p>
         }
        </div>
    );
};

export default FavMeal;