import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import BurgerControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from "../../components/UI/Modal/Modal";
import OrderSummery from "../../components/Burger/BuildControls/OrderSummary/OrderSummery";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.5,
  bacon: 0.7
}

class BurgerBuilder extends Component {

  state = {
    ingredients:{
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false
  }

  updatePurchasableState(ingredients){

    const sum = Object.keys(ingredients).map(igKey => {
      return ingredients[igKey];
    })
    .reduce((sum,el)=>{
      return sum+el;
    },0);
    this.setState({purchasable: sum>0})
  }

  addIngredeintHandler = (type) =>{
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
        ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    this.updatePurchasableState(updatedIngredients);
  }

  removeIngredeintHandler = (type) =>{
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0){
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
        ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    this.updatePurchasableState(updatedIngredients);
  }

  purchaseHandeler= () => {
    this.setState({purchasing: true});
  }

  purchaseCancelHandeler= () => {
    this.setState({purchasing: false});
  }

  render() {
    const disabledInfo ={
      ...this.state.ingredients
    }
    for(let key in disabledInfo){
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <React.Fragment>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandeler}>
          <OrderSummery ingredients={this.state.ingredients}/>
        </Modal>
        <Burger ingredients = {this.state.ingredients} />
        <BurgerControls 
          ingredientAdded={this.addIngredeintHandler}
          ingredientRemove={this.removeIngredeintHandler}
          disabled={disabledInfo} 
          purchasable={this.state.purchasable}
          ordered={this.purchaseHandeler}
          price={this.state.totalPrice}/>
      </React.Fragment>
    );
  }
}

export default BurgerBuilder;