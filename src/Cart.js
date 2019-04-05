import React from "react";
import "./styles/cart.css";
import Product from "./Product.js";
import ProductData from "./Data.js";
import Receipt from "./Receipt";



class Cart extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        	items: []
        };
        this.handleAddToCart = this.handleAddToCart.bind(this);
        this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this)
    }

    handleAddToCart (productName, price) {
    	let look = look = [...this.state.items];
    	let exists = false;
    	var i;
    	for (i = 0; i < look.length; i++) {
    		if (look[i].productName === productName && look[i].price === price) {
    			exists = true;
    			look[i].count += 1;
    			this.setState({items: look});
    			return;
    		}
    	}
    	if (!exists) {
    		this.setState({items: [...this.state.items, {productName: productName, price: price, count: 1}]});
    	}
    }

    handleRemoveFromCart (productName, price) {
    	let look = look = [...this.state.items];
    	let remove = false;
    	var i;
    	for (i = 0; i < look.length; i++) {
    		if (look[i].productName === productName && look[i].price === price) {
    			look[i].count -= 1;
    			if (look[i].count == 0) {
    				remove = true;
    				break;
    			}
    			this.setState({items: look});
    			return;
    		}
    	}
    	if (remove) {
    		look.splice(i, 1);
    		this.setState({items: look});
    	}
    }

  	render() {
  		let products = ProductData.products.map((p) => (
		<Product name={p.name} price={p.cost} onAddToCart={this.handleAddToCart} remove={this.handleRemoveFromCart}/>
		));
	    return (
	        <div className="page-content">
	            <h2>Add your products here!</h2>
	            <div class="ui three cards">
	            	{products}
	            </div>
	            <Receipt items={this.state.items}/>
	        </div>
	    );
  	}

}

export default Cart;
