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

  const like = async (id, likeBefore) => {
    try {
      const tweetDoc = doc(db, 'tweet', id)
      if(likeBefore > 0) {
        await updateDoc(tweetDoc, {
          like: parseInt(likeBefore)-1,
        })

      } else {
        await updateDoc(tweetDoc, {
          like: parseInt(likeBefore)+1,
        })

      }
    } catch (error) {
      alert("failed like")
    }
  }

  const comment = async (id, commentBefore) => {
    try {
      const tweetDoc = doc(db, 'tweet', id)
      if(commentBefore > 0) {
        await updateDoc(tweetDoc, {
          comment: parseInt(commentBefore)-1,
        })
      } else {
        await updateDoc(tweetDoc, {
          comment: parseInt(commentBefore)+1,
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

  const retweet = async (id, retwetBefore) => {
    try {
      const tweetDoc = doc(db, 'tweet', id)
      if(retwetBefore > 0) {
        await updateDoc(tweetDoc, {
          retweet: parseInt(retwetBefore)-1,
        })

      } else {
        await updateDoc(tweetDoc, {
          retweet: parseInt(retwetBefore)+1,
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
