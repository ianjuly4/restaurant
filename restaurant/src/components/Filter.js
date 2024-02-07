import React from "react"


function Filter(){
    return (
        <div className="Filter" >
          <input type="text" 
          name="search" 
          placeholder="Restaurant Name" />
    
          <select name="Filter" >
            <option value="All">Food Type</option>
            <option value="Spanish">Spanish</option>
            <option value="Italian">Italian</option>
            <option value="American">American</option>
            <option value="Tai">Tai</option>
            <option value="Chinese">Chinese</option>
            <option value="Japanese">Japanese</option>
            <option value="Indian">Indian</option>
            <option value="Vietnamese">Vietnamese</option>
            <option value="Cocktails">Cocktails</option>
          </select>

          <select name="Filter" >
            <option value="All">Price</option>
            <option value="$">$</option>
            <option value="$$">$$</option>
            <option value="$$$">$$$</option>
          </select>
        </div>
      );

}
export default Filter