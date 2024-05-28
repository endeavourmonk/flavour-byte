import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantMenuItem from "./RestaurantMenuItem";
import upArrow from "../assets/up-arrow.svg";
import downArrow from "../assets/down-arrow.svg";
import Loading from "./Loading";

const RestaurantMenu = () => {
  const [openCategory, setOpenCategory] = useState(0);

  const { resId } = useParams();
  const data = useRestaurantMenu(resId); // fetching and setting data
  const name = data?.[2]?.card?.card?.info?.name ?? "";
  const cards = data?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const categories = cards?.filter(
    (card) =>
      card?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  const Menu = categories?.map((category, index) => (
    <div key={index}>
      <div
        onClick={() => setOpenCategory(index === openCategory ? null : index)}
        className="my-4 flex justify-between items-center text-gray-700 cursor-pointer"
      >
        <h3 className="py-2 text-lg md:text-xl font-medium">
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
        <div>
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

  if (!categories) return <Loading />;
  return (
    <div className="md:w-3/5 mt-4 mx-auto flex flex-col items-center">
      <h1 className="text-2xl md:text-4xl font-bold">{name}</h1>
      <h2 className="text-xl md:text-3xl font-extralight mt-6 border-b-4">
        Menu
      </h2>
      <div className="w-full border-b-4 border-gray-300 rounded p-2 cursor-pointer">
        {Menu}
      </div>
    </div>
  );
};

export default RestaurantMenu;
