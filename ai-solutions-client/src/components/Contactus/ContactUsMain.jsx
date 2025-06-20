import React from 'react';
import img1 from '../../assets/Banner/contact.png';

const ContactUsMain = () => {
    return (
        <div className="flex items-center justify-center mt-12">
            <div className="bg-[#FFFFFF] rounded-2xl shadow-2lg max-w-[1800px] mx-auto w-full p-4 md:p-10">
                {/* Heading */}
                <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-10">
                    Get a Quote
                </h2>

                <div className="grid md:grid-cols-2 gap-10 md:px-10">
                    {/* Left: Form */}
                    <form className="space-y-5">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col">
                                <label className="text-sm font-medium text-gray-700 mb-1">First Name</label>
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="border border-gray-300 rounded-md px-4 py-2 w-full placeholder:text-gray-500"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-sm font-medium text-gray-700 mb-1">Last Name</label>
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="border border-gray-300 rounded-md px-4 py-2 w-full placeholder:text-gray-500"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <label className="text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                placeholder="yourname@email.com"
                                className="border border-gray-300 rounded-md px-4 py-2 w-full placeholder:text-gray-500"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-sm font-medium text-gray-700 mb-1">Company Name</label>
                            <input
                                type="text"
                                placeholder="Company name"
                                className="border border-gray-300 rounded-md px-4 py-2 w-full placeholder:text-gray-500"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-sm font-medium text-gray-700 mb-1">Company Industry</label>
                            <input
                                type="text"
                                placeholder="Company Industry"
                                className="border border-gray-300 rounded-md px-4 py-2 w-full placeholder:text-gray-500"
                            />
                        </div>

                        {/* Services Checkboxes */}
                        <div>
                            <p className="font-medium text-gray-700 mb-2">What services are you interested in? *</p>
                            <div className="space-y-2">
                                <label className="flex items-center space-x-2 text-gray-800">
                                    <input type="checkbox" className="w-4 h-4 text-pink-500" />
                                    <span>AI Petition Drafter</span>
                                </label>
                                <label className="flex items-center space-x-2 text-gray-800">
                                    <input type="checkbox" className="w-4 h-4 text-pink-500" />
                                    <span>Chatbot & Assistants</span>
                                </label>
                                <label className="flex items-center space-x-2 text-gray-800">
                                    <input type="checkbox" className="w-4 h-4 text-pink-500" />
                                    <span>Real Estate AI Solutions</span>
                                </label>
                                <label className="flex items-center space-x-2 text-gray-800">
                                    <input type="checkbox" className="w-4 h-4 text-pink-500" />
                                    <span>AI Agent & Task Automation</span>
                                </label>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <label className="text-sm font-medium text-gray-700 mb-1">Message</label>
                            <textarea
                                placeholder="Write your message"
                                className="border border-gray-300 rounded-lg px-4 py-2 w-full h-32 resize-none placeholder:text-gray-500"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="bg-gradient-to-r from-[rgba(241,165,145,1)] to-[rgba(233,119,217,1)] text-white py-3 px-6 rounded-full text-lg font-medium hover:shadow-lg transition-all duration-300"
                        >
                            Get a Quote →
                        </button>
                    </form>

                    {/* Right: Image */}
                    <div className="flex justify-center items-center">
                        <img
                            src={img1}
                            alt="Contact Robot"
                            className="rounded-xl md:w-[706px] md:h-[712px] object-cover shadow-md"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUsMain;
