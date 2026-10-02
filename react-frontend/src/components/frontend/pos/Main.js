import React, { useState, useEffect } from 'react';
import logo from './images/0-02-06-70b952ceae9fcb96a8c6792783fc04968f6030526fe3930cfaa047f748090b06_226c409df6a.jpg';
import Products from './Products';
import Card from './Card';
import Receipt from './Receipt';
//import "../../../assets/css/pos.css";
import {URL} from '../../config/Constant';
function Main() {

    const [products, setProducts] = useState([]);
    const [cartItem, setCartItem] = useState([]);
    const [order, setOrder] = useState([]);
    const [showReceipt, setShowReceipt] = useState(false);
    const [loginUser, setLoginUser] = useState(true)

    const addToCart = (product) => {
        const foundItem = cartItem.find(item => item.id === product.id);
        if(foundItem){
            setCartItem(
                cartItem.map( item => 
                    item.id === product.id ? {...item, quantity: item.quantity + 1}: item
            ));
        }else{
            setCartItem([...cartItem, {...product, quantity: 1}] );
        }
    }

    const removeCart = (id) => {
        setCartItem(cartItem.filter( item => item.id !== id));
    }

    const updateCart = (product, newQuantity) => {
        if(newQuantity === 0){
            removeCart(product.id);
        }else{
            setCartItem(
                cartItem.map( item => 
                    item.id === product.id ? {...item, quantity: newQuantity}: item
            ));
        }
       
    }


    const subTotal = cartItem.reduce((sum,item) => sum + (item.price * item.quantity), 0);
  
    const tax = subTotal * 0.1;

    const total = subTotal + tax;

    const  handlePayment = () => {
        if(total === 0){
            return false;
        }
        const paidAmount = parseFloat(prompt("Enter cash amount " + total.toFixed(2)));
        if(paidAmount < total){
            alert('Insufficient amount!');
        }else{
            const changeAmount = paidAmount - total;
            alert('Your change amount is '+changeAmount.toFixed(2));
            setOrder(
                {
                    id: Date.now(),
                    date: new Date().toLocaleString(),
                    items : [...cartItem],
                    subTotal: subTotal,
                    tax: tax,
                    total: total,
                    paymentMethod: 'Cash'
    
                }
            );
            setShowReceipt(true);
            setCartItem([])
        }
    }

   const  handlePrint = () => {
    window.print()
   }

   const  handleClose = () => {
    setShowReceipt(false);
   }

   const handleLoginUser = (user) => {
    setLoginUser(user);
  }

  const getAPI = async () => {
          try{
              const response = await fetch(URL+"getNewProducts");
  
              const result = await response.json();
  
              setProducts(result);
              
          }catch(error){
              console.error('Error fetching products:', error);
          }finally{
             // console.log('API call completed');
          }
      }
  
      useEffect(()=>{
          getAPI();
      },[])

  return (
    <div className="pos-app">
      {/* Header */}
      <div className="header">
        <h1 className='head-text'><img src={logo} width={100}></img><span>MNZ Coffee &amp; Tea Shop</span></h1>
      </div>
      
      {/* Main Content */}
      <div className="main-content">
        <Products products ={products} addToCart ={addToCart} />
        <Card cartItem = {cartItem} updateCart = {updateCart} removeCart = {removeCart} subTotal = {subTotal} tax = {tax} total = {total} handlePayment = {handlePayment} />
      </div>
      
      {/* Receipt Modal */}
        <Receipt showReceipt = {showReceipt} order = {order} handlePrint = {handlePrint} handleClose = {handleClose} />

    </div>
  );
}

export default Main;