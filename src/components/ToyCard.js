import React, { useState } from "react";

function ToyCard({ toy, handleDelete, updateLikes }) {
  const {id, name, likes, image} = toy
  const [likesNum, setLikesNum] = useState(likes)
  function updateLikesLocal(){
    setLikesNum(() => likesNum + 1)
    updateLikes(likesNum, id)
  }
  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likesNum} Likes </p>
      <button onClick={() => updateLikesLocal()} className="like-btn">Like {"<3"}</button>
      <button onClick={() => handleDelete(id)} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
