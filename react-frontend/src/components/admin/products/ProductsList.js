import React from 'react'

export default function ProductsList(props) {

  const {handleAddNew, handleDelete, productsList, URL} = props;

  return (
            <>
                <div className="row">
                    <div className="col-sm-4 col-3">
                        <h4 className="page-title">Products List</h4>
                    </div>
                    <div className="col-sm-8 col-9 text-right m-b-20">
                        <a href="#" className="btn btn-primary btn-rounded float-right" onClick={()=>handleAddNew('add','')}><i className="fa fa-plus"></i> Add a product</a>
                    </div>
                </div>
                <div className="row doctor-grid">
                    {productsList && productsList.map((product)=>(
                        <div key={product._id} className="col-md-4 col-sm-4  col-lg-3">
                          <div className="profile-widget">
                              <div className="doctor-img">
                                  <a className="avatar" href="#"><img title="POS" alt="POS" src={URL+product.image} /></a>
                              </div>
                              <div className="dropdown profile-action">
                                  <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v"></i></a>
                                  <div className="dropdown-menu dropdown-menu-right">
                                      <a onClick={()=>handleAddNew('add',product. _id)} className="dropdown-item" href="#"><i className="fa fa-pencil m-r-5"></i> Edit</a>
                                      <a onClick={()=>handleDelete(product._id)} className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_doctor"><i className="fa fa-trash-o m-r-5"></i> Delete</a>
                                  </div>
                              </div>
                              <h4 className="doctor-name text-ellipsis"><a href="#">{product.name}</a></h4>
                              <div className="doc-prof">${product.price.toFixed(2)}</div>
                              {/* <div className="user-country">
                                  <i className="fa fa-map-marker"></i>White coffee can refer to any of a number of different kinds of coffees or coffee substitutes worldwide.
                              </div> */}
                          </div>
                      </div>
                    ))}

                    </div>
              </>
  )
}
