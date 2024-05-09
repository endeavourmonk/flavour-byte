import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantMenuItem from "./RestaurantMenuItem";
import upArrow from "../assets/up-arrow.svg";
import downArrow from "../assets/down-arrow.svg";

const RestaurantMenu = () => {
  const [openCategory, setOpenCategory] = useState(0);

  const { resId } = useParams();
  const data = useRestaurantMenu(resId);
  const restaurantMenu = data?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  const menu = restaurantMenu?.slice(1, restaurantMenu.length - 2);
  const name = data?.[2]?.card?.card?.info?.name ?? "";

  console.log(menu);

  const Menu = menu?.map((category, index) => (
    <div key={index}>
      <div
        onClick={() => setOpenCategory(index === openCategory ? null : index)}
        className="menu-category-accordian-title"
      >
        <h3>
          {category?.card?.card?.title} (
          {category?.card?.card?.itemCards?.length})
        </h3>
        <div>
          {index === openCategory ? (
            <img alt="up-arrow" src={upArrow} />
          ) : (
            <img alt="down-arrow" src={downArrow} />
          )}
        </div>
      </div>
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

  if (!menu) return <div>Loading...</div>;
  return (
    <div className="restaurant-menu-container">
      <h1>{name}</h1>
      <h2>Menu</h2>
      <div className="menu-category">{Menu}</div>
    </div>
  );
};

export default RestaurantMenu;
