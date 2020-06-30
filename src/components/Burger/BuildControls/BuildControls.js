import React from 'react';

import classes from './BuildControls.css';

import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
]

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        { /* While outputting we should using ( ) brackets for JSX */}
        { /** Send each of the items to BuildControls.js eg Salad, Bacon */}
        <p>Current Price: <strong>${props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            < BuildControl
                key={ctrl.label}
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]} />
        ))}

        <button
            onClick={props.ordered}
            disabled={!props.purchasable}
            className={classes.OrderButton}>ORDER NOW</button>
    </div>

    /*
        props.disabled returns an object { salad: true, cheese: true }
        props.disabled[ctrl.type] => props.disabled[salad] == true passed to disbled
    */
)

export default buildControls;