import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Basket from "./pages/Basket";
import Header from "./components/Header";
import axios from "axios";
import { useDispatch } from "react-redux";
import { actionTypes } from "./redux/actions/actionsTypes";
import { getProducts } from "./redux/actions/productActions";
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
