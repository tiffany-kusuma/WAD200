import "/src/styles/cardheader.css";

function CardHeader() {
  var avatarURL = "https://i.pravatar.cc/" + Math.round(Math.random() * 500);
  console.log(avatarURL);

  return (
    <div className="card-header">
      <div className="carduser">
        <img className="userimg" src={avatarURL} alt="avatar" />
      </div>
    </div>
  );
}

export default CardHeader;
