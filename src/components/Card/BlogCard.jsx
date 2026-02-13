import React from 'react'
import blogs1 from "./../../assets/blog-1.jpg"
const BlogCard = (props) => {
  return (
     <div className="col-lg-4 col-md-6 md-3">
                    <div className="bog-item">
                      <div className="blog-image overflow-hidden">
                        <img src={props.image} className="img-fluid" alt="" />
                      </div>
                      <div className="blog-content">
                        <div className="blog-date">
                          24th March 2025
                        </div>
                        <h4 className="mb-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h4>
                        <p className="mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo at molestiae iure ut cum atque, totam omnis repudiandae aliquam expedita?</p>
                        <button className="blog-btn">Read More</button>
                      </div>
                    </div>
                  </div>
  )
}

export default BlogCard
