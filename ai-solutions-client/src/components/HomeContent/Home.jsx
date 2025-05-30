import React from 'react';
import { FaHandPeace } from 'react-icons/fa';
import imgrob from '../../assets/Banner/b-2.png';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <div className="bg-[#FFFFFF] max-w-[1800px] mx-auto mt-20 rounded-xl shadow-2xl border border-transparent">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">

                {/* Left Content */}
                <div className="space-y-6 m-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        Empowering the <br /> Future with <br />
                        AI-Driven Solutions                        
                    </h1>
                    <p className="text-gray-600 text-lg">
                        Automate petition drafting with AI for faster, accurate, and hassle-free legal
                        work. Perfect for law and real estate firms.
                    </p>

                    <div className="flex flex-wrap items-center gap-4">
                        <button className="bg-gradient-to-r from-[rgba(241,165,145,1)] to-[rgba(233,119,217,1)] text-white px-8 py-3 flex items-center gap-2 rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-200">
                            Get a Quote <ArrowRight className="h-4 w-4" />
                        </button>
                        <button className="border border-gray-300 px-8 py-3 text-gray-800 rounded-full text-sm font-medium hover:bg-gray-100">
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

                {/* Right Content with Animations */}
                {/* Right Content */}
                <div className="relative">
                    <img
                        src={imgrob}
                        alt="AI Robot"
                        className="rounded-2xl shadow-lg w-full md:h-[800px] object-cover"
                    />

                    {/* Animated Tags */}
                    <motion.div
                        className="absolute bottom-56 right-8 bg-white text-lg px-3 py-1 rounded-full shadow-md font-medium text-gray-800"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        AI Digital Solutions
                    </motion.div>

                    <motion.div
                        className="absolute bottom-32 left-8 bg-white text-lg px-3 py-1 rounded-full shadow-md font-medium text-gray-800"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        Petition Drafting
                    </motion.div>

                    <motion.div
                        className="absolute bottom-8 right-8 bg-white text-lg px-3 py-1 rounded-full shadow-md font-medium text-gray-800"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        Digital Solutions
                    </motion.div>
                </div>

            </div>
        </div>
    );
};

export default Home;
