import emptyCart from "../assets/empty_cart.png";
import emptyCartBW from "../assets/empty_cart_b&w.png";

export default function EmptyCart() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center h-full animate-fadeIn">
      <div className="w-1/2 md:w-1/5 flex flex-col items-center">
        <p className="text-gray-600 text-2xl font-bold">Cart Empty</p>
        <img src={emptyCart} alt="Empty Cart" className="h-auto my-8" />
        <p className="text-gray-600 font-semibold text-xl">
          Your cart is empty.
        </p>
        <p className="text-gray-600 text-lg text-center">
          Add something from the menu.
        </p>
      </div>
    </div>
  );
}
