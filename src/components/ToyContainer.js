import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onToyDelete}) {
  
  function handleDelete(id){
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then(() => onToyDelete(id))
  }

  function updateLikes(likesNum, id){
    const likes = likesNum + 1
    const newLikesObj = {
      "likes": likes
    }

    fetch(`http://localhost:3001/toys/${id}`,{
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newLikesObj)
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }
  

  return (
    <div id="toy-collection">{toys.map(toy => <ToyCard handleDelete={handleDelete} toy={toy} updateLikes={updateLikes} />)}</div>
  );
}

export default ToyContainer;
