import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../hooks/useAuth';
import useAxiosPublic from '../hooks/useAxiosPublic';

const SocialLogin = () => {
    const { signInWithGoogle } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate()

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName,
                    role: "user",
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Successfully Sign-Up with google",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate('/');
                    })

            })
    }
    return (
        <div className='w-10/12 mx-auto'>
            <div className='divider'>OR</div>
            <div>
                <button onClick={handleGoogleSignIn} className="btn btn-neutral w-full mb-4">
                    <FaGoogle></FaGoogle>
                    Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;