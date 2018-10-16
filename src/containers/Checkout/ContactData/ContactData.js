import React, { Component } from "react";

import classes from "./ContactData.css";
import axios from "../../../axios-orders";
import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: ""
    },
    loading: false
  };

  orderHandler = event => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Salehdlin",
        address: {
          street: "Test Street",
          zipCode: "12345",
          country: "Egypt"
        },
        email: "test@test.com"
      },
      deliveryMethod: "fastest"
    };
    axios
      .post("/orders.json", order)
      .then(resp => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch(err => this.setState({ loading: false }));
  };
  render() {
    let form = (
      <form action="submit">
        <input type="text" name="name" placeholder="Your Name" />
        <input type="email" name="email" placeholder="Your Mail" />
        <input type="text" name="street" placeholder="Your Street" />
        <input type="text" name="postal" placeholder="Your Postal Code" />
        <Button btnType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
