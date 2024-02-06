import React from 'react'
import NavBar from "./NavBar"

function RestaurantForm(){
    return(
        <div className='RestaurantHeader'>
        <NavBar/>
         
            
            <form className="NewRestaurant">
            <h2>DON'T SEE YOUR FAVORITE RESTAURANT? ADD IT!!</h2>
                 <label>
                   
                    <input 
                    type="text" 
                    name="name" 
                    />
                </label>

                <label>
                     
                    <select name="Food Type" >
                        <option value="All">Food Type</option>
                        <option value="Spanish">Spanish</option>
                        <option value="Italian">Italian</option>
                        <option value="American">American</option>
                        <option value="Tai">Tai</option>
                        <option value="Chinese">Chinese</option>
                        <option value="Japanese">Japanese</option>
                        <option value="Indian">Indian</option>
                        <option value="Vietnamese">Vietnamese</option>
                    </select>
                </label>
                <label>
                    <select name="Price" >
                        <option value="All">Price</option>
                        <option value="$">$</option>
                        <option value="$$">$$</option>
                        <option value="$$$">$$$</option>
                    </select>
                </label>

                    <button type="submit">Add to List</button>
            </form>
        </div>
    )
}
export default RestaurantForm