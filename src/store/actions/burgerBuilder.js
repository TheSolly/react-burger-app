import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

export const addIngredient = ingName => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: ingName
  };
};

export const removeIngredient = ingName => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: ingName
  };
};

const setIngredient = ingredients => {
  return {
    type: actionTypes.SET_INGREDIENT,
    ingredients: ingredients
  };
};

const fetchIngredientFailed = () => {
  return {
    type: actionTypes.FETCH_INGREDIENT_FAILED
  };
};

export const initIngredient = () => {
  return dispatch => {
    axios
      .get("https://react-my-burger-b1301.firebaseio.com/ingredients.json")
      .then(res => {
        dispatch(setIngredient(res.data));
      })
      .catch(err => {
        dispatch(fetchIngredientFailed());
      });
  };
};
