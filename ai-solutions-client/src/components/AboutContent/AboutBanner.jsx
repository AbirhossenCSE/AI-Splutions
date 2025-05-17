import React from 'react';
import { FaHandPeace } from 'react-icons/fa';
import imgrob from '../../assets/Banner/b-1.webp'
import { ArrowRight } from 'lucide-react';

const AboutBanner = () => {
    return (
        <div className="bg-[#f9f9f9] max-w-7xl mx-auto pt-24 pb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 bg-white p-8 rounded-xl shadow-lg">

                {/* Left Content */}
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        Empowering the <br /> Future with <br />
                        <span className="text-black">AI-Driven Solutions</span>
                        
                    </h1>
                    <p className="text-gray-600 text-lg">
                        Automate petition drafting with AI for faster, accurate, and hassle-free legal
                        work. Perfect for law and real estate firms.
                    </p>

                    <div className="flex flex-wrap items-center gap-4">
                        <button className="bg-gradient-to-r from-[rgba(241,165,145,1)] to-[rgba(233,119,217,1)] text-white px-8 py-3 flex items-center gap-2 rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-200">
                            Request for demo <ArrowRight className="h-4 w-4" />
                        </button>
                    </div>
                </div>

                {/* Right Content */}
                <div className="relative">
                    <img
                        src={imgrob}
                        alt="AI Robot"
                        className="rounded-2xl shadow-lg w-full h-96 object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default AboutBanner;