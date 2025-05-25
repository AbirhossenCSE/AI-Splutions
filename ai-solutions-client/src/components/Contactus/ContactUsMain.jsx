import React from 'react';
import img1 from '../../assets/Banner/contact.png';

const ContactUsMain = () => {
    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-10">
            <div className="bg-white rounded-xl shadow-lg max-w-[1800px] mx-auto w-full p-6 md:p-10 mt-20">
                
                {/* Centered Heading */}
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 text-center mb-10">
                    Contact Us
                </h2>

                <div className="grid md:grid-cols-2 gap-10 p-10">
                    {/* Left: Form */}
                    <form className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="First Name"
                                className="border border-gray-300 rounded-md px-4 py-2 w-full"
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="border border-gray-300 rounded-md px-4 py-2 w-full"
                            />
                        </div>

                        <input
                            type="email"
                            placeholder="youname@gmail.com"
                            className="border border-gray-300 rounded-md px-4 py-2 w-full"
                        />
                        <input
                            type="text"
                            placeholder="Company name"
                            className="border border-gray-300 rounded-md px-4 py-2 w-full"
                        />
                        <input
                            type="text"
                            placeholder="Company Industry"
                            className="border border-gray-300 rounded-md px-4 py-2 w-full"
                        />

                        <select className="border border-gray-300 rounded-md px-4 py-2 w-full">
                            <option>Service</option>
                            <option>Support</option>
                            <option>Partnership</option>
                        </select>

                        <textarea
                            placeholder="Write your message"
                            className="border border-gray-300 rounded-md px-4 py-2 w-full h-32 resize-none"
                        ></textarea>

                        <button
                            type="submit"
                            className="bg-gradient-to-r from-pink-400 to-purple-400 text-white py-3 px-6 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300"
                        >
                            Requested for a demo →
                        </button>
                    </form>

                    {/* Right: Image */}
                    <div className="flex justify-center items-center">
                        <img
                            src={img1}
                            alt="Contact Robot"
                            className="rounded-xl w-full max-w-sm object-cover shadow-md"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUsMain;
