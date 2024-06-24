import { useDispatch } from "react-redux";
import { IMG_URL } from "../utils/constants";
import { addItemsToCart, removeItemsFromCart } from "../utils/cartSlice";

export default function CartItem(props) {
  const { name, price, defaultPrice, imageId } = props?.details?.item;
  const { quantity } = props?.details;

  // dispatching an action which will call the reducer
  const dispatch = useDispatch();
  const handleAddItemToCart = (item) => {
    dispatch(addItemsToCart(item));
  };

  const handleRemoveItemFromCart = (item) => {
    dispatch(removeItemsFromCart(item));
  };

  return (
    <div className="flex items-center p-4 border-b border-gray-300 last:border-b-0">
      <img
        src={`${IMG_URL}${imageId}`}
        alt={name}
        className="w-16 h-16 object-cover rounded"
      />
      <div className="ml-4 flex-1">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-gray-600"> ₹ {price / 100 || defaultPrice / 100}</p>
      </div>
      <div className="flex items-center">
        <button
          onClick={() => handleRemoveItemFromCart(props?.details?.item)}
          className="px-2 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
        >
          -
        </button>
        <span className="mx-2">{quantity}</span>
        <button
          onClick={() => handleAddItemToCart(props?.details?.item)}
          className="px-2 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
        >
          +
        </button>
      </div>
    </div>
  );
}
