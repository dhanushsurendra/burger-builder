import React from 'react';

import classes from './Layout.css'

import Aux from '../../hoc/Auxillary';

const layout = props =>
    <Aux>
        <div>Sidedrawer, backdrop, toolbar</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>

export default layout;