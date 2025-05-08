import React, { useEffect, useState } from "react";
import { FaHome, FaUsers, FaEnvelope, FaMoneyBill, FaEllipsisV } from "react-icons/fa";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const Dashboard = () => {

    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);


    return (
        <div className="flex">
            {/* for Small Devices */}
            <div className="sm:hidden fixed top-4 left-4 z-50">
                <button
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="text-orange-500 p-2 rounded-full bg-gray-100 shadow-md"
                >
                    <FaEllipsisV size={24} />
                </button>
            </div>

            {/* Dashboard Sidebar */}
            <div
                className={`fixed sm:relative z-40 bg-orange-400 text-white min-h-screen w-64 transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } sm:translate-x-0`}
            >
                <ul className="menu p-4">
                    {/* Shared NavLinks */}
                    <li>
                        <NavLink to="/dashboard/adminHome">
                            <FaHome /> Admin Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/addProduct">
                            <FaHome /> Add Product
                        </NavLink>
                    </li>
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
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
