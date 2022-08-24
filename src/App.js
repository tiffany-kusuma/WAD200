import "./styles/app.css";
import Navbar from "./components/Navbar.js";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import MainHeader from "./components/MainHeader";
import Tweet from "./components/Tweet";

import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="main">
        <Navbar />
        <div className="contents">
          <div id="feed-wrapper">
            <div className="feed">
              <MainHeader />
              <div className="feed-content">
                <Tweet />
                <Cards />
              </div>
            </div>
          </div>
          <div className="sidebar">
            <Sidebar />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
