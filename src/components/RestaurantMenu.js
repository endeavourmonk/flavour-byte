import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { SWIGGY_RESTAURANT_MENU } from "../utils/contants";

const RestaurantMenu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  const { resId } = useParams();

  const fetchMenu = async () => {
    try {
      const data = await fetch(`${SWIGGY_RESTAURANT_MENU}${resId}`);
      const result = await data.json();
      const restaurantMenu =
        result?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
      // console.log(restaurantMenu[2]?.card?.card);
      setMenu(restaurantMenu);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  const topPicksDishes = menu?.[1]?.card?.card?.carousel;
  const TopPicks = topPicksDishes?.map((dish) => (
    <div key={dish?.bannerId}>{dish?.title}</div>
  ));

  console.log(topPicksDishes);
  return (
    <div>
      <div>{TopPicks}</div>
    </div>
  );
};

export default RestaurantMenu;
