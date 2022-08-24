import "../styles/tweet.css";

import { ReactComponent as PicSVG } from "../images/pic.svg";
import { ReactComponent as ChartSVG } from "../images/chart.svg";
import { ReactComponent as DateSVG } from "../images/date.svg";
import { ReactComponent as LocationSVG } from "../images/location.svg";
import { ReactComponent as GifSVG } from "../images/gif.svg";
import { ReactComponent as StickerSVG } from "../images/sticker.svg";

import { db } from "../config"
import { collection, addDoc, Timestamp } from "firebase/firestore"
import { useState } from "react";
import moment from "moment-timezone";

function CardHeader() {
  var avatarURL = "https://i.pravatar.cc/" + Math.round(Math.random() * 500);
  const [valueTweet, setValueTweet] = useState("")

  const postTweet = async () => {
    if(valueTweet !== "") {
      try {
        await addDoc(collection(db, 'tweet'), {
          like : 0,
          comment : 0,
          retweet : 0,
          userName : "betty_123",
          name : "Betty",
          tweet : valueTweet,
          createdAt : Timestamp.now()
        })

        setValueTweet("")
      } catch (error) {
        alert("Please post again apps error with ", error.message)
        setValueTweet("")
      }

    } else {
      alert("Pelase fill tweet post")
    }
  }

  return (
    <div className="card-wrapper">
      <div className="cardheader">
        <img className="userimg" src={avatarURL} alt="avatar" />
        <div className="tweet-box">
          <input
            className="input"
            type="text"
            placeholder="What's happening?"
            onChange={(e) => setValueTweet(e.target.value)}
            value={valueTweet}
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
            <button className="tweet-button" onClick={() => postTweet()}>Tweet</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardHeader;
