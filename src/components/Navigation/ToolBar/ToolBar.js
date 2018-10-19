import React from 'react';

import Logo from '../../Logo/Logo';
import classes from './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggler from '../../Navigation/SideDrawer/DrawerToggler/DrawerToggler';



const toolbar = (props) => (
    <header className={classes.Toolbar}>
            <DrawerToggler clicked={props.drawerToggledClicked}/>
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav className={classes.DesktopOnly}>
                <NavigationItems />
            </nav>
    </header>
);

export default toolbar;