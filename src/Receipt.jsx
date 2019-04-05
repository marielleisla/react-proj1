import React from "react";

class Receipt extends React.Component {
  total() {
    const items = this.props.items;
    var i;
    let total = 0;
    for(i = 0; i < items.length; i++) {
      total += items[i].price * items[i].count;
    }
    return total;
  }

  renderItem(item) {
    let total = item.price * item.count;
    total = total.toFixed(2);
    return (<div className="receipt-item" key={item.name}>
              <div className="receipt-text">
                {item.productName} X {item.count}
              </div>
              <div className="receipt-text">
                ${total}
              </div>
            </div>);
  }

  render() {
    const items = this.props.items;
    return (
      <div className="receipt">
        <h2 className="receipt-text">Receipt</h2>
        {items.map(this.renderItem)}
        <div className="receipt-item">
          <div className="total">Total:</div>
          <div className="total">${this.total().toFixed(2)}</div>
        </div>
      </div>
    );
  }
}

export default Receipt;