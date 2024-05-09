import { useState, useEffect } from "react";
import { SWIGGY_RESTAURANT_MENU, lat, lon } from "./contants";
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
      const data = await fetch(SWIGGY_RESTAURANT_MENU_API);
      const result = await data.json();
      setData(result?.data?.cards);
    } catch (error) {
      console.error(error);
    }
  };

  return data;
};

export default useRestaurantMenu;
