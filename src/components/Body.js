import RestaurantCard from "./RestaurantCard";
import { useEffect, useState} from "react";
import Shimmer from "./Shimmer";
import { API_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");
  
  useEffect(() => {
    fetchData();
  }, [])
  
  const fetchData = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();
    setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <div className="flex justify-center h-screen items-center"><h1 className="font-bold text-xl">Looks like you're offline!! Please check your internet connection...</h1></div>
    )
  
  return listOfRestaurants.length == 0? <Shimmer /> : (
    <div>

      <div className="flex justify-center items-center w-10/12 mx-auto my-8">
        <div className="border border-orange-400 rounded-lg">
          <input type="text" placeholder="Enter here" className="p-3" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}} />
          <button className="bg-orange-400 p-3 rounded-br-lg rounded-tr-lg text-white" onClick={() => {
            const filterRestaurants = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
            setFilteredRestaurants(filterRestaurants);}}>Search
          </button>
        </div>
        <button onClick={() => {
          const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4.3);
          setFilteredRestaurants(filteredList);
          }} className="bg-orange-400 text-white p-3 rounded-lg cursor-pointer mx-10">Top Rated Restaurants
        </button>
      </div>

      <div className="flex w-10/12 mx-auto flex-wrap justify-evenly">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}><RestaurantCard resData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;