import "../styles/card.css";
import CardHeader from "./CardHeader";
import { ReactComponent as MoreSVG } from "../images/more.svg";
import { ReactComponent as CommentSVG } from "../images/comment.svg";
import { ReactComponent as RetweetSVG } from "../images/retweet.svg";
import { ReactComponent as HeartSVG } from "../images/heart.svg";
import { ReactComponent as ShareSVG } from "../images/share.svg";
import HeartRed from "../images/likefill.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Card({ id, image=null, user, info, tags, time, comment, like, retweet, hash, likeAction, commentAction, deleteAction, retweetAction, deleteBtn=false, commented, liked, retweeted, clicked=true }) {
  const [showDelete, setShowDelete] = useState(false)
  const navigate = useNavigate()

  const redirectToView = () => {
    if(clicked) {
      navigate(`tweet/${id}`)
    }
  }

  return (
    <div className="card">
      <div className="headerwrapper">
        <CardHeader />
        <div className="data">
          <div className="detailswrapper">
            <div className="details" onClick={redirectToView}>
              <h1>{user}</h1>
              <h2>@{info}</h2>
              <span className="span">·</span>
              <h2>{time}</h2>
            </div>
            
            {
              deleteBtn === true &&
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
            }

          </div>
          <div class="caption" onClick={redirectToView}>
            <p>{tags}</p>
            <li class="hashtag">{hash}</li>
          </div>
          
          {
            image !== null &&
            <img className="cardimage" src={image} alt="card" onClick={redirectToView}/>
          }

          <div className="cardbutton">
            <div className="buttons" onClick={() => commentAction(id, comment, commented)}>
              <CommentSVG />
              <h2>{comment}</h2>
            </div>
            <div className="buttons" onClick={() => retweetAction(id, retweet, retweeted)}>
              <RetweetSVG />
              <h2>{retweet}</h2>
            </div>
            <div className="buttons" onClick={() => likeAction(id, like, liked)}>
              {
                liked === true ?
                <img src={HeartRed} alt="heart red" width={18}/>
                :
                <HeartSVG />
              }
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
