import React from "react"

function Restaurant({name, address, type, price}){
  
  const handleDelete = () => {

  }

return (
    <li className="Restaurant">
      <h3>{name}</h3>
      <h5>{address}</h5>
      <h5>Food Type: {type}</h5>
      <h5>Price: {price}</h5>
      <button>Delete</button>
    </li>
  );
}  
export default Restaurant