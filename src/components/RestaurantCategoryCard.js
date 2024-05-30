import RestaurantMenuItem from "./RestaurantMenuItem";
import upArrow from "../assets/up-arrow.svg";
import downArrow from "../assets/down-arrow.svg";

export default function RestaurantCategoryCard({ data, isActive, onShow }) {
  return (
    <div>
      <div
        onClick={onShow}
        className="my-4 flex justify-between items-center text-gray-700 cursor-pointer"
      >
        <h3 className="py-2 text-lg md:text-xl font-medium">
          {data?.title} ({data?.itemCards?.length})
        </h3>
        <div>
          {isActive ? (
            <img alt="up-arrow" src={upArrow} />
          ) : (
            <img alt="down-arrow" src={downArrow} />
          )}
        </div>
      </div>
      {isActive && (
        <div className="w-full">
          {data?.itemCards?.map((item) => (
            <RestaurantMenuItem
              key={item?.card?.info?.id}
              details={item?.card?.info}
            />
          ))}
        </div>
      )}
    </div>
  );
}
