import React from 'react';

const stats = [
    {
        value: '120+',
        label: 'Business tasks successfully automated with AI-powered workflows.',
    },
    {
        value: '12+',
        label: 'Countries where our AI solutions have supported businesses.',
    },
    {
        value: '15+',
        label: 'In-house team of engineers, researchers, and product designers.',
    },
];

const StatsSection = () => {
    return (
        <div className="py-16 max-w-[1700px] h-[304px] mx-auto my-32 md:my-4 px-4 md:px-20 flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center w-full">
                {stats.map((stat, index) => (
                    <div key={index}>
                        <h3 className="text-5xl font-bold text-rose-400">{stat.value}</h3>
                        <p className="text-gray-700 text-xl mt-2 max-w-xs mx-auto">
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StatsSection;
