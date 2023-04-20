import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import { Cart } from "./";
import { useStateContext } from "../context/StateContext";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities,setShowPaystack } = useStateContext();
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">eCOM-App</Link>
      </p>

      <button
        type="button"
        onClick={() => {
          setShowCart(true)
        }}
        className="cart-icon"
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
