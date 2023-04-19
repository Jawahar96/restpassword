import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'


const Sidebar = () => {
   
  return (
    <div>
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">


<a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
    <div className="sidebar-brand-icon rotate-n-15">
        <i className="fas fa-laugh-wink"></i>
    </div>
    <div className="sidebar-brand-text mx-3">PORTAL FOR ADMIN 
 
    </div>
</a>


<hr className="sidebar-divider my-0" />


<li className="nav-item active">
    <Link  className="nav-link" to="/dashboard">
        <i className="fas fa-fw fa-tachometer-alt"></i>
        <span>Dashboard</span>
        </Link>
</li>

<li className="nav-item active">

    <Link className="nav-link" to="/users">
        <i className="fas fa-fw fa-tachometer-alt"></i>
        <span>Users</span>
        </Link>

        
</li>














</ul>
    </div>
  )
}

export default Sidebar