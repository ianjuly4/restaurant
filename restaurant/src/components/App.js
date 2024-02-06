import React from  "react"
import Header from "./Header"
import "./App.css"
import NavBar from "./NavBar"
import Filter from "./Filter"
import RestaurantForm from "./RestaurantForm"


function App() {
  return(
    <div className="App">
    <>
      <Header/>
      <NavBar/>
      <RestaurantForm/>
      <Filter/>
    </>
    </div>
  ) 
}

export default App;