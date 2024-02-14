import React from "react"

function Restaurant({name, address, type, price, restaurant, handleDelete, image}){
  
  const handleDeleteClick = () =>{
    fetch(`http://localhost:3000/Restaurants/${restaurant.id}`,{
      method: "DELETE"
  })
  .then((r)=>r.json())
  .then(()=>handleDelete("My bad, thought you really liked that one"))
  window.location.reload()
  }

return (
    <li className="Restaurant">
      <h3>{name}</h3>
      <img src={image} alt="Restaurant"/>
      <h5>{address}</h5>
      <h5>Food Type: {type}</h5>
      <h5>Price: {price}</h5>
      <button className="Remove" 
      onClick={handleDeleteClick}>Delete</button>
    </li>
  );
}  
export default Restaurant