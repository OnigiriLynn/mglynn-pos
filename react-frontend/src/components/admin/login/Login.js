import React from 'react'

export default function Login(props) {

    const {handleLogin} = props;

    const emailRef = React.useRef();
    const passwordRef = React.useRef();

    const [error, setError] = React.useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        try {
                const response = await fetch('http://localhost:4000/checkLogin', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json', 
                    },
                    body: JSON.stringify({ email, password }),      
                });

                const data = await response.json();
                if(data.success){
                    handleLogin();
                }else{
                    setError('Invalid email or password');
                }
            } catch (error) {
                console.error('Error sending data:', error);
            }

        
    }

  return (
            <div className="account-content">
                <div className="container">
                    <div className="account-box">
                        <div className="account-wrapper">
                            <h3 className="account-title">Admin Login</h3>
                            {error && <p style={{color:'red'}}>{error}</p>}
                            <form>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input ref={emailRef} type="email" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input ref={passwordRef} type="password" className="form-control" />
                                </div>
                                <div className="form-group text-center">
                                    <button onClick={(e)=>handleSubmit(e)} className="btn btn-primary account-btn" type="button">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
  )
}
