import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg position-fixed'>
     <div className='container-fluid px-5'>
        <p className='navbar-brand d-flex align-items-center m-0' >
            <Link to="/" className='logo'>Luxe <span>Hub</span></Link>
        </p>
       <button
  className="navbar-toggler text-white"
  type="button"
  data-bs-toggle="collapse"
  data-bs-target="#navbarNav"     
  aria-controls="navbarNav"
  aria-expanded="false"
  aria-label="Toggle navigation"
>
  <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse py-10 justify-content-center" id='navbarNav'>
            <ul className='menu navbar-nav  p-4 align-items-center gap-4'>
                <li className='nav-item '><Link to="/home">Home</Link></li>
                 <li className='nav-item'><Link to="/about">About</Link></li>
                  <li className='nav-item'><Link to="/rooms">Our Rooms</Link></li>
                   <li className='nav-item'><Link to="/facilities">Facilities</Link></li>
                    <li className='nav-item'><Link to="/blog">Blog</Link></li>
                     <li className='nav-item'><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
     </div>
     <button className='btn rounded nav-btn'>RESERVATION</button>
      </nav>
    </div>
  )
}

export default Nav
