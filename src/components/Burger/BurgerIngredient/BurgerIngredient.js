import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './BurgerIngredient.css';

/*
    It should be noted that while we may have made this a component we are NOT changing the state
    here we simply needed to make this a class that extends component because we needed it in 
    order to use the prop-types module and check 
*/
class BurgerIngredient extends Component {

    render() {
        
        let ingredient = null; 

        switch (this.props.type) {
            case('bread-bottom'):
                ingredient = <div className={classes.BreadBottom}></div>;
                break;
            case('bread-top'):
                ingredient = ( 
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                    </div>
                );
                break;
            case('meat'):
                ingredient = <div className={classes.Meat}></div>;
                break;
            case('cheese'):
                ingredient = <div className={classes.Cheese}></div>;
                break;
            case('salad'):
                ingredient = <div className={classes.Salad}></div>;
                break;
            case('bacon'):
                ingredient = <div className={classes.Bacon}></div>;
                break;
            default:
                ingredient = null;
        }
    
        return ingredient;
    }

}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngredient;