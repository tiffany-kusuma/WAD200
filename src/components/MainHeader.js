import "../styles/mainheader.css";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as SparkleSVG } from "../images/sparkle.svg";
import { useEffect, useState } from "react";
import ArrowBack from "../images/back-arrow.png"

function CardHeader() {
  var avatarURL = "https://i.pravatar.cc/" + Math.round(Math.random() * 500);
  const location = useLocation()
  const [back, setBack] = useState(false)

  useEffect(() => {
    if(location.pathname.indexOf("/tweet") !== -1) {
      setBack(true)
    } else {
      setBack(false)
    }
  }, [location])

  return (
    <div className="mainheader-wrapper">
      <div className="mainheader">
        <Link to="/" style={{ color:"#000000" }}>
          {
            back === true ?
              <div style={{ flexDirection: "row" }}>
                <img src={ArrowBack} width={15} alt="back"/>
                &nbsp;
                &nbsp;
                &nbsp;
                <span style={{ fontWeight: 'bold', fontSize:19 }}>Tweet</span>
              </div>
            :
              <h1>Home</h1>
          }
        </Link>
        <SparkleSVG />
      </div>
    </div>
  );
}

export default CardHeader;
