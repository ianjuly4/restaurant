import React from  "react"
import Header from "./Header"

import NavBar from "./NavBar"
import Filter from "./Filter"
import RestaurantForm from "./RestaurantForm"


function App() {
  return(
    <div className="App">
    <> 
    <NavBar/>
      <Header/>
      
      <Filter/>
    </>
    </div>
  ) 
}

export default App;