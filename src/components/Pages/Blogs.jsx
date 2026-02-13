import React from "react";
import { Link } from "react-router-dom";
import BlogCard from "../Card/BlogCard";
import blog1 from "../../assets/blog-1.jpg";
import blog2 from "../../assets/blog-2.jpg";
import blog3 from "../../assets/blog-3.jpg";




const Blogs = () => {
  return (
    <>
         {/* page section */}
             <div className="section-banner d-flex align-items-center text-white">
               <div className="container">
                 <div className="row align-items-center">
                   <div className="col-xl-12 col-lg-12">
                     <div className="section-wrap text-center">
                       <div className="section-title">
                         <h2>Our Blog</h2>
                       </div>
                       <div className="section-wrap d-flex align-items-center justify-content-center">
                         <ul className="d-flex align-items-center text-center gap-3 m-0 p-0 position-relative">
                           <li>
                             <Link to="/">Home</Link>&nbsp;/&nbsp;
                             <span className="fw-bold">Our Blog</span>
                           </li>
                         </ul>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
          
          {/*Blog Section  */}
 <div className="container py-5">
  <div className="row">

    {/* LEFT: Blog Posts */}
    <div className="col-lg-8 blog-left d-flex flex-column gap-4">
      {/* BlogCard 1 */}
      <div className="card border-0 shadow-sm">
        <img src={blog1} alt="Blog 1" className="card-img-top" />
        <div className="card-body">
          <span className="badge  mb-2">24th March 2022</span>
          <h5 className="card-title">Cras accumsan nulla nec lacus ultricies placerat</h5>
          <p className="card-text">
            Curabitur sagittis libero tincidunt tempor finibus. Mauris at dignissim ligula, nec tristique orci.
          </p>
          <a href="#" className="text-decoration-none fw-semibold text-dark">READ MORE</a>
        </div>
      </div>

      {/* BlogCard 2 */}
      <div className="card border-0 shadow-sm">
        <img src={blog2} alt="Blog 2" className="card-img-top" />
        <div className="card-body">
          <span className="badge  mb-2">14th May 2022</span>
          <h5 className="card-title">Another Beautiful Blog Post Title</h5>
          <p className="card-text">
            Sed at sapien a nisl dictum sodales. Integer in eros nec leo dapibus scelerisque.
          </p>
          <a href="#" className="text-decoration-none fw-semibold text-dark">READ MORE</a>
        </div>
      </div>

      {/* BlogCard 3 */}
      <div className="card border-0 shadow-sm">
        <img src={blog3} alt="Blog 3" className="card-img-top" />
        <div className="card-body">
          <span className="badge  mb-2">10th Jan 2023</span>
          <h5 className="card-title">Third Blog Post Title Example</h5>
          <p className="card-text">
            Fusce tincidunt lorem vel velit facilisis, et scelerisque justo pretium.
          </p>
          <a href="#" className="text-decoration-none fw-semibold text-dark">READ MORE</a>
        </div>
      </div>
    </div>

    {/* RIGHT: Sidebar */}
    <div className="col-lg-4  align-self-start ">
     
        {/* Search Box */}
        <div className="mb-4 p-4 bg-light shadow-sm rounded">
          <div className="position-relative">
            <input type="text" className="form-control " placeholder="Search..." />
            <button className="btn  d-flex align-items-center justify-content-center position-absolute top-0 end-0 h-100 w-50  px-3">Search</button>
          </div>
        </div>

        {/* Follow Us */}
        <div className="mb-4 p-4 bg-light shadow-sm rounded">
          <h5 className="mb-3">Follow Us</h5>
          <div className="d-flex gap-3 fs-5">
            <i className="bi bi-twitter cursor-pointer"></i>
            <i className="bi bi-facebook cursor-pointer"></i>
            <i className="bi bi-instagram cursor-pointer"></i>
            <i className="bi bi-pinterest cursor-pointer"></i>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-4 p-4 bg-light shadow-sm rounded">
          <h5 className="mb-3">Categories</h5>
          <ul className="list-unstyled mb-0">
            <li className="d-flex justify-content-between border-bottom py-2">Branding <span>(4)</span></li>
            <li className="d-flex justify-content-between border-bottom py-2">Corporate <span>(3)</span></li>
            <li className="d-flex justify-content-between border-bottom py-2">Design <span>(3)</span></li>
            <li className="d-flex justify-content-between py-2">Gallery <span>(6)</span></li>
          </ul>
        </div>

        {/* Recent Posts */}
        <div className="mb-4 p-4 bg-light shadow-sm rounded">
          <h5 className="mb-3">Recent Posts</h5>
          <ul className="list-unstyled mb-0">
            <li className="border-bottom py-2">
              User Experience Psychology and Performance<br />
              <small className="text-muted">August 3, 2020</small>
            </li>
            <li className="border-bottom py-2">
              Monthly Web Cost<br />
              <small className="text-muted">December 9, 2019</small>
            </li>
            <li className="py-2">
              There are many variation passages<br />
              <small className="text-muted">July 26, 2010</small>
            </li>
          </ul>
        </div>

        {/* Tags */}
        <div className="mb-4 p-4 bg-light shadow-sm rounded">
          <h5 className="mb-3">Tags</h5>
          <div className="d-flex flex-wrap gap-2">
            {["App", "Branding", "Corporate", "Design", "Gallery", "Video", "Web Design"].map(tag => (
              <span key={tag} className="badge bg-secondary text-white cursor-pointer">{tag}</span>
            ))}
          </div>
        </div>

    
    </div>
  </div>
</div>




    </>
  )
}

export default Blogs
