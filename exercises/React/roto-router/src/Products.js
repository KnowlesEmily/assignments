import React from 'react';
import Products from './products.json';


const Product = (props) => {
  let {_id} = props.match.params
  const product = Products.find(product => product._id === _id)
  let {name, price, description} = product
return (
    <div className="product">
      <h1>{name}</h1>
      <h3>Price: ${price}</h3>
      <h3>{description}</h3>
    </div>
  )
}

export default Product