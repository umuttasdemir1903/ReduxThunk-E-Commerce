import axios from "axios";
import { actionTypes } from "./actionsTypes";


// senkron action
export const addToBasket = (product) => {
  return {
    type:actionTypes.ADD_TO_BASKET,
    payload:product
  }
}
 
// Asenkron işlem

/*
* Thunk sayesinde aksiyon dispatch edilmeden önce
* API çağrısı yapar.
* Gelen veriye göre tetikleme işlemi yapar.
*/

export const getProducts = () => (dispatch) => {
  axios
    .get("https://fakestoreapi.com/products")
    .then((res) =>
      dispatch({ type: actionTypes.SET_PRODUCTS, payload: res.data })
    )
    .catch((err) =>
      dispatch({
        type: actionTypes.SET_ERROR
      })
    );
};
