import React from 'react';
import { ArrowRight } from 'lucide-react';

const ContactUs = () => {
    return (
        <div id='contact' className="bg-gray-100 py-20 md:py-10">
            <div className="container mx-auto px-4 text-center">
                {/* Main Heading */}
                <div className="mb-8 md:mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        Have a question or want to collaborate?
                    </h2>
                    <p className="text-gray-600 mt-2">
                        Reach out and our team will get back to you.
                    </p>
                    <p className="text-gray-500 text-sm mt-4">
                        That's how fast it is to get started on Plain. And yes, we've timed it.
                    </p>
                </div>

                {/* Buttons */}
                <div className="flex justify-center gap-6">
                    <button className="bg-gradient-to-r from-[rgba(241,165,145,1)] to-[rgba(233,119,217,1)] text-white px-8 py-3 flex items-center gap-2 rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-200">
                        Contact Us <ArrowRight className="h-4 w-4" />
                    </button>
                    <button className="bg-white text-purple-500 px-8 py-3 border border-purple-500 hover:bg-purple-50 hover:text-purple-600 flex items-center gap-2 rounded-3xl transition-colors duration-200">
                        Request for a Demo
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
