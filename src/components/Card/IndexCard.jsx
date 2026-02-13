import React from 'react'
import "./../../index.css"
const IndexCard = (props) => {
  return (
    <>
                     <div className="col-lg-4 col-md-6 border-0 mb-4 mb-lg-0 ">
                      <div className="explore-card p-4 shadow">
                         {props.image && <img src={props.image} className="img-fluid" alt="" />}                         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque quo, fuga numquam dolorem ea aliquid.</p>
                         <a href="#">Read More</a>
                      </div>                      
                     </div>
    </>
  )
}

export default IndexCard
