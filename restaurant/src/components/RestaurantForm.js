import React from 'react'
import NavBar from "./NavBar"

function RestaurantForm(){
    return(
        <div>
            <NavBar/>
            <h2>DON'T SEE YOUR FAVORITE RESTAURANT?
                ADD IT!!
            </h2>
            <form className="NewItem">
      <label>
        Name:
        <input 
          type="text" 
          name="name" 
          />
      </label>

      <label>
        Category:
        <select name="category" 
          >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
        </div>
    )
}
export default RestaurantForm