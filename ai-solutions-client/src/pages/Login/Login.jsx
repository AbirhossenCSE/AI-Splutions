import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import SocialLogin from '../../Shared/SocialLogin';

const Login = () => {
    const { signInUser } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // Reset previous errors
        setEmailError('');
        setPasswordError('');

        signInUser(email, password)
            .then((result) => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Successfully Logged In',
                    showConfirmButton: false,
                    timer: 1500,
                });
                navigate(from, { replace: true });
            })
            .catch((error) => {
                const errorCode = error.code;
                if (errorCode === 'auth/user-not-found') {
                    setEmailError('No user found with this email.');
                } else if (errorCode === 'auth/wrong-password') {
                    setPasswordError('Incorrect password. Please try again.');
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Login Failed',
                        text: error.message,
                    });
                }
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 to-pink-100 p-4">
            <div className="w-full max-w-4xl bg-white shadow-lg rounded-xl overflow-hidden flex flex-col md:flex-row">
                <div className="md:w-1/2 bg-gradient-to-br from-orange-400 to-pink-500 text-white p-10 flex flex-col justify-center">
                    <h2 className="text-4xl font-bold mb-4">Welcome Back</h2>
                    <p className="text-lg">
                        Login to access your dashboard and manage your tasks efficiently.
                    </p>
                </div>
                <div className="md:w-1/2 p-8">
                    <h3 className="text-2xl font-semibold mb-6 text-center">Login</h3>
                    <form onSubmit={handleLogin}>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="you@example.com"
                                className="input input-bordered w-full"
                                required
                            />
                            {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="••••••••"
                                className="input input-bordered w-full"
                                required
                            />
                            {passwordError && (
                                <p className="text-red-500 text-sm mt-1">{passwordError}</p>
                            )}
                            <div className="text-right mt-1">
                                <a href="#" className="text-sm text-blue-500 hover:underline">
                                    Forgot password?
                                </a>
                            </div>
                        </div>
                        <div className="mt-6">
                            <input
                                type="submit"
                                value="Login"
                                className="btn btn-primary w-full uppercase tracking-wide"
                            />
                        </div>
                    </form>

                    <p className="text-center mt-4 text-sm">
                        New here?{' '}
                        <Link to="/signup" className="text-blue-600 hover:underline">
                            Create a new account
                        </Link>
                    </p>

                    <div className="mt-6">
                        <SocialLogin />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
