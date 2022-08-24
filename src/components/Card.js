import "/src/styles/card.css";
import CardHeader from "./CardHeader";
import { ReactComponent as MoreSVG } from "/src/images/more.svg";
import { ReactComponent as CommentSVG } from "/src/images/comment.svg";
import { ReactComponent as RetweetSVG } from "/src/images/retweet.svg";
import { ReactComponent as HeartSVG } from "/src/images/heart.svg";
import { ReactComponent as ShareSVG } from "/src/images/share.svg";

function Card({ image, user, info, tags, time, comment, like, retweet, hash }) {
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
            <MoreSVG />
          </div>
          <div class="caption">
            <p>{tags}</p>
            <li class="hashtag">{hash}</li>
          </div>
          <img className="cardimage" src={image} alt="card" />
          <div className="cardbutton">
            <div className="buttons">
              <CommentSVG />
              <h2>{comment}</h2>
            </div>
            <div className="buttons">
              <RetweetSVG />
              <h2>{retweet}</h2>
            </div>
            <div className="buttons">
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
