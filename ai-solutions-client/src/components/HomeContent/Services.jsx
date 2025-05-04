import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, MessageSquare, Gem, Settings, ShieldCheck, Zap } from 'lucide-react'; // Example icons

// Sample JSON data for services (replace with your actual data)
const servicesData = [
    {
        id: 1,
        title: 'AI Petition Drafter',
        description: 'Revolutionize the real estate experience with AI. From automating property listings and client follow-ups to managing paperwork and virtual tours.',
        icon: Rocket, // You can replace these with different icons
    },
    {
        id: 2,
        title: 'Chatbots & Assistants',
        description: 'Revolutionize the real estate experience with AI. From automating property listings and client follow-ups to managing paperwork and virtual tours.',
        icon: MessageSquare,
    },
    {
        id: 3,
        title: 'Real Estate AI Solutions',
        description: 'Revolutionize the real estate experience with AI. From automating property listings and client follow-ups to managing paperwork and virtual tours.',
        icon: Gem,
    },
    {
        id: 4,
        title: 'AI Agents & Task Automation',
        description: 'Revolutionize the real estate experience with AI. From automating property listings and client follow-ups to managing paperwork and virtual tours.',
        icon: Settings,
    },
];

const Services = () => {
    return (
        <div id='services' className="bg-gray-100 py-16">
            <div className="container mx-auto px-8">
                {/* Title Section */}
                <div className="text-center mb-12 pt-10">
                    <span className="text-xs uppercase text-gray-500 bg-base-300 px-3 py-1 rounded-full shadow-sm">Our Services</span>
                    <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-gray-800 leading-snug">
                    Redefining Interaction and <br /> Automation with Advanced AI
                    </h2>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 ">
                    {servicesData.map((service) => {
                        const Icon = service.icon || Rocket;
                        return (
                            <motion.div
                                key={service.id}
                                className="bg-white pt-20 rounded-xl shadow-md p-6 flex flex-col justify-between transition-transform transform hover:scale-105"
                                whileHover={{ y: -10 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <div className="mb-4">
                                    <Icon className="h-8 w-8 text-blue-500 mb-4" />
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {service.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Services;
