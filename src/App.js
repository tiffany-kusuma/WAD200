import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./styles/app.css";
import Navbar from "./components/Navbar.js";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import MainHeader from "./components/MainHeader";
import Tweet from "./components/Tweet";
import Sidebar from "./components/Sidebar";
import ViewTweet from "./components/ViewTweet";

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <Navbar />
        <div className="contents">
          <div id="feed-wrapper">
            <div className="feed">
              <MainHeader />
              <div className="feed-content">
                  <Routes>
                    <Route path="/" element={
                      <>
                        <Tweet />
                        <Cards />
                      </>
                    }/>
                    <Route path="/tweet/:id" element={<ViewTweet />}/>
                  </Routes>
              </div>
            </div>
          </div>
          <div className="sidebar">
            <Sidebar />
          </div>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
