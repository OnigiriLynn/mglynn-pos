import React, { useState, useEffect } from 'react'
import UsersList from './UsersList';
import UsersForm from './UsersForm';
import {URL} from '../../config/Constant';

export default function Users() {

    const [status, setStatus] = useState('list');
    const [usersList, setUsersList] = useState([]);
    const [addNew, setAddNew] = useState(false);
    const [edit, setEdit] = useState(false);
    const [updatedId, setUpdatedId] = useState(false);
    const [formData, setFormData] = useState(false);
    const [image, setImage] = useState(null);


    const handleAddNew = (val,id) =>{
        setStatus(val);
        if(id){
            setEdit(true);
            setFormData(usersList.filter(user => user._id === id )[0]);
        }
       
    }

    // const getAPI = async () => {
    //         try{
    //             const response = await fetch(URL+"getUsers");
    
    //             const result = await response.json();
    
    //             setUsersList(result);
                
    //         }catch(error){
    //             console.error('Error fetching users:', error);
    //         }finally{
    //            // console.log('API call completed');
    //         }
    //     }
    
    //     useEffect(()=>{
    //             getAPI();
    //     },[status]);

    // const addNewButton = async () => {
    //     if(edit){
    //         try {
    //             const response = await fetch(URL+'updateUser', {
    //                 method: 'POST',
    //                 headers: {
    //                     'Content-Type': 'application/json', 
    //                 },
    //                 body: JSON.stringify(formData), 
    //             });
    //             const data = await response.json();
    //             setStatus('list');    
    //         } catch (error) {
    //             console.error('Error sending data:', error);
    //         }
    //         setEdit(false);
    //     }else{
    //         const newUser = { 
    //             full_name: formData.full_name,
    //             email:formData.email,
    //             password:formData.password
    //         }

    //         try {
    //             const response = await fetch(URL+'addUser', {
    //                 method: 'POST',
    //                 headers: {
    //                     'Content-Type': 'application/json', 
    //                 },
    //                 body: JSON.stringify(newUser), 
    //             });

    //             const data = await response.json();
    //             setStatus('list');    
    //         } catch (error) {
    //             console.error('Error sending data:', error);
    //         }

    //     }
    //     setFormData({full_name: '', email : '', password : ''});
    // }

    //  const handleInput = (e) => {
    //     const {name, value} = e.target; 
    //     setFormData({...formData, [name]:value}); 
     
    // }

    // const handleDelete = async(id) => {
    //     setStatus('delete');
    //     try {
    //             const response = await fetch(URL+'deleteUser', {
    //                 method: 'POST',
    //                 headers: {
    //                     'Content-Type': 'application/json', 
    //                 },
    //                 body: JSON.stringify({id:id}), 
    //             });
    //             const data = await response.json();
    //             setStatus('list');
    //         } catch (error) {
    //             console.error('Error sending data:', error);
    //         }

    // }


    const getAPI = async () => {
                try{
                    const response = await fetch(URL+"getNewUser");
        
                    const result = await response.json();
        
                    setUsersList(result);
                    
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
                    const usersFormData = new FormData();
    
                    usersFormData.append("_id", formData._id)
                    usersFormData.append('full_name', formData.full_name);
                    usersFormData.append('email', formData.email);
                    usersFormData.append('password', formData.password)
                    usersFormData.append('image', image);
    
                    const response = await fetch(URL+'updateNewUser', {
                        // Delete and changed style
                        method: 'POST',
                        // headers: {
                        //     'Content-Type': 'application/json', 
                        // },
                        body: usersFormData
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
    
                const usersFormData = new FormData();
    
                    usersFormData.append('_id', formData._id)
                    usersFormData.append('full_name', formData.full_name);
                    usersFormData.append('email', formData.email);
                    usersFormData.append('password', formData.password)
                    usersFormData.append('image', image);
    
                try {
    
                    const response = await fetch(URL+'addNewUser', {
                        method: 'POST',
                        body: usersFormData
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
            setFormData({ full_name : '', email : '', password : '', image : ''});
        }
    
         const handleInput = (e) => {
            const {name, value} = e.target; 
            setFormData({...formData, [name]:value}); 
         
        }
    
        const handleDelete = async(id) => {
                setStatus('delete');
                try {
                        const response = await fetch(URL+'deleteNewUser', {
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
            {status === 'list' && <UsersList  handleAddNew={handleAddNew} usersList={usersList} handleDelete={handleDelete} URL={URL}/>}
            {status === 'add' && <UsersForm  handleInput={handleInput} formData={formData} addNewButton={addNewButton}  edit={edit} setImage={setImage} />}
        </div>
    )
}