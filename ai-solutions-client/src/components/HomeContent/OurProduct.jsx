import React, { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const OurProduct = () => {
    const axiosPublic = useAxiosPublic();
    const [productData, setProductData] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

    useEffect(() => {
        axiosPublic.get('/products')
            .then(res => setProductData(res.data))
            .catch(err => console.error("Failed to fetch products:", err));
    }, [axiosPublic]);

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
            await axiosPublic.post('/demo-requests', payload);
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
        <div id="product" className="max-w-[1800px] mx-auto px-4">
            {/* Heading */}
            <div className="text-center mb-12 pt-10">
                <span className="text-xs uppercase bg-gray-200 text-black px-3 py-1 rounded-full shadow-sm">Our Product</span>
                <h2 className="mt-4 text-3xl md:text-[64px] font-semibold text-gray-800 leading-snug">Meet Our Flagship AI Product</h2>
                <p className="mt-4 text-gray-600">Our modular AI platform brings together drafting tools, chatbots, voice-based services, and intelligent agents in a single ecosystem.</p>
            </div>

            {/* Product Cards */}
            {productData.map((product, index) => {
                const isEven = index % 2 === 0;
                return (
                    <div key={product._id} className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-16">
                        <div className={`p-2 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                            <img src={product.image} alt={product.title} className="rounded-lg shadow-lg w-full h-96 object-cover" />
                        </div>
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
                            <button onClick={() => openModal(product)} className="bg-gradient-to-r from-[rgba(241,165,145,1)] to-[rgba(233,119,217,1)] text-white px-8 py-3 flex items-center gap-2 rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-200 self-start mt-4">
                                Request for demo <ArrowRight className="h-4 w-4" />
                            </button>
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

export default OurProduct;
