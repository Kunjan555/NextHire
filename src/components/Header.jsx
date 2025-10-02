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
import { Search, User, Menu, X } from 'lucide-react';
export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 'home', label: 'Home', path: '/' },
        { id: 'about', label: 'About', path: '/about' },
        { id: 'jobs', label: 'Jobs', path: '/Jobs' }
    ];
    return (
        <>
            <header className="bg-white shadow-md sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">

                        <div className="flex-shrink-0">
                            <h1 className="text-2xl font-bold text-blue-600">NextHire</h1>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-8">

                            {routes.map((link) => {
                                return (
                                    <li key={link.id} className='inline-block'>
                                        <Link
                                            to={link.path}
                                            className='inline-block px-6 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300'
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                )
                            })}
                        </nav>

                        {/* Search Bar - Desktop */}
                        <div className="hidden md:flex flex-1 max-w-md mx-8">
                            <div className="relative w-full">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Search className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Search jobs..."
                                />
                            </div>
                        </div>

                        {/* User Profile - Desktop */}
                        <div className="hidden md:flex items-center relative">
                            <button onClick={() => setOpen(!open)} className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                                <User className="h-5 w-5" />
                                <span className="font-medium">Profile</span>
                            </button>
                            {open && (
                                <div className="absolute right-0 top-full mt-2 w-40 bg-white shadow-lg rounded-lg border">
                                    <ul className="py-2 text-sm text-gray-700">
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100">My Account</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Settings</a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 hover:bg-gray-100"
                                            >
                                                Logout
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            )}

                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="p-2 rounded-lg text-gray-600 hover:bg-gray-100"
                            >
                                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="md:hidden border-t border-gray-200 py-3">
                            <div className="space-y-3">
                                {/* Mobile Search */}
                                <div className="relative px-2">
                                    <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
                                        <Search className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="text"
                                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg"
                                        placeholder="Search jobs..."
                                    />
                                </div>

                                {/* Mobile Navigation */}
                                <div className="space-y-1 px-2">
                                    {routes.map((link) => {
                                        return (
                                            <li key={link.id} className="list-none">
                                                <Link
                                                    to={link.path}
                                                    className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg font-medium"
                                                >
                                                    {link.label}
                                                </Link>
                                            </li>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    )}
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

