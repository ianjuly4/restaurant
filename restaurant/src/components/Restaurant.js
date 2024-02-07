import React from "react"

function Restaurant({name, address, type, price}){
return (
    <li>
      <span>{name}</span>
      <span>{address}</span>
      <span>{type}</span>
      <span>{price}</span>
    </li>
  );
 
}  
export default Restaurant