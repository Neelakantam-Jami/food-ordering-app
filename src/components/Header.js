import { Link } from "react-router";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [btnName, setBtnName] = useState("Login")
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
            alt="Logo-Image"
          />
        </div>
        <div className="nav-items">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <button onClick={()=>{btnName==="Login"?setBtnName("Logout"):setBtnName("Login")}} className="login-btn">{btnName}</button>
          </ul>
        </div>
      </div>
    );
};

export default Header;