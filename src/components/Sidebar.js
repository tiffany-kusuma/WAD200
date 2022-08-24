import "../styles/sidebar.css";
import Search from "./Search";
import Trend from "./Trend";

function SideBar() {
  return (
    <div className="sidebar">
      <Search />
      <Trend />
    </div>
  );
}

export default SideBar;
