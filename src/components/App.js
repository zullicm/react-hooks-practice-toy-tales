import React, { useState , useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function setNewToys(newToy){
    setToys([...toys, newToy])
  }

  function onToyDelete(id){
    const toyFilterDelete = toys.filter(toy => toy.id !== id)
    setToys(toyFilterDelete)
  }

  useEffect(() => {
    fetch("http://localhost:3001/toys")
    .then(res => res.json())
    .then(data => setToys(data))
  }, [])

  return (
    <>
      <Header />
      {showForm ? <ToyForm setNewToys={setNewToys}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer onToyDelete={onToyDelete} toys={toys} />
    </>
  );
}

export default App;
