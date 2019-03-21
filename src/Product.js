import React from "react";
import "./styles/cart.css"; 

class Product extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            clicked: 1
        };
    }


	addToCart(props) {
		this.setState({clicked: this.state.clicked + 1});
		if (props.limit == 0) {
			alert("This item is out of stock!");
		} else if (this.state.clicked > props.limit) {
			alert("There are too many " + props.name + "s in your cart!");
		} else {
			alert("There are " + this.state.clicked + " " + props.name + "s in your cart!");
		}
	} 

  	render() {
	    return (
	        <div className="page-content">
		        <div class="ui cards">
		            <div class="card">
					    <div class="content">
					      <div class="header">{this.props.name}</div>
						  <div class="meta">${this.props.price}</div>
					    </div>
					    <div class="ui bottom attached button" onClick={() => this.addToCart(this.props)}>
					      <i class="add icon"></i>
					      Add to Cart
					    </div>
					</div>
				</div>	
	        </div>
	    );
	}

}

export default Product;