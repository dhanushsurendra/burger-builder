import React, { Component } from 'react';

import Aux from '../../hoc/Auxillary';
import Burger from '../../components/Burger/Burger';

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
        }
    }

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <div>Burger Controls</div>
            </Aux>
        )
    }
}

export default BurgerBuilder;