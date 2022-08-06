import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="topHeader" id="fixed-header">
    <div className="container">
    <nav className="navbar navbar-expand-lg ">
       <div className="navbar-inner-box d-flex justify-content-between">
          <div className="nav-L">
             <Link to="#" className="navbar-brand desktop-view-logo" href="#"><img src={require("../../assets/images/logo.png")} alt='logo' /></Link>
             <Link to="#" className="navbar-brand mob-logo-view " style={{display:"none"}} href="#"><img src={require("../../assets/images/bg-banner.png")} alt="logo" /></Link>
          </div>
          <div className="nav-R">
             <Link to="/register" className="btn btn-register hvr-sweep-to-right">Register</Link>
          </div>
        </div>
    </nav>
    </div>
 </header>
  )
}

export default Navbar