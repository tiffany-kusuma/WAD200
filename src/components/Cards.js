import { useEffect, useState } from "react"
import Card from "./Card";

import moment from "moment-timezone";
import { db } from "../config";
import { collection, query, orderBy, onSnapshot, doc, updateDoc, deleteDoc } from "firebase/firestore";
import "../styles/cards.css";

const Cards = () => {
  const [dataTweet, setDataTweet] = useState([])

  useEffect(() => {
    const getDataTweet = () => {
      const q = query(collection(db, 'tweet'), orderBy('createdAt', 'desc'))
      onSnapshot(q, (querySnapshot) => {
        setDataTweet(querySnapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data()
        })))
      })
    }

    getDataTweet()

  }, [])

  const like = async (id, likeBefore, liked) => {
    try {
      const tweetDoc = doc(db, 'tweet', id)
      if(liked === true) {
        await updateDoc(tweetDoc, {
          like : parseInt(likeBefore)-1,
          liked : false
        })

      } else {
        await updateDoc(tweetDoc, {
          like: parseInt(likeBefore)+1,
          liked : true
        })

      }
    } catch (error) {
      alert("failed like")
    }
  }

  const comment = async (id, commentBefore, comented) => {
    try {
      const tweetDoc = doc(db, 'tweet', id)
      if(comented === true) {
        await updateDoc(tweetDoc, {
          comment: parseInt(commentBefore)-1,
          commented : false
        })
      } else {
        await updateDoc(tweetDoc, {
          comment: parseInt(commentBefore)+1,
          commented : true
        })
      }
    } catch (error) {
      alert("failed comment")
    }
  }

  const deleteAction = async (id) => {
    try {
      const tweetDoc = doc(db, 'tweet', id)
      await deleteDoc(tweetDoc)
    } catch (error) {
      alert("failed delete")
    }
  }

  const retweet = async (id, retwetBefore, retwweted) => {
    try {
      console.log("retwweted => ", retwweted);
      const tweetDoc = doc(db, 'tweet', id)
      if(retwweted === true) {
        await updateDoc(tweetDoc, {
          retweet: parseInt(retwetBefore)-1,
          retweeted : false
        })

      } else {
        await updateDoc(tweetDoc, {
          retweet: parseInt(retwetBefore)+1,
          retweeted : true
        })

      }
    } catch (error) {
      alert("failed retweet")
    }
  }

  return (
    <div className="cards">
      {
        dataTweet.length != 0 ?
        dataTweet.map((tweet, i) => {
          const diffTime = moment(moment(new Date(tweet.data.createdAt.seconds*1000)).format("YYYY/MM/DD HH:mm:ss"), "YYYY/MM/DD HH:mm:ss").fromNow();
          return (
            <Card
              id={tweet.id}
              key={i}
              image={tweet.data.images !== false ? tweet.data.images : null}
              user={tweet.data.name}
              info={tweet.data.userName}
              tags={tweet.data.tweet}
              time={diffTime}
              comment={tweet.data.comment}
              retweet={tweet.data.retweet}
              like={tweet.data.like}
              likeAction={like}
              commentAction={comment}
              deleteAction={deleteAction}
              retweetAction={retweet}
              deleteBtn={tweet.data.delete}
              commented={tweet.data.commented}
              liked={tweet.data.liked}
              retweeted={tweet.data.retweeted}
            />
          )
        })
        :
          <p style={{ padding:"30px" }}>No tweet here, create your first tweet</p>
      }
    </div>
  );
}

export default Cards;
