import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="bg-white flex-wrap align-items-center text-black d-flex justify-content-between px-4 py-3  ">
      <Link to={"/"} className="fs-2 text-dark text-decoration-none ">E-Commerce</Link>

      <div className="d-flex gap-4 fs-6  ">
        <Link className="btn btn-info" to={"/"}>
          Home
        </Link>
        <Link className="btn btn-warning " to={"/basket"}>
          Basket
        </Link>
      </div>
    </header>
  );
};

export default Header;
