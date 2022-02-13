import React from 'react';
import classes from './Counter2.module.scss';
import {ClickedContext} from "../App";


export default props => {
    return (
        <div className={classes.counter2}>
            <h3>Counter2</h3>
            <ClickedContext.Consumer>
                {clicked => clicked ? <p>CLICKED</p> : null}

            </ClickedContext.Consumer>

        </div>
    )
}


