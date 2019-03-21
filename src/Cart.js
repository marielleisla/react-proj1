import React from "react";
import "./styles/cart.css";
import Product from "./Product.js";
import ProductData from "./Data";

let products = ProductData.products.map((p) => (
		<Product name={p.name} price={p.cost} limit={p.stock} />
		));

class Cart extends React.Component {

  	render() {
	    return (
	        <div className="page-content">
	            <h2>Add your products here!</h2>
	            {products}
	        </div>
	    );
  	}

}

export default Cart;
