import React from "react";

const orderSummery = props => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
          return ( 
            <li key={igKey}>
              <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
            </li>
          )
        });
  return (
    <React.Fragment>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
          {ingredientSummary}
      </ul>
      <p>Continue to Checkout?</p>
    </React.Fragment>
  );
};

export default orderSummery;
