import React, { useEffect, useState } from 'react';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const image_hosting_key = import.meta.env.VITE_IMAGE_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const ManageProduct = () => {
    const axiosPublic = useAxiosPublic();
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Fetch products
    const fetchProducts = async () => {
        try {
            const res = await axiosPublic.get('/products');
            setProducts(res.data);
        } catch (error) {
            console.error('Failed to fetch products', error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    // Delete Product
    const handleDelete = async (id) => {
        try {
            await axiosPublic.delete(`/products/${id}`);
            Swal.fire({
                toast: true,
                position: 'top-end',
                icon: 'success',
                title: 'Product deleted',
                showConfirmButton: false,
                timer: 2000,
            });
            setProducts(products.filter(p => p._id !== id));
        } catch (error) {
            console.error('Failed to delete product', error);
        }
    };

    // Update Product
    const handleUpdate = async (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const features = form.features.value.split('\n').map(f => f.trim()).filter(Boolean);

        let imageURL = selectedProduct.image;
        const imageFile = form.image.files[0];

        try {
            if (imageFile) {
                const formData = new FormData();
                formData.append('image', imageFile);
                const res = await fetch(image_hosting_api, {
                    method: 'POST',
                    body: formData,
                });
                const imgData = await res.json();
                if (imgData.success) {
                    imageURL = imgData.data.display_url;
                } else {
                    throw new Error('Image upload failed');
                }
            }

            const updatedProduct = { title, description, image: imageURL, features };
            await axiosPublic.put(`/products/${selectedProduct._id}`, updatedProduct);

            Swal.fire({
                toast: true,
                position: 'top-end',
                icon: 'success',
                title: 'Product updated',
                showConfirmButton: false,
                timer: 2000,
            });

            setIsModalOpen(false);
            fetchProducts();
        } catch (error) {
            console.error('Update failed', error);
            Swal.fire({
                icon: 'error',
                title: 'Update Failed',
                text: error.message || 'Something went wrong!',
            });
        }
    };

    return (
        <div className="max-w-6xl mx-auto p-4">
            <h2 className="text-2xl font-semibold mb-4">Manage Products</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr className="bg-base-200">
                            <th>#</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, idx) => (
                            <tr key={product._id}>
                                <td>{idx + 1}</td>
                                <td>{product.title}</td>
                                <td>{product.description.slice(0, 60)}...</td>
                                <td className="flex gap-2">
                                    <button
                                        onClick={() => { setSelectedProduct(product); setIsModalOpen(true); }}
                                        className="btn btn-sm btn-info"
                                    >
                                        Update
                                    </button>
                                    <button
                                        onClick={() => handleDelete(product._id)}
                                        className="btn btn-sm btn-error"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Update Modal */}
            {isModalOpen && selectedProduct && (
                <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/30 backdrop-blur-sm">
                    <div className="bg-white p-6 rounded-md w-full max-w-lg relative">
                        <button className="absolute top-2 right-2 text-red-500" onClick={() => setIsModalOpen(false)}>✖</button>
                        <h3 className="text-xl font-semibold mb-4">Update Product</h3>
                        <form onSubmit={handleUpdate} className="space-y-4">
                            <input
                                name="title"
                                defaultValue={selectedProduct.title}
                                className="input input-bordered w-full"
                                required
                            />

                            <input
                                name="image"
                                type="file"
                                accept="image/*"
                                className="file-input file-input-bordered w-full"
                            />
                            <p className="text-sm text-gray-500">Leave empty to keep current image.</p>
                            {selectedProduct.image && (
                                <img
                                    src={selectedProduct.image}
                                    alt="Current"
                                    className="w-32 h-32 object-cover mt-2 rounded-md"
                                />
                            )}

                            <textarea
                                name="description"
                                defaultValue={selectedProduct.description}
                                className="textarea textarea-bordered w-full"
                                rows={4}
                                required
                            />

                            <textarea
                                name="features"
                                defaultValue={selectedProduct.features.join('\n')}
                                className="textarea textarea-bordered w-full"
                                rows={5}
                                placeholder="One feature per line"
                            />

                            <button className="btn btn-success w-full">Update Product</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ManageProduct;
