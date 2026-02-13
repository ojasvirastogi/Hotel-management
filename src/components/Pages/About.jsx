import React from "react";
import { Link } from "react-router-dom";
import BlogCard from "../Card/BlogCard";

import hotelsImg from "../../assets/about-1.png";
import bedroomImg from "../../assets/about-2.png";
import bookingImg from "./../../assets/Bookings.png";
import element1 from "../../assets/bg-1.png";
import element2 from "../../assets/bg-2.png";
import resorts from "../../assets/feature.png";
import blog1 from "../../assets/blog-1.jpg";
import blog2 from "../../assets/blog-2.jpg";
import blog3 from "../../assets/blog-3.jpg";

const About = () => {
  return (
    <>
      {/* page section */}
      <div className="section-banner d-flex align-items-center text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-12 col-lg-12">
              <div className="section-wrap text-center">
                <div className="section-title">
                  <h2>About Us</h2>
                </div>
                <div className="section-wrap d-flex align-items-center justify-content-center">
                  <ul className="d-flex align-items-center text-center gap-3 m-0 p-0 position-relative">
                    <li>
                      <Link to="/">Home</Link>&nbsp;/&nbsp;
                      <span className="fw-bold">About</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* // about section */}
      <div className="about-section my-5 py-5" id="about">
        <div className="container">
          <div className="row align-items-center gy-4">
            <div className="col-lg-6 position-relative image-wrapper">
              <img
                src={hotelsImg}
                alt=""
                className="img-fluid shadow-sm main-img"
              />
              <img
                src={bedroomImg}
                alt=""
                className="overlay-img shadow-sm p-1 bg-white"
              />
            </div>
            <div className="col-lg-6 col-md-10  text-wrapper">
              <div className="section-title about-title">
                <span>About Us</span>
                <h2>
                  Most Safe &Rated <br />
                  Hotel in Amsterdam
                </h2>
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi officiis odio, mollitia asperiores delectus illum
                corrupti!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Reprehenderit porro adipisci sint!
              </p>
              <div className="feature-paragraph mt-4 mb-4">
                <p>
                  <i className="ri-check-line"></i>24 Month /24,000km
                  Nationalwide Warranty monotone
                </p>
                <p>
                  <i className="ri-check-line"></i>24 Month /24,000km
                  Nationalwide Warranty monotone
                </p>
                <p>
                  <i className="ri-check-line"></i>24 Month /24,000km
                  Nationalwide Warranty monotone
                </p>
              </div>
              <button className="btn discover-btn mt-3">DISCOVER MORE</button>
            </div>
          </div>
        </div>
      </div>
      {/* progress */}
      <div className="py-5">
        <div className="container-fluid ">
          <div className="row g-0 align-items-stretch">
            {/* Left Side: Text Box */}
            <div className="col-lg-6 d-flex flex-column justify-content-center text-white p-5 progress-box">
              <p className="text-uppercase small">Rio We Use</p>
              <h2 className="display-5 fw-bold">
                We Offer Wide
                <br />
                Selection of Hotel
              </h2>
              <p className="mb-4">
                Vestibulum non ornare nunc. Maecenas a metus in est iaculis
                pretium. Aliquam ullamcorper nibh lacus, ac suscipit ipsum
                consequat porttitor.
              </p>

              <div className="mb-4">
                <p className="mb-1">
                  Quality Production <span className="float-end">80%</span>
                </p>
                <div className="progress">
                  <div
                    className="progress-bar bg-warning"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>

              <div className="mb-4">
                <p className="mb-1">
                  Maintenance Services <span className="float-end">90%</span>
                </p>
                <div className="progress">
                  <div
                    className="progress-bar bg-warning"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>

              <div>
                <p className="mb-1">
                  Product Management <span className="float-end">85%</span>
                </p>
                <div className="progress">
                  <div
                    className="progress-bar bg-warning"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
              <div>
                <p className="mb-1 mt-3">
                  Service Management <span className="float-end">75%</span>
                </p>
                <div className="progress">
                  <div
                    className="progress-bar bg-warning"
                    style={{ width: "74%" }}
                  ></div>
                </div>
              </div>
              <div>
                <p className="mb-1 mt-3">
                  Food Management <span className="float-end">70%</span>
                </p>
                <div className="progress">
                  <div
                    className="progress-bar bg-warning"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Right Side: Image */}
            <div className="col-lg-6">
              <div className="h-100 w-100">
                <img
                  src={bookingImg}
                  alt="Hotel Interior"
                  className="img-fluid w-100 h-100"
                  style={{ objectFit: "cover", minHeight: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* NEWSLETTER */}
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

      {/* Resort */}
      <div className="resort my-5 mb-0">
        <div className="container-fluid position-relative">
          <img
            src={element2}
            className="element element2 position-absolute"
            alt=""
          />
          <div className="row p-0 align-items-center">
            <div className="col-lg-6 image-wrapper p-0">
              <img
                src={resorts}
                className="img-fluid shadow-sm resort-img"
                alt=""
              />
            </div>
            <div className="col-lg-4 ps-5 pt-3 text-wrapper resort-content">
              <div className="section-title about-title">
                <span>Luxury Hotel & Resort</span>
                <h2>Pearl of The Adriatic</h2>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas neque eveniet numquam explicabo excepturi natus Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Vitae magni
                explicabo velit error nulla similique ex tenetur optio quam a.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui
                tempore eligendi cum odio harum! Reprehenderit?Lorem, ipsum
                dolor sit amet consectetur adipisicing elit. Placeat,
                illo!lorem10
              </p>
              <button className="btn discover-btn mt-3">DISCOVER MORE</button>
            </div>
          </div>
        </div>
      </div>
      {/* Blog */}
      <div className="blog py-5 position-relative">
        <div className="container">
          <img
            src={element1}
            className="element element1 position-absolute"
            alt=""
          />
          <div className="row">
            <div className="section-title text-center d-flex flex-column align-items-center">
              <span>Our Blog</span>
              <h2>Latest Blog & News</h2>
              <p style={{ maxWidth: "800" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate, earum soluta sunt labore aliquid nam, autem nobis
                ipsum ex ut ducimus amet dolorem assumenda sint dolores sapiente
                unde necessitatibus optio?
              </p>
            </div>
            <div className="blog-wrapper mt-5">
              <div className="row">
                <BlogCard image={blog1} />
                <BlogCard image={blog2} />
                <BlogCard image={blog3} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
