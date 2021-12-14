import "./App.css";
import ProductComponent from "./components/Product";
import ProductCardItem from "./components/ProductCard";
import products from "./components/ProductList";
import { useState } from "react";


function App() {

  function increamentVotes(a){
    products[a].votes = products[a].votes + 1;
    console.log(products[a].votes);
    return products[a].votes;
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
            <p><button onClick={increamentVotes.bind(this,p.id)}><font size="5">{p.votes}</font></button></p>
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
