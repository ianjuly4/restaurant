import React from  "react"
import Header from "./Header"
import NavBar from "./NavBar"
import Filter from "./Filter"
import RestaurantItem from "./RestaurantItem"


function App() {
  return(
    <div className="App">
    <> 
    <NavBar/>
      <Header/>
      <Filter/>
      <ul>
        <RestaurantItem/>
      </ul>
    </>
    </div>
  ) 
}

export default App;