import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const OurProduct = () => {
    return (
        <div id='product' className="max-w-7xl mx-auto ">
            <div className="container mx-auto px-4">
                {/* Main Heading */}
                <div className="text-center mb-12 pt-10">
                    <span className="text-xs uppercase text-gray-500 bg-base-300 px-3 py-1 rounded-full shadow-sm">Our Product</span>
                    <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-gray-800 leading-snug">
                        Meet Our Flagship AI Product
                    </h2>
                    <p className="mt-4 text-gray-600">
                        Our modular AI platform brings together drafting tools, chatbots, voice-based services,
                        and intelligent agents in a single ecosystem.
                    </p>
                </div>

                {/* Section Template */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                    {/* Image */}
                    <div className="bg-white rounded-xl p-2 h-full">
                        <img
                            src="https://placehold.co/600x400"
                            alt="AI Petition Drafter"
                            className="rounded-lg shadow-lg h-full w-full object-cover"
                        />
                    </div>
                    {/* Content */}
                    <div className="bg-white p-6 rounded-xl h-full flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">AI Petition Drafter</h3>
                            <p className="text-gray-600 mb-6">
                                Polymer is built with productivity at its heart and is loaded with features to help
                                you hire more effectively. It's quick to learn, easy to navigate, and empowering to use.
                            </p>
                            <ul className="list-none space-y-2">
                                {[
                                    "Flexible applicant tracking",
                                    "Customizable workflows",
                                    "Rich candidate profiles",
                                    "Built-in candidate messaging",
                                    "Bulk messaging",
                                    "Message templates",
                                    "Shared notes & documentation",
                                ].map((text, index) => (
                                    <li key={index} className="flex items-center gap-2">
                                        <CheckCircle className="h-5 w-5 text-green-500" />
                                        <span className="text-gray-700">{text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <button className="bg-gradient-to-r from-[rgba(241,165,145,1)] to-[rgba(233,119,217,1)] text-white px-8 py-3 flex items-center gap-2 rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-200 self-start mt-4">
                            Request for demo <ArrowRight className="h-4 w-4" />
                        </button>
                    </div>
                </div>

                {/* Second Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch mt-16">
                    {/* Content */}
                    <div className="bg-white p-6 rounded-xl h-full flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Chatbot AI Agent</h3>
                            <p className="text-gray-600 mb-6">
                                Polymer is built with productivity at its heart and is loaded with features to help
                                you hire more effectively. It's quick to learn, easy to navigate, and empowering to use.
                            </p>
                            <ul className="list-none space-y-2">
                                {[
                                    "Flexible applicant tracking",
                                    "Customizable workflows",
                                    "Rich candidate profiles",
                                    "Built-in candidate messaging",
                                    "Bulk messaging",
                                    "Message templates",
                                    "Shared notes & documentation",
                                ].map((text, index) => (
                                    <li key={index} className="flex items-center gap-2">
                                        <CheckCircle className="h-5 w-5 text-green-500" />
                                        <span className="text-gray-700">{text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <button className="bg-gradient-to-r from-[rgba(241,165,145,1)] to-[rgba(233,119,217,1)] text-white px-8 py-3 flex items-center gap-2 rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-200 self-start mt-4">
                            Request for demo <ArrowRight className="h-4 w-4" />
                        </button>
                    </div>
                    {/* Image */}
                    <div className="bg-white rounded-xl p-2 h-full">
                        <img
                            src="https://placehold.co/600x400"
                            alt="Chatbot AI Agent"
                            className="rounded-lg shadow-lg h-full w-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurProduct;
