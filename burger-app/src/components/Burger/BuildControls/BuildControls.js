import React from "react";
import cssStyles from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad:", type: "salad" },
  { label: "Bacon:", type: "bacon" },
  { label: "Cheese:", type: "cheese" },
  { label: "Meat:", type: "meat" }
];

const buildControls = props => (
  <div className={cssStyles.BuildControls}>
    <p>
      Current Price: <strong>{props.price.toFixed(2)}$</strong>
    </p>
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        type={ctrl.type}
        added={() => props.ingredientAdded(ctrl.type)}
        remove={() => props.ingredientRemove(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}
    <button 
      className={cssStyles.OrderButton}
      disabled={!props.purchasable}
      onClick={props.ordered}>Order Now!</button>
  </div>
);
export default buildControls;
