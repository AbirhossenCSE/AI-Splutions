import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Swal from 'sweetalert2';
import img1 from '../../assets/Jus/Rectangle-1.png'

const ServicesOffer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

    const productData = [
        {
            _id: '1',
            title: 'AI Petition Drafter',
            image: img1,
            description: 'Say goodbye to repetitive legal writing. Our AI Petition Drafter automates the creation of legal petitions using natural language inputs, reducing human error and saving hours for law firms, legal assistants, and solo practitioners. Draft legally sound documents in minutes—not days.'
        },
        {
            _id: '2',
            title: 'Chatbots & Assistants',
            image: img1,
            description: 'Boost engagement and service with intelligent, 24/7 chatbots. Whether for customer support or lead qualification, our AI-powered conversational agents can be trained to handle queries, route tasks, and deliver human-like interactions across platforms.'
        },
        {
            _id: '3',
            title: 'Real Estate AI Solutions',
            image: img1,
            description: 'From property valuation to personalized recommendations, our real estate-focused AI tools bring smart automation to agents and agencies. Save time, reduce costs, and make better decisions with data-driven insights.'
        },
        {
            _id: '4',
            title: 'AI Agents & Task Automation',
            image: img1,
            description: 'Let our AI agents handle repetitive tasks like appointment scheduling, data entry, call handling, and more. These AI-powered assistants can integrate into your workflow to increase productivity without increasing headcount.'
        }
    ];

    const openModal = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const payload = {
                ...formData,
                status: "applied",
                productId: selectedProduct._id,
                productName: selectedProduct.title,
                timestamp: new Date()
            };
            console.log(payload); // You can send this to your backend
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Request submitted successfully!",
                showConfirmButton: false,
                timer: 1500
            });
            setIsModalOpen(false);
            setFormData({ name: '', email: '', phone: '' });
        } catch (err) {
            console.error('Demo request failed:', err);
            Swal.fire('Error', 'Failed to submit request.', 'error');
        }
    };

    return (
        <div className="max-w-[1800px] mx-auto py-12 space-y-20">
            {productData.map((product, index) => {
                const isEven = index % 2 === 0;
                return (
                    <div key={product._id} className="bg-[#FFF] px-2 py-4 md:p-10 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        {/* Image */}
                        <div className={`${isEven ? 'order-1' : 'order-2'}`}>
                            <img
                                src={product.image}
                                alt={product.title}
                                className="rounded-xl shadow-xl md:w-[668px] md:h-[668px] object-cover md:mx-8"
                            />
                        </div>

                        {/* Content */}
                        <div className={`${isEven ? 'order-2' : 'order-1'} space-y-6 px-10`}>
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                                <span className="text-black">{product.title}</span>
                            </h1>
                            <p className="text-gray-600 text-lg text-justify">
                                {product.description}
                            </p>

                            <div className="flex flex-wrap items-center gap-4">
                                <button
                                    onClick={() => openModal(product)}
                                    className="bg-gradient-to-r from-[rgba(241,165,145,1)] to-[rgba(233,119,217,1)] text-white px-8 py-3 flex items-center gap-2 rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-200"
                                >
                                    Get a Quote <ArrowRight className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}

            {/* Modal */}
            {isModalOpen && selectedProduct && (
                <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/30 backdrop-blur-sm">
                    <div className="bg-white rounded-xl shadow-2xl w-full max-w-md relative p-8">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-3 right-3 text-gray-500 hover:text-red-500 transition"
                        >
                            ✖
                        </button>
                        <h2 className="text-2xl font-semibold mb-4 text-center">
                            Request Demo for <span className="text-orange-500">{selectedProduct.title}</span>
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block mb-1 text-sm font-medium text-gray-700">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div>
                                <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div>
                                <label className="block mb-1 text-sm font-medium text-gray-700">Phone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                                    placeholder="Enter your phone number"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-orange-400 to-pink-500 text-white py-2 rounded-lg font-semibold hover:opacity-90 transition"
                            >
                                Submit Request
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ServicesOffer;