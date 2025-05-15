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
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button onClick={()=>{btnName==="Login"?setBtnName("Logout"):setBtnName("Login")}} className="login-btn">{btnName}</button>
          </ul>
        </div>
      </div>
    );
};

export default Header;