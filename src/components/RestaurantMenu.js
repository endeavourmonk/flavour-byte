import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { SWIGGY_RESTAURANT_MENU } from "../utils/contants";

const RestaurantMenu = () => {
  const [menu, setMenu] = useState({});
  const [loading, setLoading] = useState(true);

  const { resId } = useParams();

  const fetchMenu = async () => {
    try {
      const data = await fetch(SWIGGY_RESTAURANT_MENU);
      const restaurantMenu = await data.json();
      console.log(restaurantMenu?.data?.cards[2]);
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

  return (
    <div>
      <div>menu</div>
    </div>
  );
};

export default RestaurantMenu;
