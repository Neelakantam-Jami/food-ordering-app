import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div className="text-center m-4 p-4">
          <h1 className="text-2xl font-bold">Cart</h1>
          <div className="w-1/2 m-auto bg-yellow-100 rounded-lg">
                <button className="bg-orange-400 text-white rounded-lg p-2 m-2 cursor-pointer" onClick={handleClearCart}>Clear Cart</button>
                {cartItems.length===0? <h1 className="p-2 m-2 font-medium">Cart is empty Add Items to the Cart</h1> :""}
                <ItemList items={cartItems}/>
          </div>
        </div>
  )
}

export default Cart;