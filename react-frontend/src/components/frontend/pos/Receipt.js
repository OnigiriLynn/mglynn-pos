import React from 'react'

export default function Receipt(props){
    const {showReceipt, order, handlePrint, handleClose} = props;
  return (
    <>
    {showReceipt && <div className="modal">
          <div className="modal-content receipt">
            <div className="receipt-header">
              <h2>MNZ Coffee &amp; Tea</h2>
              <p>123 Hantharwaddi Street, Chaung Zon, Mon State.</p>
              <p>Tel: (95) 997-151-6135</p>
              <p>------------------------</p>
              <p>Date: {order.date}</p>
              <p>Receipt #: {order.id}</p>
              <p>------------------------</p>
            </div>
            
            <div className="receipt-items">

                {order && order.items && order.items.map((item,key) => (
                    <div key={key} className="receipt-item">
                        <span>{item.name} x {item.quantity}</span>
                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                ))}
                

            </div>
            
            <div className="receipt-totals">
              <p>------------------------</p>

              <p>Subtotal: ${order.subTotal.toFixed(2)}</p>

              <p>Tax: ${order.tax.toFixed(2)}</p>

              <p><strong>Total: ${order.total.toFixed(2)}</strong></p>

              <p>Payment: {order.paymentMethod}</p>

              <p>------------------------</p>
              <p>Thank you for your business!</p>
            </div>
            
            <div className="receipt-buttons">

              <button onClick={()=>handlePrint()}>Print Receipt</button>
              <button onClick={()=>handleClose()}>Close</button>

            </div>
          </div>
        </div>}
        </>
  )
}
