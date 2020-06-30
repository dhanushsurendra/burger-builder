import React from 'react';

import classes from './Button.css';

//console.log(classes['Danger']); => This works generating a unique class name

const button = (props) => (
    //['Button', 'Success'].join(' ') => 'Button Success'
    <button
        className={[classes.Button, classes[props.btnType]].join(' ')}
        onClick={props.clicked}>{props.children}
    </button>
)

export default button;