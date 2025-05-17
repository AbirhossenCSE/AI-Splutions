import React from 'react';
import { FaHandPeace } from 'react-icons/fa';
import imgrob from '../../assets/Banner/b-1.webp'
import { ArrowRight } from 'lucide-react';

const Home = () => {
    return (
        <div id="home" className="bg-[#f9f9f9] max-w-7xl mx-auto pt-24 pb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 bg-white p-8 rounded-xl shadow-lg">

                {/* Left Content */}
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        Empowering the <br /> Future with <br />
                        <span className="text-black">AI-Driven Solutions</span>
                        <FaHandPeace className="inline ml-2 text-yellow-500" />
                    </h1>
                    <p className="text-gray-600 text-lg">
                        Automate petition drafting with AI for faster, accurate, and hassle-free legal
                        work. Perfect for law and real estate firms.
                    </p>

                    <div className="flex flex-wrap items-center gap-4">
                        <button className="bg-gradient-to-r from-[rgba(241,165,145,1)] to-[rgba(233,119,217,1)] text-white px-8 py-3 flex items-center gap-2 rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-200">
                            Request for demo <ArrowRight className="h-4 w-4" />
                        </button>
                        <button className="border border-gray-300 px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-100">
                            Learn More
                        </button>
                    </div>

                    <div className="items-center mt-4">
                        <div className="flex -space-x-2">
                            <img src="https://i.pravatar.cc/40?img=1" alt="user1" className="w-10 h-10 rounded-full border-2 border-white" />
                            <img src="https://i.pravatar.cc/40?img=2" alt="user2" className="w-10 h-10 rounded-full border-2 border-white" />
                            <img src="https://i.pravatar.cc/40?img=3" alt="user3" className="w-10 h-10 rounded-full border-2 border-white" />
                            <img src="https://i.pravatar.cc/40?img=4" alt="user4" className="w-10 h-10 rounded-full border-2 border-white" />
                        </div>
                        <p className="ml-3 text-sm text-gray-500">
                            10,000+ people already joined the AI Solutions USA
                        </p>
                    </div>
                </div>

                {/* Right Content */}
                <div className="relative">
                    <img
                        src={imgrob}
                        alt="AI Robot"
                        className="rounded-2xl shadow-lg w-full h-96 object-cover"
                    />

                    {/* Tags */}
                    <div className="absolute top-4 right-4 bg-white text-sm px-3 py-1 rounded-full shadow-md font-medium">
                        AI Digital Solutions
                    </div>
                    <div className="absolute bottom-4 left-4 bg-white text-sm px-3 py-1 rounded-full shadow-md font-medium">
                        Petition Drafting
                    </div>
                    <div className="absolute bottom-4 right-4 bg-white text-sm px-3 py-1 rounded-full shadow-md font-medium">
                        Chat with us 🤖
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
