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
    <div className="flex flex-row items-start md:items-center p-4 border-b border-gray-300 last:border-b-0">
      <div className="mb-2 md:mb-0">
        {IMG_URL ? (
          <img
            src={`${IMG_URL}${imageId}`}
            alt={name}
            className="w-14 md:w-16 h-14 md:h-16 object-cover rounded"
          />
        ) : (
          <div className="w-14 md:w-16 h-14 md:h-16 bg-white rounded-xl"></div>
        )}
      </div>
      <div className="ml-2 md:ml-8 w-full flex  md:flex-row items-start md:items-center justify-between space-y-2 md:space-y-0 md:space-x-4">
        <div>
          <h2 className="text-lg font-semibold">{name}</h2>
          <p className="text-gray-600">
            ₹ {(price / 100) * quantity || (defaultPrice / 100) * quantity}
          </p>
        </div>
        <div className="flex items-center border border-gray-300">
          <button
            onClick={() => handleRemoveItemFromCart(props?.details?.item)}
            className="px-2 py-1 text-gray-700 rounded hover:scale-125"
          >
            -
          </button>
          <span className="mx-2">{quantity}</span>
          <button
            onClick={() => handleAddItemToCart(props?.details?.item)}
            className="px-2 py-1 text-gray-700 rounded hover:scale-125"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
