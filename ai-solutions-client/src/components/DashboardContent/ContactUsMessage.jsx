import React, { useEffect, useState } from 'react';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const ContactUsMessage = () => {
    const axiosPublic = useAxiosPublic();
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        axiosPublic.get('/contact')
            .then(res => setMessages(res.data))
            .catch(err => console.error('Failed to fetch messages:', err));
    }, [axiosPublic]);

    return (
        <div className="py-16 bg-gray-50 min-h-screen">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-10">
                    Contact Messages
                </h2>

                <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
                    <table className="w-full table-auto text-left text-sm text-gray-700">
                        <thead className="bg-gray-200 text-gray-700 uppercase tracking-wide">
                            <tr>
                                <th className="px-6 py-3">Name</th>
                                <th className="px-6 py-3">Email</th>
                                <th className="px-6 py-3">Phone</th>
                                <th className="px-6 py-3">Address</th>
                                <th className="px-6 py-3">Message</th>
                            </tr>
                        </thead>
                        <tbody>
                            {messages.length > 0 ? (
                                messages.map((msg, index) => (
                                    <tr
                                        key={index}
                                        className="border-b hover:bg-gray-50 transition-colors"
                                    >
                                        <td className="px-6 py-4 font-medium">{msg.name}</td>
                                        <td className="px-6 py-4">{msg.email}</td>
                                        <td className="px-6 py-4">{msg.number}</td>
                                        <td className="px-6 py-4">{msg.address}</td>
                                        <td className="px-6 py-4">{msg.message}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className="text-center py-6 text-gray-500">
                                        No messages found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ContactUsMessage;
