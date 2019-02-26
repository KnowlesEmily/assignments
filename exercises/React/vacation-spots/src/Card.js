import React from "react"
// import PropTypes from "prop-types"

const Card = (props) => {
  const style = {
    backgroundColor: props.backgroundColor,
    border: "1px dashed black",
    color: "white",
    textAlign: "center",
    marginTop: "20px",
    marginBottom: "20px",
    marginLeft: "200px",
    marginRight: "200px",
    width: "500px",
    borderRadius: "20px",
    fontFamily: "'Lobster', cursive",
    textShadow: "black 1px 1px",
    boxShadow: "black 5px 5px"
  
  }

  const hFive = {
    fontSize: "20px"
  }
  return (
    <div style={style}>
      <h1>{props.place}</h1>
      <h3>{props.price}</h3>
      <p style={hFive}>Visit here during the {props.timeToGo}</p>
      <p>{props.priceSign}</p>
    </div>
  )
}

// Card.PropTypes = {
//   place: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
  
// }

export default Card