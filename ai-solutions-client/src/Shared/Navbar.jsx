import { ArrowRight } from 'lucide-react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Navbar = () => {
    const { user, signOutUser } = useAuth();
    const location = useLocation();

    const handleSignOut = () => {
        signOutUser()
            .then(() => console.log('Sign out successful'))
            .catch(() => console.log('Sign out failed'));
    };

    const activeClass =
        "bg-gradient-to-r from-[rgba(241,165,145,1)] to-[rgba(233,119,217,1)] text-white px-4 py-2 rounded-full font-semibold";
    const defaultClass =
        "px-4 py-2 text-gray-800 hover:text-black hover:bg-gray-200 rounded-full";

    const links = [
        <li key="home">
            <Link
                to="/"
                className={location.pathname === "/" ? activeClass : defaultClass}
            >
                Home
            </Link>
        </li>,
        <li key="about">
            <Link
                to="/about"
                className={location.pathname === "/about" ? activeClass : defaultClass}
            >
                About
            </Link>
        </li>,
        <li key="blog">
            <Link
                to="/blog"
                className={location.pathname === "/blog" ? activeClass : defaultClass}
            >
                Blog
            </Link>
        </li>,
        <li key="services">
            <Link
                to="/services"
                className={location.pathname === "/services" ? activeClass : defaultClass}
            >
                Services
            </Link>
        </li>,
        <li key="contact">
            <Link
                to="/contact"
                className={location.pathname === "/contact" ? activeClass : defaultClass}
            >
                Contact
            </Link>
        </li>
    ];

    return (
        <div className="fixed max-w-7xl mx-auto top-0 left-0 right-0 z-50 bg-base-100 shadow-sm rounded-b-xl">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost text-xl">AI Solutions</Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">{links}</ul>
                </div>

                <div className="navbar-end">
                    {user && (
                        <Link className="py-2 px-4 bg-base-300 rounded-3xl mr-4" to="/dashboard/adminHome">
                            Dashboard
                        </Link>
                    )}

                    {user ? (
                        <button
                            onClick={handleSignOut}
                            className="py-2 px-4 bg-base-300 rounded-3xl mr-4"
                        >
                            Sign Out
                        </button>
                    ) : (
                        <Link className="py-2 px-4 bg-base-300 rounded-3xl mr-4" to="/login">
                            Sign-In
                        </Link>
                    )}

                    <Link
                        to="/demo"
                        className="bg-gradient-to-r from-[rgba(241,165,145,1)] to-[rgba(233,119,217,1)] text-white md:px-8 md:py-3 px-2 py-1 flex items-center gap-2 rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-200"
                    >
                        Request for demo <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
