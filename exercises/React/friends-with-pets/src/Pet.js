import React from "react"

const Pet = (props) => {
  return (
    <div>
      <h4>{props.name}</h4>
      <h4>{props.breed}</h4>
    </div>
  )
}

export default Pet