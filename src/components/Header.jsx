import React, { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About';
import Jobs from '../pages/Jobs';
import Contact from '../pages/Contact';
import DashboardCompany from '../pages/DashboardCompany';
import DashboardUser from '../pages/DashboardUser';
import EditJob from '../pages/EditJob';
import JobDetails from '../pages/JobDetails';
import Login from "../pages/Login";
import Signup from '../pages/Signup';
import PostJob from "../pages/PostJob";
export default function Header() {
    const routes = [
    { id: 'home', label: 'Home',  path: '/' },
    { id: 'about', label: 'About', path: '/about' },
    { id: 'jobs', label: 'Jobs',  path: '/Jobs' }
  ];
  return (
    <>
        <header className="header">
            <div className='header-wrapper'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='header-content'>
                                <div className='logo'>
                                    <Link to='/'>NextHire</Link>
                                </div>
                                <ul className='main-menu'>
                                    {routes.map((link)=>{
                                        return(
                                            <li key={link.id} className='li-menu-link'>
                                                <Link to={link.path} className='menu-link'>
                                                    <span className="menu-link-text">
                                                        {link.label}
                                                    </span>
                                                </Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

   <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard-company" element={<DashboardCompany />} />
        <Route path="/dashboard-user" element={<DashboardUser />} />
        <Route path="/edit-job/:id" element={<EditJob />} />
        <Route path="/job-details/:id" element={<JobDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/post-job" element={<PostJob />} />
        <Route path="/Jobs" element={<Jobs />} />
    </Routes>

    </>
  )
}

