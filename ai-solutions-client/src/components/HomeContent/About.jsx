// import React from 'react';
// import img from '../../assets/Banner/about.png';
// import { FaBullseye, FaRocket, FaHandshake, FaEye } from 'react-icons/fa';

// const aboutData = [
//     {
//         icon: <FaRocket />,
//         title: "Augmented Solutions",
//         description:
//             "We specialize in augmented intelligence, AI that complements human expertise. Drafting tools to task automation, tech enhances your workflow.",
//         bg: "bg-white",
//     },
//     {
//         icon: <FaBullseye />,
//         title: "Our Mission",
//         description:
//             "To build accessible AI tools that automate complexity and empower people, businesses, and industries to achieve more with less effort.",
//         bg: "bg-white",
//     },
//     {
//         icon: <FaHandshake />,
//         title: "Our Promises",
//         description:
//             "We promise transparency, reliability, and continuous improvement in every AI product we create. Our goal is to make powerful technology feel simple and human.",
//         bg: "bg-white",
//     },
//     {
//         icon: <FaEye />,
//         title: "Our Vision",
//         description:
//             "A world where every organization can scale with intelligent agents, transforming the way people work, communicate, and make decisions.",
//         bg: "bg-white",
//     },
// ];

// const About = () => {
//     return (
//         <div id='about' className="bg-white max-w-[1800px] mx-auto rounded-2xl shadow-lg mt-8">
//             <div className="text-center mb-12 pt-10">
//                 <span className="text-xs uppercase bg-[#F5F5F5] text-black px-4 py-1 rounded-full shadow-sm border border-[#A1A1A1]">
//                     About us
//                 </span>
//                 <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-gray-800 leading-snug">
//                     Redefining Interaction and <br /> Automation with Advanced AI
//                 </h2>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">

//                 {/* Left Column */}
//                 <div className="space-y-6">
//                     {aboutData.slice(0, 2).map((item, index) => (
//                         <div key={index} className={`${item.bg} p-6 mx-4 rounded-xl shadow hover:shadow-md transition`}>
//                             <div className="text-purple-600 text-2xl mb-2">{item.icon}</div>
//                             <h4 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h4>
//                             <p className="text-sm text-gray-600 text-justify">{item.description}</p>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Center Image */}
//                 <div className='p-6'>
//                     <img
//                         src={img}
//                         alt="AI Collaboration"
//                         className="rounded-2xl shadow-lg w-full h-auto object-cover"
//                     />
//                 </div>

//                 {/* Right Column */}
//                 <div className="space-y-6">
//                     {aboutData.slice(2, 4).map((item, index) => (
//                         <div key={index} className={`${item.bg} p-6 rounded-xl shadow hover:shadow-md transition`}>
//                             <div className="text-purple-600 text-2xl mb-2">{item.icon}</div>
//                             <h4 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h4>
//                             <p className="text-sm text-gray-600">{item.description}</p>
//                         </div>
//                     ))}
//                 </div>

//             </div>
//         </div>
//     );
// };

// export default About;


import React from 'react';
import img from '../../assets/Banner/about.png';
import { FaBullseye, FaRocket, FaHandshake, FaEye } from 'react-icons/fa';
import logo1 from '../../assets/home-about/Frame1.jpg'

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
        <div id='about' className="bg-white max-w-[1800px] mx-auto rounded-2xl shadow-lg mt-8">
            <div className="text-center mb-12 pt-10">
                <span className="text-xs uppercase bg-[#F5F5F5] text-black px-4 py-1 rounded-full shadow-sm border border-[#A1A1A1]">
                    About us
                </span>
                <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-gray-800 leading-snug">
                    Redefining Interaction and <br /> Automation with Advanced AI
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">

                {/* Left Column */}
                <div className="space-y-6">
                    {aboutData.slice(0, 2).map((item, index) => (
                        <div key={index} className="bg-white p-6 mx-4 rounded-xl border border-[#FFECEC] shadow hover:shadow-md transition space-y-3">
                            <div className="w-10 h-10 flex items-center justify-center bg-[#F8F6FF] text-purple-600 rounded-md text-xl">
                                {item.icon}
                            </div>
                            <h4 className="text-lg font-semibold text-gray-800">{item.title}</h4>
                            <p className="text-sm text-gray-600 text-justify">{item.description}</p>
                        </div>
                    ))}
                </div>

                {/* Center Image */}
                <div className='p-6'>
                    <img
                        src={img}
                        alt="AI Collaboration"
                        className="rounded-2xl shadow-lg w-full h-auto object-cover"
                    />
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                    {aboutData.slice(2, 4).map((item, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl border border-[#FFECEC] shadow hover:shadow-md transition space-y-3">
                            <div className="w-10 h-10 flex items-center justify-center bg-[#F8F6FF] text-purple-600 rounded-md text-xl">
                                {item.icon}
                            </div>
                            <h4 className="text-lg font-semibold text-gray-800">{item.title}</h4>
                            <p className="text-sm text-gray-600 text-justify">{item.description}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default About;
