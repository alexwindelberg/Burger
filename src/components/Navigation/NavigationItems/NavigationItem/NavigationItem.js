import React from 'react';
import { NavLink } from 'react-router-dom';


import classes from './NavigationItem.css';

const navigationItem = (props) => (
    <li className={classes.NavigationItem}>
        {/* activeClassName helps fix the default selected item on the navbar but look more into it*/}
        <NavLink to={props.link}
                 exact = {props.exact}
                 activeClassName={classes.active}> 
                {props.children}
        </NavLink>
    </li>
);

export default navigationItem;

