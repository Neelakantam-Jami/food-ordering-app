import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
      const { name, cuisines, avgRating, cloudinaryImageId,sla } = resData.info;
    return (
      <div className="w-80 p-4 m-4 rounded-lg border border-gray-200 hover:shadow-xl">
        <img className="rounded-lg mb-1 object-cover w-76 h-50" src={CDN_URL+cloudinaryImageId} alt="res-card-image" />
        <span className="font-bold">{name}</span>
        <div className="flex font-medium items-center">
          <span className="text-green-600">★</span>
          <p>{avgRating} stars / </p>
          <p>{sla.slaString}</p>
        </div>
        <h5 className="font-light">{cuisines.join(", ").slice(0,30)}....</h5>
      </div>
    );
};

export default RestaurantCard;