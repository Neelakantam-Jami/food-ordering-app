import { Link } from "react-router";
import { LOGO_URL } from "../utils/constants";
import { useState , useContext} from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus(); 
  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store)=>store.cart.items);
  
  return (
    <div className="flex items-center bg-yellow-100 py-4 px-14 justify-between shadow-xl border-b-1">
      <div>
        <img className="w-16" src={LOGO_URL} alt="Logo-Image"/>
      </div>
      <div className="flex">
        <ul className="flex items-center gap-x-6 text-xl">
          <li>Online: {onlineStatus ? "✅":"🔴"}</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/grocery">Grocery</Link></li>
          <li><Link to="/cart">Cart ({cartItems.length})</Link></li>
          <button onClick={() => { btnName === "Login" ? setBtnName("Logout") : setBtnName("Login") }} className="login-btn">{btnName}</button>
          <li className="font-bold"><Link to="/cart">{loggedInUser}</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;