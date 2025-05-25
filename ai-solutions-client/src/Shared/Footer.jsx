import React from "react";
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-[#f7f7f7] max-w-[1800px] mx-auto relative z-10">
            {/* Background Blur */}
            <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-tr from-pink-400 via-purple-400 to-orange-400 opacity-30 blur-3xl z-0" />

            <div className=" mx-auto py-16 px-4 md:px-0 relative z-10 grid grid-cols-1 md:grid-cols-5 gap-8">
                {/* Left Section */}
                <div className="bg-white rounded-2xl md:col-span-2 p-6">
                    <h2 className="text-3xl font-bold text-gray-900 leading-tight">
                        AI is the <br /> next <br /> future
                    </h2>
                    <div className="mt-4">
                        <h3 className="font-semibold text-gray-800 flex items-center gap-1">
                            <span className="text-pink-500 text-2xl">✎</span> AI Solutions USA.
                        </h3>
                        <p className="text-sm text-gray-500 mt-2">
                            © 2025 All Rights Reserved, AI Solutions USA.
                        </p>
                    </div>
                </div>

                {/* Middle Section */}
                <div className="flex flex-col gap-6 md:col-span-2">
                    {/* Support Box */}
                    <div className="bg-white rounded-2xl p-6">
                        <h3 className="text-lg font-semibold mb-2 text-gray-800">Support</h3>
                        <p className="text-sm text-gray-600 mb-2">
                            Have questions? Get in touch or check out our Help Center
                        </p>
                        <p className="text-sm text-gray-600 mb-2">
                            You can also text our support team at{" "}
                            <span className="font-medium">(310) 773-5384</span>
                        </p>
                        <p className="text-sm text-gray-600">
                            email us at{" "}
                            <span className="text-blue-600">help@aisolutionsusa.com</span>
                        </p>
                    </div>

                    {/* Terms Box */}
                    <div className="bg-white rounded-2xl p-6">
                        <p className="text-sm text-gray-600">
                            <span className="cursor-pointer hover:underline">Terms of use</span> &nbsp; | &nbsp;
                            <span className="cursor-pointer hover:underline">Privacy Policy</span>
                        </p>
                    </div>
                </div>

                {/* Right Section - Social */}
                <div className="bg-white rounded-2xl p-6 flex flex-col items-start gap-4">
                    <h3 className="text-lg font-semibold text-gray-800">Social</h3>
                    <div className="flex flex-col gap-4 text-xl text-gray-700">
                        <FaInstagram />
                        <FaFacebookF />
                        <FaXTwitter />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
