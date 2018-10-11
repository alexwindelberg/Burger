import React from 'react';
import classes from './BuildControls.css';
import BuildContol from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat '},
];

const buildControls = (props) => (

    <div className={classes.BuildControls}>
          {controls.map(ctrl => (
              <BuildContol key={ctrl.label} label={ctrl.label} />
          ))}
    </div>

);

export default buildControls;