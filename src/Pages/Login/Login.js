import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const { signIn } = useContext(AuthContext);
  const [loginError, setLoginError] = useState('');
  const [loginUserEmail, setLoginUserEmail] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';

  const handleLogin = data => {
      console.log(data);
      setLoginError('');
      signIn(data.email, data.password)
          .then(result => {
              const user = result.user;
              console.log(user);
              setLoginUserEmail(data.email);
          })
          .catch(error => {
              console.log(error.message)
              setLoginError(error.message);
          });
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
                            <form onSubmit={handleSubmit(handleLogin)}>
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
                                            minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                                        })}
                                        placeholder="password" className="input input-bordered" />
                                    <label className="label"> <span className="label-text">Forget Password?</span></label>
                                    {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                                </div>
                                <div className="form-control">
                                    <input className='btn btn-primary w-full' value="Sign In" type="submit" />
                                </div>
                                <div>
                                    {loginError && <p className='text-red-600'>{loginError}</p>}
                                </div>
                                <p className='m-4 text-center'>Create Account As <Link className='text-secondary' to="/signup"><b>Job Candidate</b></Link></p>
                                <div className="divider">OR</div>
                                <p className='text-center'>Create Account As <Link className='text-secondary' to="/signup"><b>Employer</b></Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;