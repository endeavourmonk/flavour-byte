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
    <div className="card">
      <div className="card-img-container">
        <img alt="restaurant" src={imageUrl} />
      </div>
      <div className="card-info">
        <div className="card-title">{name}</div>
        <div className="delivery-info">
          <img className="star-icon" alt="star" src={RATING_STAR} />
          <span>{`${avgRating || avgRatingString} • ${deliveryTime}`}</span>
        </div>
        <div className="restaurant-info cuisines">{cuisines.join(", ")}</div>
        <div className="restaurant-info">{areaName}</div>
      </div>
    </div>
  );
};

export default RestaurantCard;
