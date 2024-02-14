import React, {useEffect, useState} from "react"
import Header from "./Header"
import NavBar from "./NavBar"
import Filter from "./Filter"
import Restaurant from "./Restaurant"


function RestaurantList(){
  const [restaurants, setRestaurants] = useState([])
  const [restaurantText, setRestaurantText] = useState("")
  const [selectedType, setSelectedType] = useState("All")
  const [selectedPrice, setSelectedPrice] = useState("All")
  
  useEffect(()=>{
    fetch("http://localhost:3000/Restaurants")
    .then((r)=>r.json())
    .then((restaurantData)=>setRestaurants(restaurantData))
  },[])

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value)
  }
  const handlePriceChange = (e) => {
    setSelectedPrice(e.target.value)
  }
  const onSearchChange = (text) => {
    setRestaurantText(text)
  }
  const handleDelete = (clickedDelete) => {
    const updatedRestaurants = restaurants.filter((restaurant)=>{
     return restaurant.id !== clickedDelete.id;
     setRestaurants(updatedRestaurants)
    })
  }
  
  
  const filteredRestaurants = restaurants.filter((restaurant)=>{
    if(selectedPrice  === "All") return true;
    return restaurant.price === selectedPrice
  }).filter((restaurant)=>{
    if(selectedType === "All")return true;
    return restaurant.type === selectedType
  }).filter((restaurant)=>{
    return restaurant.name.toLowerCase().includes(restaurantText.toLowerCase())
  })

  console.log(restaurants)
  
    return(
    <div className="RestaurantList">
    <> 
      <NavBar/>
      <Header/>
      <Filter handleTypeChange={handleTypeChange}
      handlePriceChange={handlePriceChange}
      onSearchChange={onSearchChange}
      search={restaurantText}
      />
      <ul>{filteredRestaurants.map((restaurant)=>{
        return <Restaurant key={restaurant.id}
        image={restaurant.imageUrl} 
        name={restaurant.name} 
        address={restaurant.address}
        type={restaurant.type}
        price={restaurant.price}
        restaurant={restaurant}
        handleDelete={handleDelete}/>
      })
      }</ul>
    </>
    </div>
    )
}
export default RestaurantList