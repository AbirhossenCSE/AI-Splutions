import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import imgrob from '../../assets/Banner/services.png';

const ServicesBanner = () => {
    return (
        <div className="max-w-[1800px] mx-auto mt-12 mb-6">
            <div className="relative p-8 bg-[#FFF] rounded-2xl grid grid-cols-1 md:grid-cols-2 items-center gap-10">

                {/* Left Content Animation */}
                <motion.div
                    className="space-y-6 md:px-10 "
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: false }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                        Smart AI Solutions Built for Your Business
                    </h1>
                    <p className="text-gray-600 text-xl text-justify">
                        At AI Solutions USA, we provide next-generation artificial intelligence services that solve real-world problems. Whether you're automating petition drafting, deploying chatbots, or streamlining property analysis, our customizable AI services help you work smarter, not harder.
                    </p>

                    <div className="flex flex-wrap items-center gap-4">
                        <button className="bg-gradient-to-r from-[rgba(241,165,145,1)] to-[rgba(233,119,217,1)] text-white px-8 py-3 flex items-center gap-2 rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-200">
                            Request for demo <ArrowRight className="h-4 w-4" />
                        </button>
                    </div>
                </motion.div>

                {/* Right Image Animation */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: false }}
                    className="flex justify-center"
                >
                    <img
                        src={imgrob}
                        alt="AI Robot"
                        className="rounded-2xl shadow-lg md:w-[668px] md:h-[680px] object-cover md:mt-12"
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default ServicesBanner;


