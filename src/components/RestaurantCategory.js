import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex}) => {

    const handleClick = () => {
        setShowIndex();
    }

  return (
    <div>
      <div className="bg-yellow-100 my-4 w-1/2 mx-auto shadow-lg p-4">
        <div className="flex justify-between cursor-pointer px-2" onClick={handleClick}>
          <span className="font-medium text-md">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
            {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;