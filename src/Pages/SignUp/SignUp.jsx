import { useForm } from "react-hook-form";
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from "../../Provider/AuthProviders";

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser,updateUserProfile } = useContext(AuthContext);
    const onSubmit = data =>{
        console.log(data)
        createUser(data.email, data.password)
        .then(result=>{
            const logedUser = result.user;
            updateUserProfile(data.photoURL)
            console.log(logedUser);

        })
        .catch(error=> console.log(error))
        
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <h1 className="text-5xl font-bold">Sign Up now!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })}  placeholder="name" className="input input-bordered" />
                                { errors.firstName?.type === 'required' && <p className="text-red-400" role="alert"> name is required</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                {/* <input type="text" {...register("photoURL", { required: true })}  placeholder="photo url" className="input input-bordered" />
                                { errors.firstName?.type === 'required' && <p className="text-red-400" role="alert"> Photo Url is required</p>} */}

                                <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })}  placeholder="email" className="input input-bordered" />
                                { errors.firstName?.type === 'required' && <p className="text-red-400" role="alert"> email is required</p>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password",
                                 { required: true })}  placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                { errors.firstName?.type === 'required' && <p className="text-red-400" role="alert"> password is required</p>}
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p className='px-4 pb-5'>Already have an account? please <Link className='text-orange-600' to="/login">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;