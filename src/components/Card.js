import "../styles/card.css";
import CardHeader from "./CardHeader";
import { ReactComponent as MoreSVG } from "../images/more.svg";
import { ReactComponent as CommentSVG } from "../images/comment.svg";
import { ReactComponent as RetweetSVG } from "../images/retweet.svg";
import { ReactComponent as HeartSVG } from "../images/heart.svg";
import { ReactComponent as ShareSVG } from "../images/share.svg";
import { useState } from "react";

function Card({ id, image=null, user, info, tags, time, comment, like, retweet, hash, likeAction, commentAction, deleteAction, retweetAction }) {
  const [showDelete, setShowDelete] = useState(false)

  return (
    <div className="card">
      <div className="headerwrapper">
        <CardHeader />
        <div className="data">
          <div className="detailswrapper">
            <div className="details">
              <h1>{user}</h1>
              <h2>@{info}</h2>
              <span className="span">·</span>
              <h2>{time}</h2>
            </div>
            <div className="more-btn">
              <MoreSVG onClick={() => setShowDelete(showDelete ? false : true)}/>
              {
                showDelete === true &&
                <div className="btn-delte-container">
                  <button className="btn-delete" onClick={() => deleteAction(id)}>
                    Delete Tweet
                  </button>
                </div>
              }
            </div>
          </div>
          <div class="caption">
            <p>{tags}</p>
            <li class="hashtag">{hash}</li>
          </div>
          
          {
            image !== null &&
            <img className="cardimage" src={image} alt="card" />
          }

          <div className="cardbutton">
            <div className="buttons" onClick={() => commentAction(id, comment)}>
              <CommentSVG />
              <h2>{comment}</h2>
            </div>
            <div className="buttons" onClick={() => retweetAction(id, retweet)}>
              <RetweetSVG />
              <h2>{retweet}</h2>
            </div>
            <div className="buttons" onClick={() => likeAction(id, like)}>
              <HeartSVG />
              <h2>{like}</h2>
            </div>
            <div className="buttons">
              <ShareSVG />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
