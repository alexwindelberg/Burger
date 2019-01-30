import React, {Component} from 'react';

import Aux from '../Aux/Aux';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/ToolBar/toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    sideDrawerCloseHandler = () => {
        this.setState({
            showSideDrawer: false
        });
    }

    sideDrawerToggleHandler = () => {
        // the state of this property gets passed automatically
        this.setState(( prevState ) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }

    render () {
        return (    
                <Aux>
                    <Toolbar drawerToggledClicked={this.sideDrawerToggleHandler}/>
                    <SideDrawer 
                        open={this.state.showSideDrawer} 
                        closed={this.sideDrawerCloseHandler}/>

                    <main className = {classes.Content}>
                        {this.props.children}
                    </main>
                </Aux>
        );
    }

} 

export default Layout;