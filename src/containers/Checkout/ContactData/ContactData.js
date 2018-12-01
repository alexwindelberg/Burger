import React, { Component } from 'react';

import axios from '../../../axios-orders';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';


class ContactData extends Component {

    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        //prevents the default behavior which is in this case to reload the page
        event.preventDefault();
        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Brenna',
                address: {
                    street: 'Teststreet 1',
                    zipCode: '4123123',
                    country: 'Germany'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        }

        // send request to backend and store data for now
        // in firebase we need to add the .json in order to make it work 
        axios.post('/orders.json', order)
             .then(response => {
                this.setState({ loading: false });
             })
             .catch(error => {
                this.setState({ loading: false });
             });
    }


    render () {
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                <form>
                    <input className={classes.Input} type="text" name="name" placeholder="Your name" />
                    <input className={classes.Input} type="email" name="email" placeholder="Your Email" />
                    <input className={classes.Input} type="text" name="street" placeholder="Street" />
                    <input className={classes.Input} type="text" name="postal" placeholder="Postal Code" />
                    <Button btnType="Success" clicked={this.orderHandler}>Order</Button>
                </form>
            </div>
        );
    }

}

export default ContactData;
