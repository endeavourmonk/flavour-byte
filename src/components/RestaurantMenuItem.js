import { IMG_URL, RATING_STAR } from "../utils/contants";

const RestaurantMenuItem = (props) => {
  const { name, price, description, isVeg, imageId } = props?.details;
  const { rating, ratingCountV2 } = props?.details?.ratings?.aggregatedRating;

  return (
    <div className="menu-item">
      <div className="menu-item-details">
        <div className="card-title">{name}</div>
        <div>₹ {price / 100}</div>
        <div>
          {rating} <img className="star-icon" alt="star" src={RATING_STAR} />(
          {ratingCountV2})
        </div>
        <div className=".menu-item-description">{description}</div>
      </div>
      <div className="menu-item-img-container">
        <img alt="menu" src={`${IMG_URL}${imageId}`} />
      </div>
    </div>
  );
};

export default RestaurantMenuItem;
