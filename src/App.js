import "./App.css";

import products from "./components/ProductList";
import { useState } from "react";
import React from "react";


function App() {

  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  function increamentVotes(a){
    //console.log(a.votes);
    a.votes = a.votes + 1;
    console.log(a.votes);
    forceUpdate();
  }
  
  products.sort((a, b) => (
    b.votes - a.votes
));
  

  return (
    <body align = "center">
    <div><font size = "7">Popular Products</font></div>
    <div>
			{
				products.map((p,i) =>
        <div>
            <p><button onClick={increamentVotes.bind(this,p)}><font size="5">{p.votes}</font></button></p>
            <br></br>
						<img src={p.productImageUrl} width="350" 
     height="500"></img>,
            <p><font size="12">{p.title}</font></p>
            <p><font size="5">{p.description}</font></p>
            <br></br>
            <p><hr></hr></p>
          
        </div>
				)
			}
      </div>
      </body>
  );
}

export default App;
