import React from "react";
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";
import logo from '../assets/logo/logo.jpeg'
import bg from '../assets/bg/footer-bg.png'

const Footer = () => {
    return (
        <footer className="bg-[#f7f7f7] min-h-[650px] relative z-10 overflow-hidden">
            {/* Background Blur */}
            {/* <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-tr from-pink-400 via-purple-400 to-orange-400 opacity-30 blur-3xl z-0" /> */}
            <div
                className="absolute -bottom-110 rotate-90 w-full h-[1400px] bg-no-repeat bg-bottom bg-contain z-0"
                style={{ backgroundImage: `url(${bg})` }}
            />

            {/* Container to center content */}
            <div className="h-full flex justify-center items-center relative z-10 px-4 py-10">
                {/* Inner flex: Responsive wrapper */}
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-[30px]">
                    {/* Left Section */}
                    <div className="bg-white rounded-2xl p-10 md:p-20 w-full lg:w-[576px] h-auto lg:h-[500px] flex flex-col ">
                        <h2 className="md:text-6xl text-3xl font-bold leading-tight text-black">
                            AI is the <br /> next future
                        </h2>
                        <div>
                            <h3 className="font-semibold items-center gap-1">
                                <img className="w-80 my-4 md:my-8" src={logo} alt="" />
                            </h3>
                            <p className="text-sm mt-2 text-black">
                                © 2025 All Rights Reserved, AI Solutions USA.
                            </p>
                        </div>
                    </div>

                    {/* Middle Section */}
                    <div className="w-full lg:w-[576px] h-auto lg:h-[500px] flex flex-col justify-between gap-6">
                        {/* Support Box */}
                        <div className="bg-white text-black rounded-2xl p-6 md:p-16 flex-1">
                            <h3 className="text-3xl font-bold mb-2">Support</h3>
                            <p className="text-lg mb-2">
                                Have questions? Get in touch or check out our Help Center
                            </p>
                            <p className="text-lg mb-2">
                                You can also text our support team at{" "}
                                <span className="font-medium">(310) 773-5384</span>
                            </p>
                            <p className="text-lg">
                                email us at{" "}
                                <span className="text-blue-600">help@aisolutionsusa.com</span>
                            </p>
                        </div>

                        {/* Terms Box */}
                        <div className="bg-white text-black rounded-2xl p-6 h-[100px]">
                            <p className="text-lg">
                                <span className="cursor-pointer hover:underline">Terms of use</span> &nbsp; | &nbsp;
                                <span className="cursor-pointer hover:underline">Privacy Policy</span>
                            </p>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="bg-white text-black rounded-2xl p-6 w-full lg:w-[270px] h-auto lg:h-[500px] flex flex-col items-center text-center gap-6">
                        <h3 className="text-3xl my-10 font-bold">Social</h3>
                        <div className="flex flex-row lg:flex-col gap-6 text-3xl">
                            <FaInstagram />
                            <FaFacebookF />
                            <FaXTwitter />
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
