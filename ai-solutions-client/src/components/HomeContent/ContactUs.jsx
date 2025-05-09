import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Dialog } from '@headlessui/react';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const ContactUs = () => {
    const axiosPublic = useAxiosPublic();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        address: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axiosPublic.post('/contact', formData);
            if (res.data.insertedId) {
                Swal.fire({
                    toast: true,
                    position: 'top-end',
                    icon: 'success',
                    title: 'Message submitted!',
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                });
                setFormData({ name: '', email: '', number: '', address: '', message: '' });
                setIsModalOpen(false);
            }
        } catch (error) {
            console.error('Submission failed:', error);
        }
    };

    return (
        <div id="contact" className="bg-gray-100 py-20 md:py-10">
            <div className="container mx-auto px-4 text-center">
                {/* Header */}
                <div className="mb-8 md:mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        Have a question or want to collaborate?
                    </h2>
                    <p className="text-gray-600 mt-2">
                        Reach out and our team will get back to you.
                    </p>
                    <p className="text-gray-500 text-sm mt-4">
                        That’s how fast it is to get started on Plain. And yes, we've timed it.
                    </p>
                </div>

                {/* Buttons */}
                <div className="flex justify-center gap-6">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-gradient-to-r from-[rgba(241,165,145,1)] to-[rgba(233,119,217,1)] text-white px-8 py-3 flex items-center gap-2 rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-200"
                    >
                        Contact Us <ArrowRight className="h-4 w-4" />
                    </button>

                    <button className="bg-white text-purple-500 px-8 py-3 border border-purple-500 hover:bg-purple-50 hover:text-purple-600 flex items-center gap-2 rounded-3xl transition-colors duration-200">
                        Request for a Demo
                    </button>
                </div>
            </div>

            {/* Contact Modal */}
            <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)} className="relative z-50">
                <div className="fixed inset-0 bg-opacity-40 backdrop-blur-sm transition-opacity" aria-hidden="true" />
                <div className="fixed inset-0 flex items-center justify-center p-4">
                    <Dialog.Panel className="bg-white w-full max-w-lg rounded-2xl p-6 shadow-2xl space-y-6 transition-all duration-300">
                        <Dialog.Title className="text-2xl font-semibold text-gray-800 text-center">
                            Send Us a Message
                        </Dialog.Title>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    className="border px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
                                    required
                                />
                                <input
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email"
                                    className="border px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
                                    required
                                />
                                <input
                                    name="number"
                                    value={formData.number}
                                    onChange={handleChange}
                                    placeholder="Phone Number"
                                    className="border px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
                                    required
                                />
                                <input
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    placeholder="Address"
                                    className="border px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
                                    required
                                />
                            </div>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your message..."
                                rows={4}
                                className="w-full border px-4 py-2 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-300"
                                required
                            ></textarea>
                            <div className="flex justify-end gap-2">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="px-4 py-2 text-gray-700 border border-gray-300 rounded-3xl hover:bg-gray-100"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-white text-purple-500 px-8 py-3 border border-purple-500 hover:bg-purple-50 hover:text-purple-600 rounded-3xl transition-all duration-200"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </div>
    );
};

export default ContactUs;
