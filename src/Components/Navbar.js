import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <nav>
      <img
        src={require("../Asset/toolhub.png")}
        alt="toolhub"
        width="50px"
        height="50px"
        color="red"
      />
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="links">
          <Link to="/">Home</Link>
        </li>
        <li className="links">
          <Link to="/LeaderBoard">Leaderboard</Link>
        </li>
        <li className="links">
          <Link to="/DashBoard">DashBoard</Link>
        </li>
      </ul>

      <div className="hamburger" onClick={handleClick}>
        {click ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}

export default Navbar;
