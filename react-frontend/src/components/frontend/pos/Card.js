import React from 'react'

export default function CardSection(props) {
    const {cartItem, updateCart, removeCart, subTotal, tax, total, handlePayment} = props;
  return (
        <div className="cart-section">
          <h2>Current Order</h2>
            <>
              <div className="cart-items">
                {cartItem && cartItem.map( item => (
                     <div key={item.id} className="cart-item">
                        <div className="item-info">
                          <h4>{item.name}</h4>
                          <p>${item.price.toFixed(2)} each</p>
                        </div>
                        <div className="item-controls">
                          <button onClick={()=>updateCart(item, item.quantity - 1)}>-</button>
                          <span>{item.quantity}</span>
                          <button onClick={()=>updateCart(item, item.quantity + 1)}>+</button>
                          <button onClick={()=>removeCart(item.id)}>×</button>
                        </div>
                        <div className="item-total">
                          ${(item.price * item.quantity).toFixed(2)}
                        </div>
                   </div>
                ))}
              </div>
              
              <div className="cart-totals">

                <div className="total-row">
                  <span>Subtotal:</span>
                  <span>${subTotal.toFixed(2)}</span>
                </div>

                <div className="total-row">
                  <span>Tax (10%):</span>
                  <span>${tax.toFixed(2)}</span>
                </div>

                <div className="total-row grand-total">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>

              </div>
              
              <div className="payment-buttons">
                <button className="cash-btn" onClick={()=>handlePayment()}>
                  Pay
                </button>
              </div>
            </>
          
        </div>
  )
}
