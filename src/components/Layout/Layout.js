import React from 'react';

import Aux from '../../hoc/Auxillary';

const layout = props =>
    <Aux>
        <div>Sidedrawer, backdrop, toolbar</div>
        <main>
            {props.children}
        </main>
    </Aux>

export default layout;