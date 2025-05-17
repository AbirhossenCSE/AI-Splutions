import React from 'react';
import { Puzzle } from 'lucide-react';

const solutions = [
    {
        title: 'Automate and Upscale',
        description:
            'We specialize in augmented intelligence, AI that human expertise. Drafting tools to task automation, tech enhances your workflow.',
    },
    {
        title: 'Enhance Customer Interactions',
        description:
            'We specialize in augmented intelligence, AI that human expertise. Drafting tools to task automation, tech enhances your workflow.',
    },
    {
        title: 'Drive Business Decisions',
        description:
            'We specialize in augmented intelligence, AI that human expertise. Drafting tools to task automation, tech enhances your workflow.',
    },
];

const Overview = () => {
    return (
        <div className="max-w-7xl mx-auto py-12 px-4 md:px-16">
            <div className="text-center mb-10">
                <span className="text-sm bg-white px-3 py-1 rounded-full shadow text-gray-600">
                    Overview
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mt-4 text-gray-800">
                    Our Solutions
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {solutions.map((solution, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl p-6 shadow hover:shadow-md transition"
                    >
                        <div className="w-10 h-10 mb-4 flex items-center justify-center rounded-full border border-purple-400 text-purple-500">
                            <Puzzle size={20} />
                        </div>
                        <h3 className="font-semibold text-lg mb-2">{solution.title}</h3>
                        <p className="text-gray-600 text-sm">{solution.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Overview;
