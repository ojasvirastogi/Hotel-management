import React from "react";
import checkIcon from "./../../assets/check-icon.png";
import closeIcon from "./../../assets/xbox-x.png";
import userIcon from "./../../assets/users-icon.png";
import babyIcon from "./../../assets/baby-icon.png";
import roomIcon from "./../../assets/room-icon.png";
import hotelImg from "./../../assets/about-1.png";
import bedroomImg from "./../../assets/about-2.png";
import hotelsImg from "./../../assets/about-1.png";
import explore1 from "./../../assets/explore-icon-1.png";
import explore2 from "./../../assets/explore-icon-2.png";
import explore3 from "./../../assets/explore-icon-3.png";
import explore4 from "./../../assets/explore-icon-4.png";
import explore5 from "./../../assets/explore-icon-5.png";
import explore6 from "./../../assets/explore-icon-6.png";
import element1 from "./../../assets/bg-1.png";
import element2 from "./../../assets/bg-2.png";


import {Swiper,SwiperSlide} from "swiper/react"
import "swiper/css"
import { Autoplay } from 'swiper/modules'
import singleServiceIcon01 from "../../assets/option-icon-2.png"
import singleServiceIcon02 from "../../assets/option-icon-3.png"
import singleServiceIcon03 from "../../assets/option-icon-4.png"
import singleServiceIcon04 from "../../assets/option-icon-2.png"
import singleServiceIcon05 from "../../assets/option-icon-3.png"
import singleServiceIcon06 from "../../assets/option-icon-4.png"
import Data from "./../../Data.json"

import IndexCard from "../Card/IndexCard";
import TestimonialCard from "../Card/TestimonialCard";


import resorts from "./../../assets/feature.png"
import user1 from "./../../assets/test-1.png"
import user2 from "./../../assets/test-2.png"
import user3 from "./../../assets/test-3.png"

import bookingImg from "./../../assets/Bookings.png"
import playVideo from "./../../assets/play-btn.png"
import blogs1 from "./../../assets/blog-1.jpg"
import BlogCard from "../Card/BlogCard";
import blogs2 from "./../../assets/blog-2.jpg"
import blogs3 from "./../../assets/blog-3.jpg"
import brand1 from "./../../assets/logo1.png"
import brand2 from "./../../assets/logo2.png"
import brand3 from "./../../assets/logo3.png"
import brand4 from "./../../assets/logo4.png"
import brand5 from "./../../assets/logo5.png"


const Index = () => {
  return (
    <>
      {/* // hero section */}
      <header className="pt-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="hero-content">
                <h1>Enjoy A Luxuary Experience</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi repellendus assumenda sed.
                </p>
                <button className="btn">Visit Us</button>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="booking-form bg-white p-5 rounded">
                <h2>Book A Room</h2>
                <div className="row">
                  <div className="col-md-6">
                    <div className="booking-box">
                      <p>
                        <img className="mx-2" src={checkIcon} alt="" />
                        Check In Date
                      </p>
                      <input type="date" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="booking-box">
                      <p>
                        <img className="mx-2" src={closeIcon} alt="" />
                        Check Out Date
                      </p>
                      <input type="date" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 mt-3">
                  <div className="booking-box">
                    <p>
                      <img className="mx-2" src={userIcon} alt="" />
                      Adults
                    </p>
                    <select className="w-100">
                      <option value="Adults">Adults</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <div className="booking-box">
                      <p>
                        <img className="mx-2" src={babyIcon} alt="" />
                        Child
                      </p>
                      <select className="w-100">
                        <option value=" Child"> Child</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="booking-box">
                      <p>
                        <img className="mx-2" src={roomIcon} alt="" />
                        Room
                      </p>
                      <select className="w-100">
                        <option value="Room">Room</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </div>
                  </div>
                </div>
                <button className="btn mt-5 check">CHECK AVAILABILITY</button>
              </div>
            </div>
          </div>
        </div>
      </header>

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
            <div className="col-lg-6 text-wrapper">
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
      {/* explore */}
      <div className="explore my-5  py-5 mb-0 position-relative">
        <div className="container">
          <img src={element1} className="element element1 position-absolute" alt="" />
          <div className="row">
            <div className="section-title text-center explore-title d-flex flex-column">
              <span>Explore</span>
              <h2>The Hotel</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. At
                voluptatum architecto unde et facere in.
              </p>
            </div>
            <div className="explore-wrapper mt-5">
              <div className="row g-4 align-items-center mb-7">
                {/* card 1 */}
               <IndexCard  image={explore1}/>
                {/* card 2 */}
                <IndexCard image={explore2}/>
                 {/* card 3 */}
                <IndexCard image={explore3}/>
                 {/* card 4 */}
                <IndexCard image={explore4}/>
                 {/* card 5 */}
                <IndexCard image={explore5}/>
                 {/* card 6 */}
                <IndexCard image={explore6}/>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rooms */}
     <div className="container py-5">
         <div className="row">
          <div className="section-title text-center explore-title d-flex flex-column align-items-center">
            <span>The pleasure of luxury</span>
            <h2>Rooms &Suites</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, qui.</p>
          </div>
          <Swiper 
          slidesPerView={3}
          spaceBetween={30}
          breakpoints={{
            320:{slidesPerView:1},
            768:{slidesPerView:2},
            1200:{slidesPerView:3},
          }}
          className="mt-5 border p-3 rounded"
          >
           {Data.Rooms.map((Room,index)=>(
            <SwiperSlide key={index}>
                     <div className="single-service mb-3">
                      <div className="service-thumb">
                        <a href={Room.src} className="gallery-link popup-image" tabIndex={-1}>
                          <img src={Room.src} alt={Room.name} className="img-fluid" />
                        </a> 
                      </div>
                      <div className="service-content p-4">
                        <div className="day-book">
                          <ul>
                            <li>{Room.Price}/Night</li>
                            <li style={{cursor:'pointer'}}>Book Now</li>
                          </ul>
                        </div>
                        <h5 className="card-title">{Room.name}</h5>
                        <p className="card-text mt-3 room-pere">{Room.description}</p>
                        <div className="icon">
                          <ul>
                            <li><img src={singleServiceIcon01} className="img-fluid" alt="" /></li>
                             <li><img src={singleServiceIcon02} className="img-fluid" alt="" /></li>
                            <li><img src={singleServiceIcon03} className="img-fluid" alt="" /></li>
                            <li><img src={singleServiceIcon04} className="img-fluid" alt="" /></li>
                            
                          </ul>
                        </div>
                      </div>
                     </div>
            </SwiperSlide>
           ))}


          </Swiper>
         </div>
     </div>

     {/* Resort */}
     <div className="resort my-5 mb-0">
      <div className="container-fluid position-relative">
        <img src={element2} className="element element2 position-absolute" alt="" />
         <div className="row p-0 align-items-center">
            <div className="col-lg-6 image-wrapper p-0">
              <img src={resorts} className="img-fluid shadow-sm resort-img" alt="" />
            </div>
            <div className="col-lg-4 ps-5 pt-3 text-wrapper resort-content">
              <div className="section-title about-title">
                <span>Luxury Hotel & Resort</span>
                <h2>Pearl of The Adriatic</h2>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas neque eveniet numquam explicabo excepturi natus Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae magni explicabo velit error nulla similique ex tenetur optio quam a.</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui tempore eligendi cum odio harum! Reprehenderit?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, illo!lorem10

              </p>
              <button className="btn discover-btn mt-3">DISCOVER MORE</button>
            </div>
         </div>
      </div>
     </div>
     {/* Best Price */}
     <div className="prices my-5 py-5 position-relative">
      <img src={element1} className="element element1 position-absolute" alt="" />
       <img src={element2} className="element element2 position-absolute" alt="" />
       <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="section-title price-title">
              <span>Best Prices</span>
              <h2>Extra Services</h2>
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi adipisci magnam aliquid, libero voluptatem esse soluta fuga, unde impedit possimus natus eligendi? Veniam reprehenderit vel odio, facere nihil minus distinctio.</p>
           <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate dolores voluptates perferendis fugiat unde iure, eaque fuga! Quis sit voluptate minima necessitatibus tempore vero sed blanditiis sunt, ipsum fugit. Expedita?</p>
          </div>
          <div className="col-lg-8">
            <div className="row">
              <div className="col-lg-6">
                <div className="price-box shadow p-4">
                  <div className="price-head">
                    <div className="price-head-text">
                      <h2>Room Cleaning</h2>
                      <p>Perfect for early-stage startups</p>
                    </div>
                    <span>Monthly</span>
                  </div>
                  <h1>$39.99</h1>
                  <p className="mt-4"><img src={checkIcon} alt="" />Lorem ipsum dolor sit amet .</p>
                  <p><img src={checkIcon} alt=""/>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                  <p><img src={checkIcon} alt=""/>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                  <button className="btn price-btn mt-2 w-100">GET STARTED <i className="ri-arrow-right-s-line"></i></button>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="price-box shadow p-4">
                  <div className="price-head">
                    <div className="price-head-text">
                      <h2>Drinks included</h2>
                      <p>Perfect for early-stage startups</p>
                    </div>
                    <span>Monthly</span>
                  </div>
                  <h1>$59.99</h1>
                  <p className="mt-4"><img src={checkIcon} alt="" />Lorem ipsum dolor sit amet .</p>
                  <p><img src={checkIcon} alt=""/>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                  <p><img src={checkIcon} alt=""/>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                  <button className="btn price-btn mt-2 w-100">GET STARTED <i className="ri-arrow-right-s-line"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
       </div>
     </div>
     {/* testimonial */}
     <div className="testimonial-section py-5">
      <div className="container">
        <div className="text-center mb-5">
           <small className="text-uppercase text-warning fw-bold">Testimonial</small>
           <h2 className="fw-bold display-5">What Our Clients Says</h2>
           <p className="text-muted w-75 mx-auto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur reiciendis hic non ipsa nam neque autem aperiam illo laudantium voluptatum!</p>
        </div>
        <Swiper
         modules={[Autoplay]}
           autoplay={{ delay: 3000, disableOnInteraction: false }}
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
         
          breakpoints={{
            1399:{slidesPerView:3},
            1199:{slidesPerView:2},
            911:{slidesPerView:1},
            0:{slidesPerView:1}
          }}
          className="test-swiper">
            {/* {slide 1} */}
            <SwiperSlide>
             <TestimonialCard name="Nick" image={user1} role="client"/>
               </SwiperSlide>
               <SwiperSlide>
              <TestimonialCard name="Kalix" image={user2} role="client"/>
              </SwiperSlide>
              <SwiperSlide>
               <TestimonialCard name="Joe" image={user3} role="client"/>
            </SwiperSlide>
            <SwiperSlide>
             <TestimonialCard name="Nick" image={user1} role="client"/>
               </SwiperSlide>
               <SwiperSlide>
              <TestimonialCard name="Kalix" image={user2} role="client"/>
              </SwiperSlide>
              <SwiperSlide>
               <TestimonialCard name="Joe" image={user3} role="client"/>
            </SwiperSlide>
        </Swiper>
      </div>
     </div>

     {/* Book Room */}
     <div className="py-5 bg-white">
  <div className="container">
    <div className="row align-items-center justify-content-center">
      
      {/* Form Section */}
      <div className="col-lg-6 mb-4 d-flex flex-column">
        <div className="section-title book-title">
          <span>Make Appointment</span>
          <h2>Book A Room</h2>
        </div>
        <form>
          <div className="row mb-3">
            <div className="col-md-6 mb-3">
              <label className="form-label d-flex align-items-center">
                <i className="bi bi-calendar me-2 text-warning">Check in Date</i>
              </label>
              <input type="date" className="form-control p-3" />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label d-flex align-items-center">
                <i className="bi bi-calendar2-check me-2 text-warning">Check out Date</i>
              </label>
              <input type="date" className="form-control p-3" />
            </div>
          </div>
          <div className="row mb-3 mt-4">
            <div className="col-md-6 mb-3">
              <label className="form-label d-flex align-items-center">
                <i className="bi bi-people-fill me-2 text-warning"></i>
                Adults
              </label>
              <select className="form-select p-3">
                <option>Adults</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>3+</option>
              </select>
            </div>
            <div className="col-md-6">
              <label className="form-label d-flex align-items-center">
                <i className="bi bi-door-closed-fill me-2 text-warning"></i>
                Room
              </label>
              <select className="form-select p-3">
                <option>Room</option>
                <option>Single</option>
                <option>Double</option>
                <option>Suites</option>
              </select>
            </div>
          </div>
          <button type="submit" className="btn text-white px-4 py-2 mt-2 w-100">BOOK TABLE NOW</button>
        </form>
      </div>

      {/* Image Section */}
      <div className="col-lg-6 d-flex justify-content-center">
        <img src={bookingImg} className="img-fluid booking-img" alt="" />
      </div>

    </div>
  </div>
       </div>

{/* progress */}

  {/* <div className="container-fluid">
  <div className="row align-items-center">
    
 
    <div className="col-md-6 text-white p-5 bg-dark">
      <p className="text-uppercase small">Rio We Use</p>
      <h2 className="display-5 fw-bold">We Offer Wide<br />Selection of Hotel</h2>
      <p className="mb-4">
        Vestibulum non ornare nunc. Maecenas a metus in est iaculis pretium. Aliquam ullamcorper nibh lacus, ac suscipit ipsum consequat porttitor.
      </p>

      <div className="mb-4">
        <p className="mb-1">
          Quality Production <span className="float-end">80%</span>
        </p>
        <div className="progress">
          <div className="progress-bar bg-warning" style={{ width: "80%" }}></div>
        </div>
      </div>

      <div className="mb-4">
        <p className="mb-1">
          Maintenance Services <span className="float-end">90%</span>
        </p>
        <div className="progress">
          <div className="progress-bar bg-warning" style={{ width: "90%" }}></div>
        </div>
      </div>

      <div>
        <p className="mb-1">
          Product Management <span className="float-end">70%</span>
        </p>
        <div className="progress">
          <div className="progress-bar bg-warning" style={{ width: "70%" }}></div>
        </div>
      </div>
    </div>

   
    <div className="col-md-6 p-0">
      <img
        src={bookingImg}
        alt="Hotel Interior"
        className="img-fluid w-100 h-100 object-fit-cover"
      />
    </div>
  </div>
</div> */}

{/* NEWSLETTER */}
  {/* <div className="container">
    <p className="text-uppercase text-muted small mb-1">News letters</p>
    <h2 className="fw-bold mb-3">Subscribe to our <span className="text-dark">Newsletter</span></h2>
    <p className="text-muted mb-4">With the subscription, enjoy your favourite hotels without having to think about it.</p>

    <form className="d-flex justify-content-center">
      <input
        type="email"
        className="form-control w-50 me-2"
        placeholder="Enter your email address"
      />
      <button type="submit" className="btn btn-brown px-4">Subscribe</button>
    </form>
  </div> */}



     {/* Banner */}
     <div className="banner">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center banner-box">
            <img src={playVideo} className="img-fluid" alt="" />
            <h1>Take A Tour of Luxuri</h1>
          </div>
        </div>
      </div>
     </div>
     {/* Blog */}
     <div className="blog py-5 position-relative">
      <div className="container">
        <img src={element1} className="element element1 position-absolute" alt="" />
        <div className="row">
          <div className="section-title text-center d-flex flex-column align-items-center">
            <span>Our Blog</span>
            <h2>Latest Blog & News</h2>
            <p style={{maxWidth:"800"}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, earum soluta sunt labore aliquid nam, autem nobis ipsum ex ut ducimus amet dolorem assumenda sint dolores sapiente unde necessitatibus optio?
            </p>
          </div>
          <div className="blog-wrapper mt-5">
            <div className="row">        
            <BlogCard image={blogs1}/> 
            <BlogCard image={blogs2}/> 
             <BlogCard image={blogs3}/> 
            
            </div>
          </div>
        </div>
      </div>
     </div>
     {/* Brands */}
     <div className="brand-container position-relative ">
      <div className="container">
        <div className="row">
          <Swiper
            slidesPerView={4}
            spaceBetween={1}
            loop={true}
            autoplay={true}
            breakpoints={{
              1399:{slidesPerView:4},
              768:{slidesPerView:3},
              575:{slidesPerView:2},
              0:{slidesPerView:1},
            }}
            className="brand-swiper w-100"
          >
            <SwiperSlide>
              <div className="brand-img w-100">
                <img src={brand1} className="img-fluid" alt="" />
              </div>
            </SwiperSlide>

             <SwiperSlide>
              <div className="brand-img w-100">
                <img src={brand2} className="img-fluid" alt="" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="brand-img w-100">
                <img src={brand3} className="img-fluid" alt="" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="brand-img w-100">
                <img src={brand4} className="img-fluid" alt="" />
              </div>
            </SwiperSlide>

             <SwiperSlide>
              <div className="brand-img w-100">
                <img src={brand5} className="img-fluid" alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
     </div>
    </>
  );
};

export default Index;
