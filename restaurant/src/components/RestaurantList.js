import React, {useEffect, useState} from "react"
import Header from "./Header"
import NavBar from "./NavBar"
import Filter from "./Filter"
import Restaurant from "./Restaurant"


function RestaurantList(){
  const [restaurants, setRestaurants] = useState([])

  useEffect(()=>{
    fetch("http://localhost:3000/Restaurants")
    .then((r)=>r.json())
    .then((restaurantData)=>setRestaurants(restaurantData))
  },[])
    return(
    <div className="RestaurantList">
    <> 
      <NavBar/>
      <Header/>
      <Filter/>
      <ul>
        <Restaurant/>
      </ul>
    </>
    </div>
    )
}
export default RestaurantList