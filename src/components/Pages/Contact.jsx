import React from 'react';
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      {/* Page Banner */}
      <div className="section-banner d-flex align-items-center text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-12 col-lg-12">
              <div className="section-wrap text-center">
                <div className="section-title">
                  <h2>Contact Us</h2>
                </div>
                <div className="section-wrap d-flex align-items-center justify-content-center">
                  <ul className="d-flex align-items-center text-center gap-3 m-0 p-0 position-relative">
                    <li>
                      <Link to="/">Home</Link>&nbsp;/&nbsp;
                      <span className="fw-bold">Contact Us</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-page py-5">
        <div className="container">
          <div className="row">

            {/* Contact Info Left Side */}
            <div className="col-md-5 mb-4">
              <div className="d-flex align-items-start mb-4">
                <div className="contacticon rounded-circle text-white d-flex align-items-center justify-content-center me-3 " style={{ width: 60, height: 60 }}>
                  <i className="fs-2 bi bi-geo-alt-fill"></i>
                </div>
                <div>
                  <strong>Office Address</strong>
                  <p className="mb-0">289 st Kilda Road, Mumbai</p>
                </div>
              </div>
              <hr />
              <div className="d-flex align-items-start mb-4">
                <div className="contacticon rounded-circle text-white d-flex align-items-center justify-content-center me-3 " style={{ width: 60, height: 60 }}>
                  <i className=" fs-2 bi bi-clock-fill"></i>
                </div>
                <div>
                  <strong>Working Hours</strong>
                  <p className="mb-0">Monday to Friday 09:00 to 18:30<br />Saturday 15:30</p>
                </div>
              </div>
              <hr />
              <div className="d-flex align-items-start">
                <div className="contacticon rounded-circle text-white d-flex align-items-center justify-content-center me-3 " style={{ width: 60, height: 60 }}>
                  <i className=" fs-2 bi bi-envelope-fill"></i>
                </div>
                <div>
                  <strong>Message Us</strong>
                  <p className="mb-0">support@example.com<br />info@example.com</p>
                </div>
              </div>
            </div>

            {/* Contact Form Right Side */}
            <div className="col-md-7">
              <div className="bg-light p-4 rounded shadow-sm">
                <h4 className="mb-4">Get In Touch</h4>
                <form>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <input type="text" className="form-control" placeholder="First Name" />
                    </div>
                    <div className="col-md-6 mb-3">
                      <input type="email" className="form-control" placeholder="Email" />
                    </div>
                    <div className="col-md-6 mb-3">
                      <input type="text" className="form-control" placeholder="Phone No." />
                    </div>
                    <div className="col-md-6 mb-3">
                      <input type="text" className="form-control" placeholder="Subject" />
                    </div>
                  </div>
                  <div className="mb-3">
                    <textarea rows="4" className="form-control" placeholder="Write comments"></textarea>
                  </div>
                  <button type="submit" className="btn btn-dark w-100">SUBMIT NOW</button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
  {/* NEWSLETTER */}
  <div className='mt-5 mb-5'>
      <div className="container-newsletter col-lg p-3 ">
        <div className="section-title text-center p-3">
        <span >NEWSLETTER</span>
        <h2 >Subscribe to our Newsletter</h2>

        <form className="d-flex justify-content-center">
          <input
            type="email"
            className="form-control w-50 me-2"
            placeholder="Enter your email address"
          />
          <button type="submit" className="btn btn-brown px-4">
            Subscribe
          </button>
        </form>                 
        </div>
      </div>
      </div>
    </>
  );
};

export default Contact;
