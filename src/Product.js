import React from "react";
import "./styles/cart.css"; 

class Product extends React.Component {
	constructor(props) {
        super(props);
    }

  	render() {
	    return (
            <div class="card">
			    <div class="content">
			      <div class="header">{this.props.name}</div>
				  <div class="meta">${this.props.price}</div>
			    </div>
			    <div class="ui bottom attached button" onClick={() => this.props.onAddToCart(this.props.name, this.props.price)}>
			      <i class="add icon"></i>
			      Add to Cart
			    </div>
			    <div class="ui bottom attached button" onClick={() => this.props.remove(this.props.name, this.props.price)}>
			      <i class="remove icon"></i>
			      Remove from Cart
			    </div>
			</div>	
	    );
	}

}

export default Product;