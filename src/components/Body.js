import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import ShimmerRestaurantCard from "./Shimmer";
import { IP_BASE_API, SWIGGY_API, SWIGGY_UPDATE_API } from "../utils/contants";
import replaceLatLonResId from "../utils/replaceLatLonResId";

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const fetchUpdate = async (url, coordinates) => {
  const response = await fetch(url, {
    method: "POST",
    mode: "no-cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify({ lat: coordinates[0], lng: coordinates[1] }), // body data type must match "Content-Type" header
  });
  return await response.json();
};

const Body = () => {
  const [loading, setLoading] = useState(true);
  const [restaurantsList, setRestaurantsList] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [place, setPlace] = useState("");

  console.log("body");

  useEffect(() => {
    (async () => {
      try {
        const SWIGGY_RESTAURANTS_API = replaceLatLonResId(
          SWIGGY_API,
          25.5908,
          85.1348
        );
        const result = await fetchData(SWIGGY_RESTAURANTS_API);
        setLoading(false);
        const restaurants =
          result?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants ?? [];

        console.log("restaurants: ", restaurants);

        // const updatedRestaurants = await fetchUpdate(
        //   SWIGGY_UPDATE_API,
        //   coordinates
        // );
        // console.log(
        //   updatedRestaurants?.data?.cards?.[0]?.card?.card?.gridElements
        //     ?.infoWithStyle?.restaurants
        // );

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
      <RestaurantCard restaurant={restaurant} />
    </Link>
  ));

  const handleFilterClick = () => {
    const topRatedRestaurants = restaurantsList?.filter(
      (restaurant) => restaurant.info.avgRating > 4
    );

    setFilteredRestaurants(topRatedRestaurants);
  };

  const handleSearchButtonClick = () => {
    console.log("search");
    const filteredRestaurants = restaurantsList.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filteredRestaurants);
  };

  if (loading) {
    return (
      <div className="body-container">
        <div className="cards-container">
          <ShimmerRestaurantCard />
          <ShimmerRestaurantCard />
          <ShimmerRestaurantCard />
          <ShimmerRestaurantCard />
          <ShimmerRestaurantCard />
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="restaurant-filters">
        <button className="button" onClick={handleFilterClick}>
          Top Rated
        </button>
        <div className="search-bar">
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
          />
          <button className="button" onClick={handleSearchButtonClick}>
            Search
          </button>
        </div>
      </div>

      <div className="body-container" onScroll={() => console.log("scrolled")}>
        <h2>{place}</h2>
        <div className="cards-container">{RestaurantCards}</div>
      </div>
    </>
  );
};

export default Body;
