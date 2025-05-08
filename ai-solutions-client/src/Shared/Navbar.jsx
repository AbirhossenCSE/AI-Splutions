import { ArrowRight } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Navbar = () => {
    const [activeId, setActiveId] = useState('home');
    const { user, signOutUser } = useAuth();

    const handleSignOut = () => {
        signOutUser()
            .then(() => console.log('Sign out successful'))
            .catch(() => console.log('Sign out failed'));
    };

    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setActiveId(id);
        }
    };

    const sectionIds = ['home', 'about', 'services', 'product', 'contact'];

    useEffect(() => {
        const handleScrollSpy = () => {
            const scrollY = window.scrollY + 100;
            for (const id of sectionIds) {
                const section = document.getElementById(id);
                if (section) {
                    const offsetTop = section.offsetTop;
                    const offsetHeight = section.offsetHeight;
                    if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
                        setActiveId(id);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScrollSpy);
        return () => window.removeEventListener('scroll', handleScrollSpy);
    }, []);

    const getLinkClass = (id) =>
        activeId === id
            ? "bg-gradient-to-r from-[rgba(241,165,145,1)] to-[rgba(233,119,217,1)] text-white px-4 py-2 rounded-full font-semibold"
            : "px-4 py-2 text-gray-800 hover:text-white hover:bg-gray-200 rounded-full";

    const links = sectionIds.map((id) => (
        <li key={id}>
            <Link to="/" onClick={() => handleScroll(id)} className={getLinkClass(id)}>
                {id.charAt(0).toUpperCase() + id.slice(1)}
            </Link>
        </li>
    ));

    return (
        <div className="fixed top-0 left-0 right-0 z-50 bg-base-100 shadow-sm rounded-b-xl px-6 md:px-20">
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
                    <a className="btn btn-ghost text-xl">AI Solutions</a>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">{links}</ul>
                </div>

                <div className="navbar-end">
                    {user && (
                        <Link className="py-2 px-4 bg-base-300 rounded-3xl mr-4" to="/dashboard">
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

                    <button className="bg-gradient-to-r from-[rgba(241,165,145,1)] to-[rgba(233,119,217,1)] text-white md:px-8 md:py-3 px-2 py-1 flex items-center gap-2 rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-200">
                        Request for demo <ArrowRight className="h-4 w-4" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
