import React from 'react';

import classes from './Burger.css';

import BurgerIngredient from './BurgerIngredients/BurgerIngredient';

const burger = (props) => {

    //Object, keys is used to convert object to array.
    //Input => ingredients: {salad: 1, bacon: 2...}
    // ["salad", "cheese", "bacon"]

    //console.log(Object.keys(props.ingredients));

    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            // console.log(igKey)
            // console.log(props.ingredients);
            /*
            igkey = salad, cheese each element gets in to the loop
                salad
                cheese
                bacon
            */

            //...Array(props.ingredients[igKey])
            //creates a new array and access the values

            //'_' indicates the element which does not come into count
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                // console.log([Array(props.ingredients[igKey])])
                // console.log(igKey);
                return <BurgerIngredient key={igKey + i} type={igKey} />
            });
        }).reduce((arr, el) => {
            return arr.concat(el)
        }, []);

        if(transformedIngredients.length === 0) {
            transformedIngredients = <p>Please start adding ingredients!</p>
        }


        console.log(transformedIngredients)

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

export default burger;