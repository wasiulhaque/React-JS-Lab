import "./App.css";
import ProductComponent from "./components/Product";
import ProductCardItem from "./components/ProductCard";
import products from "./components/ProductList";

function App() {
  products.sort((a, b) => (
    b.votes - a.votes
));

  return (
    <div>
			{
				products.map((p,i) =>
        <div>
            <p><button><font size="5">{p.votes}</font></button></p>
            <br></br>
						<img src={p.productImageUrl} width="350" 
     height="500"></img>,
            <p><font size="12">{p.title}</font></p>
            <p><font size="5">{p.description}</font></p>
            <br></br>
            <p><hr></hr></p>
            <br></br>
        </div>
				)
			}
      </div>
  );
}

export default App;
