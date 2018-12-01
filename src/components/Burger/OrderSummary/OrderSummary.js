import React, {Component} from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

    // checking out when this component actually updates
    // we could actually make this component a functional
    // component as this component doesn't need to check
    // if it needs to be updated or changes the state
    // componentWillUpdate() {
    //     console.log('[OrderSummary] will update');
    // }

    render () {

        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}>
                        <span style={{textTransform: 'capitalize'}}>{igKey}:</span> {this.props.ingredients[igKey]} 
                    </li>
                );
            });


        return (
            <Aux>
                <h3>Your Order</h3>
                <p>Burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price:  {this.props.totalCost.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Success" clicked={this.props.purchaseContinue }> Continue </Button>
                <Button btnType="Danger"  clicked={this.props.purchaseCancelled}> Cancel   </Button>
            </Aux>
        );
    }
};

export default OrderSummary;