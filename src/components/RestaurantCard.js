import { IMG_URL, RATING_STAR } from "../utils/contants";

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

export default RestaurantCard;
