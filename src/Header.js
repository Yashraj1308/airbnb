import { Link } from "react-router-dom";
import Menu from "./Assets/menu.png";
import Profile from "./Assets/profile.png";
import './style/styles.css'

export default function Header(){
  return(
    <div className="header">
    <a href="/">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1024px-Airbnb_Logo_B%C3%A9lo.svg.png"
        className="logo"
        alt="airbnblogo"
      />
    </a>
    <ul className="list">
      <li>Home</li>
      <li>About</li>
      <li>Info</li>
    </ul>

    <Link to={"./Login"} className="right">
      <img src={Menu} className="left-bar" alt="logo" />

      <img src={Profile} className="left-bar" alt="" />

      {/* You can add more elements here */}
    </Link>
  </div>
  );
}