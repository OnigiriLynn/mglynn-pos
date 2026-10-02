import React from 'react'

export default function UsersList(props) {

  const {handleAddNew, handleDelete, usersList, URL} = props;

  return (
            <>
                <div className="row">
                    <div className="col-sm-4 col-3">
                        <h4 className="page-title">Users List</h4>
                    </div>
                    <div className="col-sm-8 col-9 text-right m-b-20">
                        <a href="#" className="btn btn-primary btn-rounded float-right" onClick={()=>handleAddNew('add','')}><i className="fa fa-plus"></i> Add User Information </a>
                    </div>
                </div>
                <div className="row doctor-grid">
                    <table>
                        <thead>
                            <tr>
                                <th>Profile</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            {usersList && usersList.map((user)=>(
                                <tr key={user._id}>
                                    <td><a className="avatar" href="#"><img alt="" src={URL+user.image} /></a></td>
                                    <td>{user.full_name}</td>
                                    <td>{user.email}</td>
                                    <td>{"*".repeat(user.password.length)}</td>
                                    <td>
                                        <div className='userAction'>
                                            <a onClick={()=>handleAddNew('add',user. _id)} href="#" className='userEdit'>Edit</a>
                                            <a onClick={()=>handleDelete(user._id)} href="#" className='userDelete'>Delete</a>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    </div>
                    {/* {usersList && usersList.map((user)=>(
                        <div key={user._id} className="col-md-4 col-sm-4  col-lg-3">
                          <div className="profile-widget">
                              <div className="doctor-img">
                                  <a className="avatar" href="#"><i className="fa fa-user"></i></a>
                              </div>
                              <div className="dropdown profile-action">
                                  <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v"></i></a>
                                  <div className="dropdown-menu dropdown-menu-right">
                                      <a onClick={()=>handleAddNew('add',user. _id)} className="dropdown-item" href="#"><i className="fa fa-pencil m-r-5"></i> Edit</a>
                                      <a onClick={()=>handleDelete(user._id)} className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_doctor"><i className="fa fa-trash-o m-r-5"></i> Delete</a>
                                  </div>
                              </div>
                              <h4 className="doctor-name text-ellipsis"><a href="#">{user.full_name}</a></h4>
                              <div className="doc-prof">{user.email}</div>
                              <div className="doc-prof">********</div>
                          </div>
                      </div>
                    ))} */}
              </>
  )
}
