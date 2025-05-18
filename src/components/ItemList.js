import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
    
    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        dispatch(addItem(item));
    }

    return (
        <div>
            {items.map((item) =>
            <div className="p-2 m-2 border-orange-400 border-b-2 text-left flex justify-between" key={item.card.info.id}>
                <div className="w-9/12 p-2">
                    <div className="py-2 text-lg">
                        <span>{item.card.info.name}</span>
                        <span> - ₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}</span>
                    </div>
                    <p className="text-xs">{item.card.info.description}</p>
                </div>
                <div className="w-3/12 relative flex flex-col justify-center items-center">
                    <div className="absolute -bottom-1">
                        <button className="bg-orange-400 text-white shadow-lg rounded-lg p-2 hover:cursor-pointer" onClick={()=>handleAddItem(item)}>Add +</button>
                    </div>
                    <img className="w-1/1 h-28 object-cover mb-2 rounded-lg" src={CDN_URL + item.card.info.imageId}/>
                </div>
            </div>)}
        </div>
    );
}

export default ItemList;