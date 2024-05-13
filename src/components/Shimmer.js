const ShimmerRestaurantCard = () => {
  return (
    <div className="grid transition-all duration-200 ease-in cursor-pointer gap-3 grid-flow-row justify-stretch items-center p-0 animate-pulse">
      <div className="w-full h-40 overflow-hidden rounded-lg bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200">
        <div className="h-full w-full" /> {/* Placeholder for image */}
      </div>
      <div className="w-56 flex flex-col p-1 px-2 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200">
        <div className="h-4 mt-2 mb-4 bg-gray-300" />
        {/* Placeholder for title */}
        <div className="flex flex-row items-center h-4 mb-2 bg-gray-300">
          <div className="w-4 h-4 mr-2 bg-gray-300" />{" "}
          {/* Placeholder for star icon */}
          <span className="w-24 h-4 bg-gray-300" />{" "}
          {/* Placeholder for rating and delivery time */}
        </div>
        <div className="h-4 mb-2 bg-gray-300 cuisines" />{" "}
        {/* Placeholder for cuisines */}
        <div className="h-4 bg-gray-300" /> {/* Placeholder for area name */}
      </div>
    </div>
  );
};

export default ShimmerRestaurantCard;
