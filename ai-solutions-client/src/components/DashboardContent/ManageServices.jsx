import React, { useEffect, useState } from 'react';
import { Pencil, Trash2, Plus } from 'lucide-react';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { Dialog } from '@headlessui/react';
import Swal from 'sweetalert2';

const ManageServices = () => {
    const axiosPublic = useAxiosPublic();
    const [services, setServices] = useState([]);
    const [newService, setNewService] = useState({ title: '', description: '', icon: '' });
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [editService, setEditService] = useState(null);

    useEffect(() => {
        fetchServices();
    }, []);

    const fetchServices = async () => {
        try {
            const res = await axiosPublic.get('/services');
            setServices(res.data);
        } catch (error) {
            console.error('Error fetching services:', error);
        }
    };

    const handleAddService = async () => {
        try {
            const res = await axiosPublic.post('/services', newService);
            if (res.data.insertedId) {
                fetchServices();
                setNewService({ title: '', description: '', icon: '' });
            }
        } catch (error) {
            console.error('Error adding service:', error);
        }
    };

    const handleDelete = async (id) => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: 'This service will be permanently deleted!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
        });

        if (result.isConfirmed) {
            try {
                await axiosPublic.delete(`/services/${id}`);
                fetchServices();
                Swal.fire('Deleted!', 'The service has been deleted.', 'success');
            } catch (error) {
                Swal.fire('Error!', 'Failed to delete the service.', 'error');
                console.error('Error deleting service:', error);
            }
        }
    };


    const openEditModal = (service) => {
        setEditService(service);
        setIsEditOpen(true);
    };

    const handleUpdate = async () => {
        try {
            await axiosPublic.put(`/services/${editService._id}`, editService);
            setIsEditOpen(false);
            fetchServices();
            Swal.fire({
                toast: true,
                position: 'top-end',
                icon: 'success',
                title: 'The service has been updated successfully.',
                showConfirmButton: false,
                timer: 2000,
            });
        } catch (error) {
            Swal.fire('Error!', 'Failed to update the service.', 'error');
            console.error('Error updating service:', error);
        }
    };


    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8">Manage Services</h2>

            <div className="overflow-x-auto rounded-xl shadow-lg bg-white border">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-100 text-gray-700 text-sm uppercase">
                        <tr>
                            <th className="px-6 py-4 text-left">Title</th>
                            <th className="px-6 py-4 text-left">Description</th>
                            <th className="px-6 py-4 text-left">Icon</th>
                            <th className="px-6 py-4 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-800 divide-y divide-gray-200">
                        {services.map((service) => (
                            <tr key={service._id} className="hover:bg-gray-50 transition">
                                <td className="px-6 py-4">{service.title}</td>
                                <td className="px-6 py-4">{service.description}</td>
                                <td className="px-6 py-4">{service.icon}</td>
                                <td className="px-6 py-4 text-center flex justify-center gap-4">
                                    <button
                                        onClick={() => openEditModal(service)}
                                        className="text-blue-600 hover:text-blue-800"
                                    >
                                        <Pencil size={20} />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(service._id)}
                                        className="text-red-600 hover:text-red-800"
                                    >
                                        <Trash2 size={20} />
                                    </button>
                                </td>
                            </tr>
                        ))}

                        {/* Add Service Row */}
                        <tr className="bg-gray-50">
                            <td className="px-6 py-3">
                                <input
                                    type="text"
                                    value={newService.title}
                                    onChange={(e) => setNewService({ ...newService, title: e.target.value })}
                                    placeholder="Add New Title"
                                    className="w-full border px-3 py-2 rounded-md text-sm focus:outline-none focus:ring focus:ring-blue-200"
                                />
                            </td>
                            <td className="px-6 py-3">
                                <input
                                    type="text"
                                    value={newService.description}
                                    onChange={(e) => setNewService({ ...newService, description: e.target.value })}
                                    placeholder="Add Description"
                                    className="w-full border px-3 py-2 rounded-md text-sm focus:outline-none focus:ring focus:ring-blue-200"
                                />
                            </td>
                            <td className="px-6 py-3">
                                <input
                                    type="text"
                                    value={newService.icon}
                                    onChange={(e) => setNewService({ ...newService, icon: e.target.value })}
                                    placeholder="Add Icon name"
                                    className="w-full border px-3 py-2 rounded-md text-sm focus:outline-none focus:ring focus:ring-blue-200"
                                />
                            </td>
                            <td className="px-6 py-3 text-center">
                                <button
                                    onClick={handleAddService}
                                    className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-md"
                                >
                                    Add
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Edit Modal */}
            <Dialog open={isEditOpen} onClose={() => setIsEditOpen(false)} className="relative z-50">
                {/* Updated overlay */}
                <div className="fixed inset-0 bg-white/30 backdrop-blur-sm" aria-hidden="true" />

                <div className="fixed inset-0 flex items-center justify-center p-4">
                    <Dialog.Panel className="bg-white max-w-md w-full rounded-xl p-6 shadow-xl space-y-4">
                        <Dialog.Title className="text-xl font-semibold text-gray-800">Edit Service</Dialog.Title>

                        <input
                            type="text"
                            value={editService?.title || ''}
                            onChange={(e) => setEditService({ ...editService, title: e.target.value })}
                            placeholder="Title"
                            className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                        />
                        <input
                            type="text"
                            value={editService?.description || ''}
                            onChange={(e) => setEditService({ ...editService, description: e.target.value })}
                            placeholder="Description"
                            className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                        />
                        <input
                            type="text"
                            value={editService?.icon || ''}
                            onChange={(e) => setEditService({ ...editService, icon: e.target.value })}
                            placeholder="Icon"
                            className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                        />

                        <div className="flex justify-end gap-3 pt-2">
                            <button
                                onClick={() => setIsEditOpen(false)}
                                className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-100"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleUpdate}
                                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                            >
                                Save Changes
                            </button>
                        </div>
                    </Dialog.Panel>
                </div>
            </Dialog>

        </div>
    );
};

export default ManageServices;
