import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategoryCard from "./RestaurantCategoryCard";
import Loading from "./Loading";

const RestaurantMenu = () => {
  const [openCategory, setOpenCategory] = useState(0);

  const handleShow = (index) => {
    return openCategory === index
      ? setOpenCategory(-1)
      : setOpenCategory(index);
  };

  const { resId } = useParams();
  const data = useRestaurantMenu(resId); // fetching and setting data
  const name = data?.[2]?.card?.card?.info?.name ?? "";
  const cards = data?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  // extracting all the itemcategories and nested categories by flatenning 1 level depth
  const categories = cards?.flatMap((data) => {
    const category = data?.card?.card;
    if (
      category?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) {
      return [category];
    } else if (
      category?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    ) {
      return category?.categories || [];
    }
    return [];
  });

  // console.log(categories);
  if (!categories) return <Loading />;
  return (
    <div className="mt-28 md:w-3/5 px-2 md:px-0  mx-auto flex flex-col items-center">
      <h1 className="text-2xl md:text-4xl font-bold">{name}</h1>
      <h2 className="text-xl md:text-3xl font-extralight mt-6 border-b-4">
        Menu
      </h2>

      <div className="w-full border-b-4 border-gray-300 rounded p-2 cursor-pointer">
        {categories?.map((category, index) => (
          <RestaurantCategoryCard
            key={category?.title}
            data={category}
            isActive={openCategory === index}
            onShow={() => handleShow(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
