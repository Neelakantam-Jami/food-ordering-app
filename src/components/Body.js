import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { API_URL } from "../utils/constants";
import { Link } from "react-router";

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
  
  return listOfRestaurants.length == 0? <Shimmer /> : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" placeholder="Enter here" className="search-box" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}} />
          <button onClick={() => {
            const filterRestaurants = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
            setFilteredRestaurants(filterRestaurants);
          }}>Search</button>
        </div>
        <button onClick={() => {
          const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4.3);
          setFilteredRestaurants(filteredList);
        }} className="filter-btn">Top Rated Restaurants</button>
      </div>
      <div className="res-container">
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