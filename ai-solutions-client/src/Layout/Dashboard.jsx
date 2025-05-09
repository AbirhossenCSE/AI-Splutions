import React, { useState } from "react";
import { FaHome, FaUsers, FaEnvelope, FaMoneyBill, FaEllipsisV } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Dashboard = () => {

    const { user } = useAuth();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="flex">
            {/* for Small Devices */}
            <div className="sm:hidden fixed top-4 left-4 z-50">
                <button
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="text-gray-800 p-2 rounded-full bg-gray-100 shadow-md"
                >
                    <FaEllipsisV size={24} />
                </button>
            </div>

            {/* Dashboard Sidebar */}
            <div
                className={`fixed pt-2 sm:relative z-40 bg-gray-800 text-white min-h-screen w-64 transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } sm:translate-x-0`}
            > 
                <ul className="menu p-4">
                    {/* Shared NavLinks */}
                    <h1 className="text-2xl">Admin Route</h1>
                    <li>
                        <NavLink
                            to="/dashboard/adminHome"
                            className={({ isActive }) => isActive ? 'text-red-500 font-semibold' : 'text-white'}
                        >
                            <FaHome /> Admin Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboard/addProduct"
                            className={({ isActive }) => isActive ? 'text-red-500 font-semibold' : 'text-white'}
                        >
                            <FaHome /> Add Product
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboard/manageProduct"
                            className={({ isActive }) => isActive ? 'text-red-500 font-semibold' : 'text-white'}
                        >
                            <FaHome /> Manage Product
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboard/demoRequest"
                            className={({ isActive }) => isActive ? 'text-red-500 font-semibold' : 'text-white'}
                        >
                            <FaHome /> Demo Request
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboard/manageServices"
                            className={({ isActive }) => isActive ? 'text-red-500 font-semibold' : 'text-white'}
                        >
                            <FaHome /> Manage Services
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboard/ContactUsMessage"
                            className={({ isActive }) => isActive ? 'text-red-500 font-semibold' : 'text-white'}
                        >
                            <FaHome /> Contact Us Message
                        </NavLink>
                    </li>
                    <div className="divider"></div>
                    <div className="text-2xl">User Route</div>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => isActive ? 'text-red-500 font-semibold' : 'text-white'}
                        >
                            <FaHome /> Home
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* Overlay to close sidebar on small devices */}
            {isSidebarOpen && (
                <div
                    onClick={() => setIsSidebarOpen(false)}
                    className="fixed inset-0 bg-black opacity-50 z-30 sm:hidden"
                ></div>
            )}

            {/* Dashboard Content */}
            <div className="flex-1 p-4">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
