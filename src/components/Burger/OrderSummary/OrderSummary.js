import React from 'react';

import Aux from '../../../hoc/Auxillary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:
                    {props.ingredients[igKey]}
                </li>
            )
        })

    return (
        <Aux>
            <h3>Order Summary</h3>
            <p>A delicious burger with following ingredients:</p>
            <ul>{ingredientsSummary}</ul>
            <p>Continue to checkout?</p>
            <p><strong>Total Price: ${props.price.toFixed(2)}</strong></p>
            <Button clicked={props.purchaseCancelled} btnType="Danger">CANCEL</Button>
            <Button clicked={props.purchaseContinued} btnType="Success">CONTINUE</Button>
        </Aux>
    )
}

export default orderSummary;