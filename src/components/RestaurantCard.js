import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
      const { name, cuisines, avgRating, cloudinaryImageId,sla } = resData.info;
    return (
      <div className="res-card">
        <img className="res-logo" src={CDN_URL+cloudinaryImageId} alt="res-card-image" />
        <span>{name}</span>
        <div className="res-card-info">
          <span style={{color:"white"}}>&#9733;</span>
          <p>{avgRating} stars /</p>
          <p>{sla.slaString}</p>
        </div>
        <h5>{cuisines.join(", ").slice(0,30)}....</h5>
      </div>
    );
};

export default RestaurantCard;