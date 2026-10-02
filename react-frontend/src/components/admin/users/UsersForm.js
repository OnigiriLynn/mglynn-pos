import React, { useRef, useState } from 'react'
import '../../../assets/css/custom.css';
import {URL} from '../../config/Constant';

export default function UsersForm(props) {

    const{edit, formData, addNewButton, handleInput, setImage} = props;
    const [preview, setPreview] = useState(null);


    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setImage(selectedFile);
            // Creates a temporary local URL to show the image preview immediately
            setPreview(window.URL.createObjectURL(selectedFile));
        }
    };
  

    return (
        <div>
            <div className="account-box">
                    <h3>{edit ? "Update User Information" : "Add User Information"}</h3>
                        <div className="form-signin">
                            <div className="account-logo">
                                <input 
                                    type="file" 
                                    accept="image/*" 
                                    onChange={handleFileChange} 
                                    name="image"
                                />
                               {(preview || formData.image) && (
                                    <div style={{ marginTop: '15px' }} className="image-preview">
                                            <p>Preview:</p>
                                                <img src={preview?preview:(URL + formData.image)} alt="My Lynn POS" title="My Lynn POS" style={{ width: '100%', maxHeight: '300px', objectFit: 'contain' }} />
                                            </div>
                                )}
                            </div>
                            <div className="form-group">
                                <label>Full Name</label>
                                <input onChange={(e)=>handleInput(e)} value={formData.full_name?formData.full_name:''} name="full_name" type="text" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input onChange={(e)=>handleInput(e)} value={formData.email?formData.email:''} name="email" type="email" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input onChange={(e)=>handleInput(e)} value={formData.password?formData.password:''} name="password" type="password" className="form-control" />
                            </div>
                            <div className="form-group text-center">
                                <button onClick={()=>addNewButton()} className="btn btn-primary account-btn" type="button" disabled={!formData.full_name || !formData.email || !formData.password?"disabled":""}>{edit ? 'Update':'Add New'}</button>
                            </div>
                        </div>
                    </div>
        </div>
    )
}
