import React from 'react';
import classes from './BuildControls.css';
import BuildContol from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'},
];

const buildControls = (props) => (

    <div className={classes.BuildControls}>
          <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
          {controls.map(ctrl => (
              <BuildContol 
                key={ctrl.label} 
                label={ctrl.label} 
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemove(ctrl.type)}
                // Get the disabled data and as this function loops
                // check to see if the type is true or false
                disabled={props.disabled[ctrl.type]} />
          ))}
          <button 
                className={classes.OrderButton}
                disabled={!props.purchasable}
                onClick={props.ordered}>Order Now</button>
    </div>

);

export default buildControls;