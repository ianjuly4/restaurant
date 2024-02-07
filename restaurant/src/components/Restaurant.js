import React from "react"

function Restaurant({name, address, type, price}){
return (
    <li className="Restaurant">
      <h3>{name}</h3>
      <h5>{address}</h5>
      <h5>{type}</h5>
      <h5>{price}</h5>
    </li>
  );
}  
export default Restaurant