import React from 'react';
import { Link } from "react-router-dom"


const Navbar = () => {
  return (

    <div className='nav'>
        <div className='search-container'>
        <input className='search-box' type="text" placeholder="Enter Roll No" /> <button>Search</button>
      </div>
      
      <h2>NEC Tracker</h2>

  

      <div>
        <Link style={{ textDecoration: 'none' }} to="/Events"><p>Events</p></Link>
        <Link style={{ textDecoration: 'none' }} to="/Fys"><p>1st Year</p></Link>
        <Link style={{ textDecoration: 'none' }} to="/Sys"><p>2nd Year</p></Link>
        <Link style={{ textDecoration: 'none' }} to="/Tys"><p>3rd Year</p></Link>
      </div>
    </div>

  )
}

export default Navbar