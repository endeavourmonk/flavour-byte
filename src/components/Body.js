import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestaurantCard, { withDiscount } from "./RestaurantCard";
import ShimmerRestaurantCard from "./Shimmer";
// import restaurantsMock from "../mocks/restaurantsMock";
import replaceLatLonResId from "../utils/replaceLatLonResId";
import { CORS_PROXY_API, SWIGGY_API, lat, lon } from "../utils/constants";

const fetchData = async (url) => {
  try {
    const response = await fetch(`${CORS_PROXY_API}/fetch?${url}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const Body = () => {
  const [loading, setLoading] = useState(true);
  const [restaurantsList, setRestaurantsList] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [place, setPlace] = useState("");

  const PromotedRestaurantCard = withDiscount(RestaurantCard);

  useEffect(() => {
    (async () => {
      try {
        const SWIGGY_RESTAURANTS_API = replaceLatLonResId(SWIGGY_API, lat, lon);
        const result = await fetchData(SWIGGY_RESTAURANTS_API);
        setLoading(false);

        // If swiggy API fails or changed loading the mock data.
        // const mockResult = restaurantsMock;
        // setTimeout(() => setLoading(false), 1000);

        const restaurants =
          result?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants ?? [];

        setPlace(result?.data?.cards?.[2]?.card?.card?.title);
        setRestaurantsList(restaurants);
        setFilteredRestaurants(restaurants);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    })();
  }, []);

  const RestaurantCards = filteredRestaurants?.map((restaurant) => (
    <Link
      key={restaurant.info.id}
      to={`/restaurants/${restaurant.info.name
        .replace(/\s/g, "-")
        .toLowerCase()}/${restaurant.info.id}`}
    >
      {restaurant?.info?.aggregatedDiscountInfoV3 ? (
        <PromotedRestaurantCard restaurant={restaurant} />
      ) : (
        <RestaurantCard restaurant={restaurant} />
      )}
    </Link>
  ));

  const handleFilterClick = () => {
    const topRatedRestaurants = restaurantsList?.filter(
      (restaurant) => restaurant.info.avgRating > 4
    );

    setFilteredRestaurants(topRatedRestaurants);
  };

  const handleSearchButtonClick = () => {
    const filteredRestaurants = restaurantsList.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filteredRestaurants);
  };

  return (
    <div className="w-full">
      {/* Buttons and Input */}
      <div className="mt-20 w-4/5 mx-auto flex flex-col md:flex-row justify-between items-center mb-5">
        <button
          className="w-full md:w-fit bg-lightOrange text-white py-2 px-4 rounded cursor-pointer hover:bg-orange-500 mb-4 md:mb-0"
          onClick={handleFilterClick}
        >
          Top Rated
        </button>
        <div className="flex items-center">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => {
              if (e.keyCode === 13) {
                handleSearchButtonClick();
              }
            }}
            placeholder="Search Restaurants..."
            className="p-2 border rounded border-gray-300 mr-1 focus:outline-none"
          />
          <button
            className="bg-lightOrange text-white py-2 px-4 rounded cursor-pointer hover:bg-orange-500"
            onClick={handleSearchButtonClick}
          >
            Search
          </button>
        </div>
      </div>

      {loading ? (
        <div className="w-4/5 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 items-start">
            {Array(8)
              .fill()
              .map((_, i) => (
                <ShimmerRestaurantCard key={i} />
              ))}
          </div>
        </div>
      ) : (
        <div className="w-4/5 mx-auto ">
          <h2 className="text-3xl font-light mb-2">{place}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 items-start">
            {RestaurantCards}
          </div>
        </div>
      )}
    </div>
  );
};

export default Body;
