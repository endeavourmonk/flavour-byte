import React from "react";
import { useDispatch, useSelector } from "react-redux";

import CartItem from "./CartItem";
import { clearCart } from "../utils/cartSlice";
import EmptyCart from "./EmptyCart";

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
        <div className="p-4 min-h-screen bg-lightGrey">
          <div className="mt-20 w-3/4 mx-auto">
            <div className=" bg-white">
              <button
                onClick={handleClearCart}
                className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer hover:bg-blue-700 mb-4 md:mb-0"
              >
                Clear Cart
              </button>
              {cartItems.map((item) => (
                <CartItem key={item?.item?.id} details={item} />
              ))}
            </div>
            <div className="bg-white">
              <div>Bill details</div>
              <div>To Pay</div>
            </div>
          </div>
        </div>
      ) : (
        <EmptyCart />
      )}
    </>
  );
}
