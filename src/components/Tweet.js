import "/src/styles/tweet.css";

import { ReactComponent as PicSVG } from "/src/images/pic.svg";
import { ReactComponent as ChartSVG } from "/src/images/chart.svg";
import { ReactComponent as DateSVG } from "/src/images/date.svg";
import { ReactComponent as LocationSVG } from "/src/images/location.svg";
import { ReactComponent as GifSVG } from "/src/images/gif.svg";
import { ReactComponent as StickerSVG } from "/src/images/sticker.svg";

function CardHeader() {
  var avatarURL = "https://i.pravatar.cc/" + Math.round(Math.random() * 500);
  console.log(avatarURL);

  return (
    <div className="card-wrapper">
      <div className="cardheader">
        <img className="userimg" src={avatarURL} alt="avatar" />
        <div className="tweet-box">
          <input
            className="input"
            type="text"
            placeholder="What's happening?"
          />
          <div className="tweet-function">
            <div className="tweet-svg">
              <PicSVG className="icon" />
              <GifSVG className="icon" />
              <ChartSVG className="icon" />
              <StickerSVG className="icon" />
              <DateSVG className="icon" />
              <LocationSVG className="icon" />
            </div>
            <button className="tweet-button">Tweet</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardHeader;
