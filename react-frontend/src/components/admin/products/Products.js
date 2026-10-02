import React, { useState, useEffect } from 'react'
import ProductsList from './ProductsList'
import ProductForm from './ProductForm';
import {URL} from '../../config/Constant';
import axios from 'axios';

export default function Products() {

    const [status, setStatus] = useState('list');
    const [productsList, setProductsList] = useState([]);
    const [addNew, setAddNew] = useState(false);
    const [edit, setEdit] = useState(false);
    const [updatedId, setUpdatedId] = useState(false);
    const [formData, setFormData] = useState(false);
    const [image, setImage] = useState(null);

    const handleAddNew = (val,id) =>{
        setStatus(val);
        if(id){
            setEdit(true);
            setFormData(productsList.filter(product => product._id === id )[0]);
        }
       
    }

    const getAPI = async () => {
            try{
                const response = await fetch(URL+"getNewProducts");
    
                const result = await response.json();
    
                setProductsList(result);
                
            }catch(error){
                console.error('Error fetching products:', error);
            }finally{
               // console.log('API call completed');
            }
        }
    
        useEffect(()=>{
            getAPI();
        },[status])

    const addNewButton = async () => {
        if(edit){
            try {
                // almost change and put newFormData
                const productFormData = new FormData();

                productFormData.append("_id", formData._id)
                productFormData.append('name', formData.name);
                productFormData.append('price', formData.price);
                productFormData.append('image', image);

                const response = await fetch(URL+'updateNewProduct', {
                    // Delete and changed style
                    method: 'POST',
                    // headers: {
                    //     'Content-Type': 'application/json', 
                    // },
                    body: productFormData
                    // body: JSON.stringify(formData), 
                    // file:image
                });
                setStatus('list');    
            } catch (error) {
                console.error('Error sending data:', error);
            }
            setEdit(false);
        }else{
            // const newProduct = { 
            //     name:formData.name,
            //     price:formData.price,
            //     image:image
            // }

            const productFormData = new FormData();
            productFormData.append('name', formData.name);
            productFormData.append('price', formData.price);
            productFormData.append('image', image);

            try {

                const response = await fetch(URL+'addNewProduct', {
                    method: 'POST',
                    body: productFormData
                });

               
                // console.log(productFormData);
                //  const response = await axios.post(URL+'addProduct', productFormData, {
                //     headers: {
                //     'Content-Type': 'multipart/form-data',
                //     },
                // });

                const data = await response.json();
                console.log(data);


                setStatus('list');    
            } catch (error) {
                console.error('Error sending data:', error);
            }

        }
        setFormData({ name : '', price : '', image : ''});
    }

     const handleInput = (e) => {
        const {name, value} = e.target; 
        setFormData({...formData, [name]:value}); 
     
    }

    const handleDelete = async(id) => {
        setStatus('delete');
        try {
                const response = await fetch(URL+'deleteNewProduct', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json', 
                    },
                    body: JSON.stringify({id:id}), 
                });
                setStatus('list');    
            } catch (error) {
                console.error('Error sending data:', error);
            }

    }

    return (
        <div>
            {status === 'list' && <ProductsList  handleAddNew={handleAddNew} productsList={productsList} handleDelete={handleDelete} URL={URL} />}
            {status === 'add' && <ProductForm  handleInput={handleInput} formData={formData} addNewButton={addNewButton}  edit={edit} setImage={setImage} />}
        </div>
    )
}
