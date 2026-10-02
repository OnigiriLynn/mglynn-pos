import React from 'react'
import {URL} from '../../config/Constant';

export default function ProductsSection(props){
  const {products, addToCart} = props;
  return (
        <div className="products-section">
          <div className="products-grid">
            
            {products && products.map( product => (
                <div key={product._id} className="product-card" onClick={()=>addToCart(product)}>
                    <div className="doctor-img">
                      <a className="avatar" href="#"><img width="100" height="100" alt="" src={URL+product.image} /></a>
                    </div>
                    <h3>{product.name}</h3>
                    <p className="price">${product.price.toFixed(2)}</p>
                 </div>
            ))}
          </div>
      </div>
  )
};
