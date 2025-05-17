import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import SocialLogin from '../../Shared/SocialLogin';

const SignUp = () => {
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const { createUser } = useAuth();

    const onSubmit = async (data) => {
        try {
            const result = await createUser(data.email, data.password);

            const userInfo = {
                name: data.name,
                email: data.email,
                role: data.role,
            };

            const res = await axiosPublic.post('/users', userInfo);

            if (res.data.insertedId) {
                reset();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your profile has been created!',
                    showConfirmButton: false,
                    timer: 1500,
                });
                navigate('/');
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.message,
            });
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-orange-100 to-orange-300">
            <div className="card w-full max-w-lg p-8 shadow-xl bg-white rounded-xl">
                <h1 className="text-4xl font-bold text-center mb-6 text-orange-500">Create Account</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <input {...register("name", { required: true })} type="text" placeholder="Full Name" className="input input-bordered w-full" />
                    {errors.name && <p className="text-red-500 text-sm">Name is required</p>}

                    <input {...register("email", { required: true })} type="email" placeholder="Email" className="input input-bordered w-full" />
                    {errors.email && <p className="text-red-500 text-sm">Email is required</p>}

                    <input {...register("password", { required: true, minLength: 6 })} type="password" placeholder="Password" className="input input-bordered w-full" />
                    {errors.password && <p className="text-red-500 text-sm">Password must be at least 6 characters</p>}

                    <select {...register("role", { required: true })} className="select select-bordered w-full">
                        <option value="">Select Role</option>
                        <option value="user">user</option>
                    </select>
                    {errors.role && <p className="text-red-500 text-sm">Role is required</p>}

                    <input className="btn btn-primary w-full bg-orange-400 border-none hover:bg-orange-500" type="submit" value="Sign Up" />
                </form>
                <p className="mt-4 text-center text-sm">Already have an account? <Link className="text-blue-500" to="/login">Login</Link></p>

                {/* <div className="mt-6">
                    <SocialLogin />
                </div> */}
            </div>
        </div>
    );
};

export default SignUp;
