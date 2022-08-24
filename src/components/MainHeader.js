import "/src/styles/mainheader.css";

import { ReactComponent as SparkleSVG } from "/src/images/sparkle.svg";

function CardHeader() {
  var avatarURL = "https://i.pravatar.cc/" + Math.round(Math.random() * 500);
  console.log(avatarURL);

  return (
    <div className="mainheader-wrapper">
      <div className="mainheader">
        <h1>Home</h1>
        <SparkleSVG />
      </div>
    </div>
  );
}

export default CardHeader;
