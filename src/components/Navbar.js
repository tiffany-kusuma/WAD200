import "../styles/navbar.css";
import logo from "../images/logo.png";

import { ReactComponent as HomeSVG } from "/src/images/home.svg";
import { ReactComponent as SearchSVG } from "/src/images/search.svg";
import { ReactComponent as NotifSVG } from "/src/images/notif.svg";
import { ReactComponent as NavMoreSVG } from "/src/images/navmore.svg";
import { ReactComponent as MssgSVG } from "/src/images/mssg.svg";
import { ReactComponent as ProfileSVG } from "/src/images/profile.svg";
import { ReactComponent as WriteSVG } from "/src/images/write.svg";

function Navbar() {
  var avatarURL = "https://i.pravatar.cc/" + Math.round(Math.random() * 500);
  console.log(avatarURL);

  return (
    <div className="navbar">
      <div className="menu">
        <img className="logo" alt="" src={logo} />
        <HomeSVG className="icon" />
        <SearchSVG className="icon" />
        <MssgSVG className="icon" />
        <ProfileSVG className="icon" />
        <NavMoreSVG className="icon" />
        <WriteSVG className="icon" />
      </div>
      <div className="userprofile">
        <img className="userimg" src={avatarURL} alt="avatar" />
      </div>
    </div>
  );
}

export default Navbar;
