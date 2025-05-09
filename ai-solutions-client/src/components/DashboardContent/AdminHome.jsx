import React from 'react';
import useAuth from '../../hooks/useAuth';

const AdminHome = () => {
    const { user } = useAuth() || {};
    console.log(user);


    const userInfo = user;

    return (
        <div className=" bg-gray-100 flex p-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-2xl">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Admin Dashboard</h1>
                <div className="border rounded-xl p-6 bg-gradient-to-r from-orange-100 to-orange-50">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">User Information</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
                        <div>
                            <span className="font-medium">User ID:</span>
                            <p className="break-all">{userInfo?._id}</p>
                        </div>
                        <div>
                            <span className="font-medium">Name:</span>
                            <p>{userInfo?.displayName
                            }</p>
                        </div>
                        <div>
                            <span className="font-medium">Email:</span>
                            <p>{userInfo?.email}</p>
                        </div>
                        <div>
                            <span className="font-medium">Role:</span>
                            <p className="capitalize">{userInfo?.role}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;
