import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/cards.css";
import { db } from "../config";
import moment from "moment-timezone";
import Card from "./Card";
import { doc, updateDoc, deleteDoc, getDoc } from "firebase/firestore";

const ViewTweet = () => {
    const { id } = useParams()
    const [dataDetail, setDataDetail] = useState("")

    useEffect(() => {
        getOneData()
    }, [id])
    
    const getOneData = async () => {
        const tweet = doc(db, 'tweet', id)
        try{
            const dataDoc = await getDoc(tweet)
            if(dataDoc.data() !== undefined) {
                setDataDetail(dataDoc.data())
            } else {
                setDataDetail("")
            }
        } catch (err) {
            alert(err)
        }    
    }
    
    const diffTime = dataDetail !== "" && moment(moment(new Date(dataDetail.createdAt.seconds*1000)).format("YYYY/MM/DD HH:mm:ss"), "YYYY/MM/DD HH:mm:ss").fromNow();

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

        getOneData(id)
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

        getOneData(id)
    }

    const deleteAction = async (id) => {
        console.log("del");
        try {
            const tweetDoc = doc(db, 'tweet', id)
            await deleteDoc(tweetDoc)
        } catch (error) {
            alert("failed delete")
        }

        getOneData(id)
    }

    const retweet = async (id, retwetBefore, retwweted) => {
        try {
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

        getOneData(id)
    }
    
    return (
        <div className="cards">
        {
            dataDetail != "" ?
                <Card
                    id={id}
                    image={dataDetail.images !== false ? dataDetail.images : null}
                    user={dataDetail.name}
                    info={dataDetail.userName}
                    tags={dataDetail.tweet}
                    time={diffTime}
                    comment={dataDetail.comment}
                    retweet={dataDetail.retweet}
                    like={dataDetail.like}
                    likeAction={like}
                    commentAction={comment}
                    deleteAction={deleteAction}
                    retweetAction={retweet}
                    deleteBtn={dataDetail.delete}
                    commented={dataDetail.commented}
                    liked={dataDetail.liked}
                    retweeted={dataDetail.retweeted}
                    clicked={false}
                />
            :
                <p style={{ padding:"30px" }}>No tweet here, create your first tweet</p>
        }
        </div>
    )
}

export default ViewTweet