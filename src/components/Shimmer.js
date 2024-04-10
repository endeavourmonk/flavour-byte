const ShimmerRestaurantCard = () => {
  return (
    <div className="shimmer-card shimmer">
      <div className="shimmer-card-image-container shimmer">
        <div className="shimmer-image-placeholder" />{" "}
        {/* Placeholder for image */}
      </div>
      <div className="shimmer-card-info shimmer">
        <div className="shimmer-card-title shimmer" />
        {/* Placeholder for title */}
        <div className="delivery-info shimmer">
          <div className="shimmer star-icon" />{" "}
          {/* Placeholder for star icon */}
          <span className="shimmer" />{" "}
          {/* Placeholder for rating and delivery time */}
        </div>
        <div className="restaurant-info cuisines shimmer" />{" "}
        {/* Placeholder for cuisines */}
        <div className="restaurant-info shimmer" />{" "}
        {/* Placeholder for area name */}
      </div>
    </div>
  );
};

export default ShimmerRestaurantCard;
