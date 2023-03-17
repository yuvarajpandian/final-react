import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navBarWrapper">
        <div className="left">
        <div>EKART STORE</div>
        </div>
        <div className="center">
        <div className="home">Home</div>
        <div className="about">About</div>
        <div className="contact">Contact us</div>
        <div className="order">Orders</div>
        </div>
        <div className="right">
          
          <div>icon</div>
          <div>Login</div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
