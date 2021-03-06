import React from 'react';

import Logo from '../../Logo/Logo';
import classes from './toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggler/DrawerToggle';



const toolbar = (props) => (
    <header className={classes.Toolbar}>
            <DrawerToggle clicked={props.drawerToggledClicked}/>
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav className={classes.DesktopOnly}>
                <NavigationItems />
            </nav>
    </header>
);

export default toolbar;