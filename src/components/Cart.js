import React from "react";
import { useDispatch, useSelector } from "react-redux";

import CartItem from "./CartItem";
import { clearCart } from "../utils/cartSlice";
import EmptyCart from "./EmptyCart";
import Bill from "./Bill";

export default function Cart() {
  // Subscribing to the cart
  const cart = useSelector((store) => store.cart.cartItems);
  const cartItems = Object.values(cart);
  console.log("------", cartItems);

  // dispatching an action which will call the reducer
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
      {cartItems.length ? (
        <div className="mt-16 p-4 min-h-screen bg-lightGrey">
          <div className="w-full md:w-4/5 mx-auto flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <button
              onClick={handleClearCart}
              className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer hover:bg-blue-700"
            >
              Clear Cart
            </button>
          </div>
          <div className="w-full md:w-4/5 flex flex-col md:flex-row mx-auto">
            {/* Items Card */}
            <div className="w-full md:w-3/5 mx-auto md:mr-4">
              <div className="bg-white">
                {cartItems.map((item) => (
                  <CartItem key={item?.item?.id} details={item} />
                ))}
              </div>
            </div>
            {/* Bill Card */}
            <div className="bg-white w-full md:w-2/5 mt-4 md:mt-0 md:ml-4">
              <Bill cartItems={cartItems} />
            </div>
          </div>
        </div>
      ) : (
        <EmptyCart />
      )}
    </>
  );
}
