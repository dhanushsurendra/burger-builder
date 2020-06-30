import React, { Component } from 'react';

import Aux from '../../hoc/Auxillary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {
    //older way
    // constructor(props) {
    //     super(props);
    //     this.state = {}
    // }

    //Newer way
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false
    }

    updatePurchaseState (ingredients) {
        // const ingredients = {
        //     ...this.state.ingredients
        // }
        //This might not work as it is not updated state

        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0)

         this.setState({
             purchasable: sum > 0
         })
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const priceAdditon = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAdditon;

        /*
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        });

        if only the state need to be updated we can use
        this.setState((prevState, props) => {
            //This gives the latest state

            someName: prevState.someProperty,
            someName: prevState.someProperty
        })
        */


        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        });
        this.updatePurchaseState(updatedIngredients);
        //  console.log(this.state.ingredients, this.state.totalPrice)
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const priceReduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceReduction;
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        });
        this.updatePurchaseState(updatedIngredients)
    }

    render() {

        /*
            ingredients = {
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0
            }
        */
        const disabledInfo = {
            ...this.state.ingredients
        }

        /*
            key = salad
            disabledInfo[salad] = disabled[info] <= 0
        */

        for (let key in disabledInfo) {
            //console.log(disabledInfo[key]); => This will be a number
            //disabled[key] <=0 return true or false
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        //console.log(disabledInfo);

        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable} />
            </Aux>
        )
    }
}

export default BurgerBuilder;