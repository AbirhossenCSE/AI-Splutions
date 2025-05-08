import React, { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const OurProduct = () => {
    const axiosPublic = useAxiosPublic();
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        axiosPublic.get('/products')
            .then(res => {
                setProductData(res.data);
            })
            .catch(err => {
                console.error("Failed to fetch products:", err);
            });
    }, [axiosPublic]);

    return (
        <div id="product" className="max-w-7xl mx-auto px-4">
            {/* Heading */}
            <div className="text-center mb-12 pt-10">
                <span className="text-xs uppercase text-gray-500 bg-base-300 px-3 py-1 rounded-full shadow-sm">
                    Our Product
                </span>
                <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-gray-800 leading-snug">
                    Meet Our Flagship AI Product
                </h2>
                <p className="mt-4 text-gray-600">
                    Our modular AI platform brings together drafting tools, chatbots, voice-based services,
                    and intelligent agents in a single ecosystem.
                </p>
            </div>

            {/* Product Cards */}
            {productData.map((product, index) => {
                const isEven = index % 2 === 0;

                return (
                    <div key={product._id} className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-16">
                        {/* Image */}
                        <div className={`p-2 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                            <img
                                src={product.image}
                                alt={product.title}
                                className="rounded-lg shadow-lg w-full h-96 object-cover"
                            />
                        </div>

                        {/* Content */}
                        <div className={`bg-white p-6 rounded-xl h-full flex flex-col justify-between ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                            <div>
                                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{product.title}</h3>
                                <p className="text-gray-600 mb-6">{product.description}</p>
                                <ul className="list-none space-y-2">
                                    {product.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-2">
                                            <CheckCircle className="h-5 w-5 text-green-500" />
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <button className="bg-gradient-to-r from-[rgba(241,165,145,1)] to-[rgba(233,119,217,1)] text-white px-8 py-3 flex items-center gap-2 rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-200 self-start mt-4">
                                Request for demo <ArrowRight className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default OurProduct;
