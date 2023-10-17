import React from "react";
import { useDispatch } from "react-redux";
import { addToBasket } from "../redux/actions/productActions";

const BasketItem = ({ basketProduct }) => {
  const dispatch = useDispatch();
  const { image, price, amount, title } = basketProduct;
  return (
    <div className="p-4 bg-white text-black w-100  my-4 rounded d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center gap-5">
        <img src={image} width={100} height={100} alt="" />
        <div>
          <h4>{title.slice(0, 20) + "..."}</h4>
          <span>${price}</span>
          <br />
        </div>
      </div>

      <div className="d-flex gap-2 align-items-center">
        <h6>Amount: {amount}</h6>
        <button className="btn btn-info">-</button>
        <button
          className="btn btn-warning"
          onClick={() => dispatch(addToBasket(basketProduct))}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default BasketItem;
