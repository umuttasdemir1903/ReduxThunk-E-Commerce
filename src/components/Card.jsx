import React from "react";
import { useDispatch } from "react-redux";
import { addToBasket } from "../redux/actions/productActions";
const Card = ({ product }) => {
  const dispatch = useDispatch()

  const addBasket = () => {
    dispatch(addToBasket(product))
  }
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="p-5" style={{ height: "300px" }}>
        <img
          src={product.image}
          className="card-img-top img-fluid h-100"
          alt="..."
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description.slice(0, 50) + "..."}</p>
        <button onClick={addBasket} className="btn btn-success shadow">
          Add ot basket
        </button>
      </div>
    </div>
  );
};

export default Card;
