import React from "react";
import Pet from "./Pet";


const Friend = (props) => {
  const styles = {
    textAlign: "center",
    textDecoration: "underline"
  }

  const mappedPets = props.pets.map((pet, i)=>{
    return (
      <Pet name={pet.name}
            breed={pet.breed}
            key={i+pet.name}
      />
    )
  })
  return (
    <div style={styles}>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
      {mappedPets}
    </div>
  )
}



export default Friend 