import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const response = await axios.get("https://ai-solutions-server.vercel.app/testimonials");
                setTestimonials(response.data);
            } catch (error) {
                console.error("Error fetching testimonials:", error);
            }
        };

        fetchTestimonials();
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
        <div className="bg-[#f8f9fa] max-w-[1800px] mx-auto py-20 px-4 md:px-0">
            <div className=" mx-auto">
                {testimonials.length > 0 ? (
                    <Slider {...settings}>
                        {testimonials.map((item) => (
                            <div key={item.id}>
                                <div className="flex flex-col md:flex-row items-center bg-white rounded-3xl shadow-md overflow-hidden">
                                    <div className="md:w-1/3 w-full">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="md:w-1/2 w-full p-8">
                                        <span className="text-sm  bg-gray-200 rounded-full px-3 py-1 inline-block mb-4">
                                            Testimonials
                                        </span>
                                        <p className="text-2xl text-justify md:text-3xl font-semibold text-gray-800 mb-6 leading-snug">
                                            “{item.quote}”
                                        </p>
                                        <p className="font-medium text-gray-800 mb-1">– {item.name}</p>
                                        <p className="text-sm text-gray-600 mb-4">{item.role}</p>
                                        <p className="text-sm text-gray-400 max-w-sm">
                                            Testimonials are from an owner or employee of a current customer.
                                            No compensation was provided in any way when providing testimonials.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                ) : (
                    <p className="text-center text-gray-600">Loading testimonials...</p>
                )}
            </div>
        </div>
    );
};

export default Testimonials;
