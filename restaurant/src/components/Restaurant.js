import React from "react"

function Restaurant({name, address, type, price}){
return (
    <li className="w">
      <h3>{name}</h3>
      <span>{address}</span>
      <span>{type}</span>
      <span>{price}</span>
    </li>
  );
 
}  
export default Restaurant