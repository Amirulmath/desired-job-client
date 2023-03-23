import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUPError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const navigate = useNavigate();

    const handleSignUp = data => {
        setSignUPError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                const userInfo = {
                    displayName: data.name,
                    specialty: data.specialty
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email, data.specialty);
                    })
                    .catch(err => console.log(err));

            })
            .catch(error => {
                console.log(error)
                setSignUPError(error.message)
            });

        const saveUser = (name, email, specialty) => {
            const user = { name, email, specialty };
            fetch('https://laptop-2hand-server.vercel.app/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
                .then(res => res.json())
                .then(data => {
                    setCreatedUserEmail(email);
                })
        }
    }

    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">If you want to access our services, you need to login first.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-blue-200">
                        <div className="card-body">
                            <form onSubmit={handleSubmit(handleSignUp)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Name</span>
                                    </label>
                                    <input type="text" {...register("name", {
                                        required: "Name is Required"
                                    })} placeholder="name" className="input input-bordered" />
                                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" {...register("email", {
                                        required: "Email Address is required"
                                    })} placeholder="email" className="input input-bordered" />
                                    {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password"
                                        {...register("password", {
                                            required: "Password is required",
                                            minLength: { value: 6, message: "Password must be 6 characters long" },
                                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                                        })}
                                        placeholder="password" className="input input-bordered" />
                                    <label className="label"> <span className="label-text">Forget Password?</span></label>
                                    {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Specialty</span>
                                    </label>
                                    <select {...register("specialty", { required: true })} className="select select-bordered w-full max-w-xs">
                                        <option value="Buyer">Buyer</option>
                                        <option value="Seller">Seller</option>
                                    </select>
                                </div>
                                <div className="form-control mt-6">
                                    <input className='btn btn-primary w-full' value="Sign Up" type="submit" />
                                </div>
                                <div>
                                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                                </div>
                                <p>Already have an account <Link className='text-secondary' to="/login"><b>Please Login</b></Link></p>
                                <div className="divider">OR</div>
                                <p>mn</p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;