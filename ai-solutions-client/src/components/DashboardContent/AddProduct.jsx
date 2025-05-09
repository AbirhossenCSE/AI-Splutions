import React from 'react';
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const image_hosting_key = import.meta.env.VITE_IMAGE_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();

    const onSubmit = async (data) => {
        const imageFile = data.image[0];

        const formData = new FormData();
        formData.append('image', imageFile);

        try {
            // Upload to imgbb
            const imageRes = await fetch(image_hosting_api, {
                method: 'POST',
                body: formData,
            });
            const imgData = await imageRes.json();

            if (imgData.success) {
                const productData = {
                    title: data.title,
                    description: data.description,
                    image: imgData.data.url,
                    features: data.features.split(',').map(item => item.trim()),
                };

                const res = await axiosPublic.post('/products', productData);
                if (res.data.insertedId || res.data._id) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Product added successfully!',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    reset();
                }
            } else {
                throw new Error("Image upload failed");
            }
        } catch (error) {
            Swal.fire({
                position: "top-end",
                title: 'Error!',
                text: 'Failed to add product.',
                icon: 'error',
                showConfirmButton: false,
                timer: 1500
            });
        }
    };

    return (
        <div className="max-w-4xl mx-auto px-6 py-10 bg-white shadow-lg rounded-lg mt-10">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Add New Product</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" encType="multipart/form-data">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Title</label>
                    <input
                        type="text"
                        {...register('title', { required: true })}
                        className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2"
                        placeholder="Product Title"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Image Upload</label>
                    <input
                        type="file"
                        accept="image/*"
                        {...register('image', { required: true })}
                        className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        {...register('description', { required: true })}
                        rows={4}
                        className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2"
                        placeholder="Product description..."
                    ></textarea>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Features</label>
                    <textarea
                        {...register('features', { required: true })}
                        rows={3}
                        className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2"
                        placeholder="Comma-separated features (e.g., Feature1, Feature2, ...)"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="bg-gradient-to-r from-orange-400 to-pink-500 text-white px-6 py-3 rounded-md shadow hover:shadow-lg transition"
                >
                    Add Product
                </button>
            </form>
        </div>
    );
};

export default AddProduct;
