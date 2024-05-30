import { IMG_URL, RATING_STAR } from "../utils/constants";

const RestaurantMenuItem = (props) => {
  const { name, price, defaultPrice, description, isVeg, imageId } =
    props?.details;
  const { rating, ratingCountV2 } = props?.details?.ratings?.aggregatedRating;

  return (
    <div className="h-52 flex flex-row justify-between items-center p-2 border-b border-gray-300 last:border-b-0 transition-all duration-200 ease-out">
      <div className="w-3/5">
        <div className="font-bold text-lg truncate">{name}</div>
        <div className="font-semibold leading-5">
          ₹ {price / 100 || defaultPrice / 100}
        </div>
        {rating && (
          <div className="flex items-center pt-2">
            <img className="w-5 pr-1" alt="star" src={RATING_STAR} />
            <span className="pr-1">{rating}</span>({ratingCountV2})
          </div>
        )}
        <div className="truncate pt-2 text-lg font-light">{description}</div>
      </div>
      <div className="h-24 md:h-36 w-28 md:w-40 relative">
        <button className="font-bold text-lg uppercase text-green-600 absolute w-16 md:w-28 h-6 md:h-10 border-none bg-white rounded-lg -bottom-4 left-1/2 transform -translate-x-1/2 shadow-md transition-all duration-300 ease-in hover:bg-gray-300">
          ADD
        </button>

        {imageId ? (
          <img
            alt="menu"
            src={`${IMG_URL}${imageId}`}
            className="w-full h-full object-cover rounded-xl"
          />
        ) : (
          <div className="w-full h-full bg-white rounded-xl"></div>
        )}
      </div>
    </div>
  );
};

export default RestaurantMenuItem;
