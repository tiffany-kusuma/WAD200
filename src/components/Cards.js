import "/src/styles/cards.css";
import Card from "./Card.js";

function Cards() {
  return (
    <div className="cards">
      <Card
        image="https://source.unsplash.com/random?whiterose"
        user="Betty"
        info="flowers_twt"
        tags="white rose"
        hash="#whiterose"
        time="5h"
        comment="6"
        retweet="102"
        like="300"
      />
      <Card
        image="https://source.unsplash.com/random?pikachu"
        user="pika pika"
        info="pikachu"
        tags="cute"
        hash="#pikachu"
        time="19h"
        comment="59"
        retweet="1,400"
        like="5k"
      />
      <Card
        image="https://source.unsplash.com/random?bali"
        user="Beautiful Bali"
        info="bali_tourism"
        tags="Photo taken by Aaron S"
        hash="#visitbali"
        time="20h"
        comment="1"
        retweet="20"
        like="79"
      />
      <Card
        image="https://source.unsplash.com/random?forest"
        user="Zac"
        info="ZacharyL"
        tags="trip to the woods"
        time="5h"
        comment="23"
        retweet="300"
        like="1,500"
      />
      <Card
        image="https://source.unsplash.com/random?videogame"
        user="Ekko"
        info="EkkoVD"
        hash="#gameon"
        tags="Gaming night"
        time="23h"
        comment="10"
        retweet="39"
        like="100"
      />
    </div>
  );
}

export default Cards;
