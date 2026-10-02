import React from 'react'

export default function SideBar(props) {
    const {active, handleActiveBar, handleLLogout} = props;
  return (
    <div>
        <div className="sidebar" id="sidebar">
            <div className="sidebar-inner slimscroll">
                <div id="sidebar-menu" className="sidebar-menu">
                    <ul>
                        <li className={active === 'report' ? 'active' : ''} onClick={ () => handleActiveBar('report') }>
                            <a href="#"><i className="fa fa-dashboard"></i> <span>Report</span></a>
                        </li>
						<li className={active === 'products' ? 'active' : ''} onClick={ () => handleActiveBar('products') }>
                            <a href="#"><i className="fa fa-user-md"></i> <span>Products</span></a>
                        </li>
                        <li className={active === 'users' ? 'active' : ''} onClick={ () => handleActiveBar('users') }>
                            <a href="#"><i className="fa fa-wheelchair"></i> <span>Users</span></a>
                        </li>
                    </ul>   
                    <ul className="sidebar-logout">
                        <li>
                            <a href="#" onClick={()=>handleLLogout()}><i className="fa fa-power-off"></i> <span>Logout</span></a>
                        </li>
                    </ul>
                </div>
            </div>  
                   
                </div>
                
            </div>
            
  )
}
