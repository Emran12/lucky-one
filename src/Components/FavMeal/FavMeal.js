import React from 'react';

const FavMeal = ({meals}) => {
    console.log(meals);
    return (
        <div>
         {
              meals.map(meal => <p>{meal.name}</p>)
         }

        </div>
    );
};

export default FavMeal;