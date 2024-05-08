import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { SWIGGY_RESTAURANT_MENU } from "../utils/contants";
import replaceLatLonResId from "../utils/replaceLatLonResId";
import RestaurantMenuItem from "./RestaurantMenuItem";

const RestaurantMenu = () => {
  const [menu, setMenu] = useState([]);
  const [openCategory, setOpenCategory] = useState(null);
  const [loading, setLoading] = useState(true);

  const { resId } = useParams();

  const fetchMenu = async () => {
    try {
      const SWIGGY_RESTAURANT_MENU_API = replaceLatLonResId(
        SWIGGY_RESTAURANT_MENU,
        25.5908,
        85.1348,
        resId
      );
      const data = await fetch(SWIGGY_RESTAURANT_MENU_API);
      const result = await data.json();
      const restaurantMenu =
        result?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
      console.log("restaurantMenu", restaurantMenu);
      setMenu(restaurantMenu.slice(1, restaurantMenu.length - 2));
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  const Menu = menu?.map((category, index) => (
    <div key={index} className="menu-category">
      <h3
        onClick={() => setOpenCategory(index === openCategory ? null : index)}
      >
        {category?.card?.card?.title} ({category?.card?.card?.itemCards?.length}
        )
      </h3>
      {index === openCategory && (
        <div className="menu-items">
          {category?.card?.card?.itemCards?.map((item) => (
            <RestaurantMenuItem
              key={item?.card?.info?.id}
              details={item?.card?.info}
            />
          ))}
        </div>
      )}
    </div>
  ));
  console.log("rendering");
  return (
    <div>
      <h2>Menu</h2>
      <div>{Menu}</div>
    </div>
  );
};

export default RestaurantMenu;
