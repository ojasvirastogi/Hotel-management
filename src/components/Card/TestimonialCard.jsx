import React from 'react'
import user1 from "./../../assets/test-1.png"
import quote from "./../../assets/Quote.png"
const TestimonialCard = (props) => {
  return (
     <div className="testimonial-card p-4 rounded bg-white shadow-sm">
                <div className="d-flex align-items-center mb-3 justify-content-between">
                  <img src={props.image} className="testimonial-img rounded-circle me-3" alt="" />
                  <div className="testimonial-info">
                   <h5 className="mb-0 fw-bold">{props.name}</h5>
                   <small className="text-muted">{props.role}</small>
                  </div>
                  <img src={quote} alt="" />
                </div>
                <div className="stars text-warning mb-3">
                  <i className="ri-star-fill me-1"></i>
                  <i className="ri-star-fill me-1"></i>
                  <i className="ri-star-fill me-1"></i>
                  <i className="ri-star-fill me-1"></i>
                  <i className="ri-star-fill "></i>
                </div>
                <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, ipsum nemo. Soluta mollitia ducimus consequuntur reiciendis corporis.</p>
              </div>
  )
}

export default TestimonialCard
