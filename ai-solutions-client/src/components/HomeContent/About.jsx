import React from 'react';
import img from '../../assets/Banner/about.png';
import { FaBullseye, FaRocket, FaHandshake, FaEye } from 'react-icons/fa';

const aboutData = [
    {
        icon: <FaRocket />,
        title: "Augmented Solutions",
        description:
            "We specialize in augmented intelligence, AI that complements human expertise. Drafting tools to task automation, tech enhances your workflow.",
    },
    {
        icon: <FaBullseye />,
        title: "Our Mission",
        description:
            "To build accessible AI tools that automate complexity and empower people, businesses, and industries to achieve more with less effort.",
    },
    {
        icon: <FaHandshake />,
        title: "Our Promises",
        description:
            "We promise transparency, reliability, and continuous improvement in every AI product we create. Our goal is to make powerful technology feel simple and human.",
    },
    {
        icon: <FaEye />,
        title: "Our Vision",
        description:
            "A world where every organization can scale with intelligent agents, transforming the way people work, communicate, and make decisions.",
    },
];

const About = () => {
    return (
        <div id='about' className="bg-white max-w-[1800px] mx-auto rounded-2xl shadow-lg mt-8 px-4 py-8">
            <div className="text-center mb-12 pt-10">
                <span className="text-xs uppercase bg-[#F5F5F5] text-black px-4 py-1 rounded-full shadow-sm border border-[#A1A1A1]">
                    About us
                </span>
                <h2 className="mt-4 text-3xl md:text-[64px] font-semibold text-gray-800 leading-snug">
                    Redefining Interaction and <br /> Automation with Advanced AI
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

                {/* Left Column */}
                <div className="flex flex-col justify-between space-y-6 h-full">
                    {aboutData.slice(0, 2).map((item, index) => (
                        <div key={index} className="flex-1 bg-white p-6 mx-4 rounded-xl border border-[#FFECEC] shadow hover:shadow-md transition space-y-3 flex flex-col">
                            <div className="w-10 h-10 flex items-center justify-center bg-[#F8F6FF] text-purple-600 rounded-md text-xl">
                                {item.icon}
                            </div>
                            <h4 className="text-[24px] font-semibold text-gray-800">{item.title}</h4>
                            <p className="text-[18px] text-gray-600 text-justify">{item.description}</p>
                        </div>
                    ))}
                </div>

                {/* Center Image */}
                <div className='flex items-center justify-center h-[659px]'>
                    <img
                        src={img}
                        alt="AI Collaboration"
                        className="rounded-2xl shadow-lg w-full h-full object-cover"
                    />
                </div>

                {/* Right Column */}
                <div className="flex flex-col justify-between space-y-6 h-full">
                    {aboutData.slice(2, 4).map((item, index) => (
                        <div key={index} className="flex-1 bg-white p-6 mx-4 rounded-xl border border-[#FFECEC] shadow hover:shadow-md transition space-y-3 flex flex-col">
                            <div className="w-10 h-10 flex items-center justify-center bg-[#F8F6FF] text-purple-600 rounded-md text-xl">
                                {item.icon}
                            </div>
                            <h4 className="text-[24px] font-semibold text-gray-800">{item.title}</h4>
                            <p className="text-[18px] text-gray-600 text-justify">{item.description}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default About;
