import { useState, useEffect } from "react";
import { CORS_PROXY_API, SWIGGY_RESTAURANT_MENU, lat, lon } from "./contants";
import replaceLatLonResId from "./replaceLatLonResId";

const useRestaurantMenu = (resId) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const SWIGGY_RESTAURANT_MENU_API = replaceLatLonResId(
        SWIGGY_RESTAURANT_MENU,
        lat,
        lon,
        resId
      );
      const data = await fetch(
        `${CORS_PROXY_API}/fetch?${SWIGGY_RESTAURANT_MENU_API}`
      );
      const result = await data.json();
      // console.log(result);
      setData(result?.data?.cards);
    } catch (error) {
      console.error(error);
    }
  };

  return data;
};

export default useRestaurantMenu;
