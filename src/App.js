import React, { useState } from "react";
import Data from './db.json';
const App = () => {
  const[search,setSearch] = useState(" ");
  return (
    <div>
    <center>
      <h4>Enter your city:</h4> <br />
      <input type="text" 
      value={search}
      onChange={(e)=>setSearch(e.target.value)} 
      />  <br />
      {Data.filter(city=>city.name.toLowerCase().includes(search.toLowerCase())).map(city => 
      {
        return <div style={{"border":"1px solid black" , "padding": "10px" , "margin": "10px" , "maxWidth": "50%"}}> 
             {city.name}
            </div>
      }
      )}
    </center>
     
    </div>
  );
};

export default App;
