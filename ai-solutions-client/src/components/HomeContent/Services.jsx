import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket, MessageSquare, Gem, Settings } from 'lucide-react';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const iconMap = {
    Rocket,
    MessageSquare,
    Gem,
    Settings
};

const Services = () => {
    const axiosPublic = useAxiosPublic();
    const [services, setServices] = useState([]);

    useEffect(() => {
        axiosPublic.get('/services')
            .then(res => setServices(res.data))
            .catch(err => console.error('Error fetching services:', err));
    }, [axiosPublic]);

    return (
        <div id='services' className="bg-gray-100 max-w-[1800px] mx-auto py-16">
            <div className="mx-auto">
                {/* Title */}
                <div className="text-center mb-12 pt-10">
                    <span className="text-xs uppercase bg-gray-200 text-black px-3 py-1 rounded-full shadow-sm">Our Services</span>
                    <h2 className="mt-4 text-3xl md:text-[64px] font-semibold text-gray-800 leading-snug">
                        Redefining Interaction and <br /> Automation with Advanced AI
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
                    {services.map(service => {
                        const Icon = iconMap[service.icon] || Rocket;
                        return (
                            <motion.div
                                key={service._id}
                                className="bg-white border border-gray-300 rounded-xl shadow-sm p-6 flex flex-col items-center text-center hover:shadow-md transition-transform hover:scale-[1.02]"
                                whileHover={{ y: -5 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {/* Icon */}
                                <div className="bg-gray-100 rounded-lg flex items-center justify-center w-[722px] h-[387px] mb-6">
                                    <Icon className="h-12 w-12 text-gray-500" />
                                </div>

                                {/* Title */}
                                <h3 className="text-[24px] font-semibold text-gray-800 mb-2">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-[18px] text-gray-600">
                                    {service.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Services;
