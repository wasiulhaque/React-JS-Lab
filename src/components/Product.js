import React from "react";
import ReactDOM from 'react-dom';
import ProductCardItem from "./ProductCard";
import ProductCard from "./ProductCard";

function Product(props) {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Popular Products</h1>
      <p>Title: {ProductCardItem.title} </p>
    </div>
  );
}

export default Product;
//ReactDOM.render(<ProductCard/>,document.getElementById('product: product'));
