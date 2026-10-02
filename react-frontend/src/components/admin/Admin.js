import React, { useState } from 'react'
import Report from './report/Report';
import Header from '../pages/Header';
import SideBar from '../pages/SideBar';
import Products from './products/Products';
import Login from './login/Login';
// import '../../assets/css/style.css';
import Users from './users/Users';

export default function Admin() {

    const [active, setActive] = useState('report');
    const [login, setLogin] = useState(false);


    const handleActiveBar = (val) => {
        setActive(val);
    }

    const handleLogin = () => {
        setLogin(true);
        setActive('report');
    }

    const handleLLogout = () => {
        setLogin(false);
    }


  return (
     <div className="main-wrapper">

        <Header/>
		
       {login &&
                <>
                    <SideBar active={active} handleActiveBar={handleActiveBar} handleLLogout={handleLLogout} />

                    <div className="page-wrapper">

                        <div className="content">

                            {active === 'report' && <Report />}

                            {active === 'products' && <Products />}

                            {active === 'users' && <Users />}

                        </div>
                    </div>
                </>
        } 
        {!login &&
           <Login handleLogin={handleLogin} />
        }

    </div>
  )
}
