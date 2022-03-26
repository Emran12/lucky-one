import React, { useEffect, useState } from 'react';

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
                    <h1>Total Meals {meals.length}</h1>
            </div>
            <div className="favourite-meals">

            </div>
        </div>
    );
};

export default Meals;