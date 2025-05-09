import React, { useEffect, useState } from 'react';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import { Trash2 } from 'lucide-react';

const DemoRequest = () => {
    const axiosPublic = useAxiosPublic();
    const [requests, setRequests] = useState([]);

    const fetchRequests = async () => {
        try {
            const res = await axiosPublic.get('/demo-requests');
            setRequests(res.data);
        } catch (error) {
            console.error('Error fetching demo requests:', error);
        }
    };

    useEffect(() => {
        fetchRequests();
    }, []);

    const handleStatusChange = async (id, newStatus) => {
        try {
            const res = await axiosPublic.patch(`/demo-requests/${id}`, { status: newStatus });
            if (res.data.modifiedCount > 0) {
                Swal.fire({
                    icon: 'success',
                    title: 'Status Updated',
                    toast: true,
                    position: 'top-end',
                    timer: 2000,
                    showConfirmButton: false,
                });
                fetchRequests();
            }
        } catch (error) {
            console.error('Failed to update status:', error);
        }
    };

    const handleDelete = async (id) => {
        const confirm = await Swal.fire({
            title: 'Are you sure?',
            text: "This request will be deleted permanently!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#e3342f',
            cancelButtonColor: '#6c757d',
            confirmButtonText: 'Yes, delete it!',
        });

        if (confirm.isConfirmed) {
            try {
                const res = await axiosPublic.delete(`/demo-requests/${id}`);
                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'The demo request has been removed.',
                        toast: true,
                        position: 'top-end',
                        timer: 2000,
                        showConfirmButton: false,
                    });
                    fetchRequests();
                }
            } catch (error) {
                console.error('Failed to delete request:', error);
            }
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Demo Requests</h2>
            <div className="overflow-x-auto rounded-xl shadow-md border border-gray-200">
                <table className="table w-full text-sm text-left">
                    <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
                        <tr>
                            <th className="py-3 px-4">#</th>
                            <th className="py-3 px-4">Product</th>
                            <th className="py-3 px-4">Name</th>
                            <th className="py-3 px-4">Email</th>
                            <th className="py-3 px-4">Phone</th>
                            <th className="py-3 px-4">Applied On</th>
                            <th className="py-3 px-4">Status</th>
                            <th className="py-3 px-4">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {requests.map((req, idx) => (
                            <tr key={req._id} className="hover:bg-gray-50 border-t">
                                <td className="py-3 px-4">{idx + 1}</td>
                                <td className="py-3 px-4 font-medium text-gray-800">{req.productName}</td>
                                <td className="py-3 px-4">{req.name}</td>
                                <td className="py-3 px-4">{req.email}</td>
                                <td className="py-3 px-4">{req.phone}</td>
                                <td className="py-3 px-4">{new Date(req.timestamp).toLocaleDateString()}</td>
                                <td className="py-3 px-4">
                                    <select
                                        value={req.status}
                                        onChange={(e) => handleStatusChange(req._id, e.target.value)}
                                        className="border border-gray-300 rounded px-2 py-1 bg-white shadow-sm focus:outline-none"
                                    >
                                        <option value="applied">Applied</option>
                                        <option value="done">Done</option>
                                        <option value="rejected">Rejected</option>
                                    </select>
                                </td>
                                <td className="py-3 px-4">
                                    <button
                                        onClick={() => handleDelete(req._id)}
                                        className="text-red-500 hover:text-red-700 transition-all tooltip"
                                        data-tip="Delete"
                                    >
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {requests.length === 0 && (
                            <tr>
                                <td colSpan="8" className="text-center py-6 text-gray-500">
                                    No demo requests found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DemoRequest;
