import { IMG_URL, RATING_STAR } from "../utils/constants";

const RestaurantCard = (props) => {
  const {
    name,
    cloudinaryImageId,
    cuisines,
    areaName,
    avgRating,
    avgRatingString,
  } = props?.restaurant?.info ?? "";
  const deliveryTime = props?.restaurant?.info?.sla?.slaString ?? "";

  const imageUrl = `${IMG_URL}${cloudinaryImageId}`;
  return (
    <div className="grid transition-all duration-200 ease-in cursor-pointer gap-3 grid-flow-row justify-stretch items-center p-0 hover:scale-95">
      <div className="w-full h-40 overflow-hidden rounded-lg">
        <img
          alt="restaurant"
          src={imageUrl}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-56 flex flex-col p-1 px-2">
        <div className="text-lg font-bold text-gray-800 overflow-hidden overflow-ellipsis whitespace-nowrap">
          {name}
        </div>
        <div className="w-9/10 flex flex-row items-center text-lg font-bold">
          <img className="w-4 pr-1" alt="star" src={RATING_STAR} />
          <span>{`${avgRating || avgRatingString} • ${deliveryTime}`}</span>
        </div>
        <div className="overflow-hidden overflow-ellipsis whitespace-nowrap text-lg font-light py-0.5 cuisines">
          {cuisines.join(", ")}
        </div>
        <div className="overflow-hidden overflow-ellipsis whitespace-nowrap text-lg font-light py-0.5">
          {areaName}
        </div>
      </div>
    </div>
  );
};

// Higher Order Component: takes a component and returns by adding some features to it.
export const withDiscount = (RestaurantCard) => {
  return (props) => {
    const info = props.restaurant?.info?.aggregatedDiscountInfoV3 || {};
    const discount = `${info?.header ?? ""} ${info?.subHeader ?? ""}`;

    return (
      <div className="relative ">
        <div className="absolute font-extrabold text-white  bg-black bg-opacity-90 shadow-md text-center text-xl z-10 top-32 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 p-2 rounded">
          {discount}
        </div>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
