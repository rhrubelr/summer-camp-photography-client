import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProviders";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import { useState } from "react";
import SocialLogin from "../Login/SocialLogin";

const Signin = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";





    const [erroror, setError] = useState('')
    console.log(erroror)
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data.photoURL)
        createUser(data.email, data.password)
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const saveUser = { role: data.role, name: data.name, email: data.email };
                        fetch("https://photography-school-server.vercel.app/users", {
                            method: "POST",
                            headers: {
                                "content-type": "application/json",
                            },
                            body: JSON.stringify(saveUser),
                        })
                            .then((res) => res.json())
                            .then((datas) => {
                                if (datas.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: "top-center",
                                        icon: "success",
                                        title: "Create account succesfully",
                                        showConfirmButton: false,
                                        timer: 1500,
                                    });
                                    navigate(from, { replace: true });
                                }
                            });
                        navigate('/')
                    })
                    .then((error) => {
                        console.log(error);

                    });
            })
            .catch((error) => {

                console.log(error)
            });
    };




    const [errorPass, setErrorPass] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [password, setPassword] = useState("")
    console.log(password)


    const checkValidation = (e) => {
        const confPass = e.target.value;
        setConfirmPassword(confPass);
        if (password !== confPass) {
            setErrorPass("password don't match")
        }
        else {
            setErrorPass("password don't match")
        }
    }









    //   console.log(errors);
    return (
        <div>
            <Helmet>
                <title>Photography school | Signup</title>
            </Helmet>
            <div className=" mt-11" data-aos="fade-up">
                <div className=" w-10/12 md:w-4/12 lg:w-5/12 mx-auto  ">
                    <div className="card  w-full  shadow-2xl bg-teal-950 ">
                        <h2 className="text-center pt-5 text-3xl text-sky-500 ">
                            Please Sign up Here
                        </h2>
                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder=" your name"
                                        {...register("name", { required: true, maxLength: 80 })}
                                        className="input input-bordered text-black"
                                    />


                                    {errors.name && <p className="text-red-500">name required</p>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder=" your email"
                                        {...register("email", { required: true, maxLength: 80 })}
                                        className="input input-bordered text-black"
                                    />
                                    {erroror ? <><p className="text-red-500">already use this email</p></> : ' '}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Password</span>
                                    </label>
                                    <input
                                        defaultValue={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        type="password"
                                        placeholder=" your password"
                                        {...register("password", {
                                            required: true,
                                            maxLength: 80,
                                            pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-])/
                                        })}
                                        className="input input-bordered text-black"
                                    />
                                    {
                                        errors.password?.type === 'required' &&
                                        <p className="text-red-500">Passwors required</p>
                                    }
                                    {
                                        errors.password?.type === 'minLength' &&
                                        <p className="text-red-500">Passwors must be 6 characters</p>
                                    }
                                    {
                                        errors.password?.type === 'maxLength' &&
                                        <p className="text-red-500">Passwors must be less than 20 characters</p>
                                    }
                                    {
                                        errors.password?.type === 'pattern' &&
                                        <p className="text-red-500">Passwors must be one uppercase one lowercase one spicial characters</p>
                                    }

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">
                                            Confirm Password
                                        </span>
                                    </label>
                                    <input
                                        defaultValue={confirmPassword}
                                        onChange={(e) => checkValidation(e)}
                                        type="password"
                                        placeholder="confirm your password"
                                        {...register("confirmPassword", {
                                            required: true,
                                            maxLength: 80,
                                            pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-])/
                                        })}
                                        className="input input-bordered text-black"
                                    />
                                    {
                                        errors.confirmPassword?.type === 'required' &&
                                        <p className="text-red-500">Passwors required</p>
                                    }


                                    {
                                        errors.confirmPassword?.type === 'pattern' &&
                                        <p className="text-red-500">Don't match password</p>
                                    }

                                    {/* {
                                        errors.confirmPassword?.type === 'minLength' &&
                                        <p className="text-red-500">Passwors must be 6 characters</p>
                                    } */}
                                    {/* {
                                        errors.confirmPassword?.type === 'maxLength' &&
                                        <p className="text-red-500">Passwors must be less than 20 characters</p>
                                    } */}
                                    {/* {
                                        errors.confirmPassword?.type === 'pattern' &&
                                        <p className="text-red-500">Passwors must be one uppercase one lowercase one spicial characters</p>
                                    } */}

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Photo URL</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="your photo url"
                                        {...register("photoURL", {
                                            required: true,
                                        })}
                                        className="input input-bordered text-black"
                                    />
                                    {errors.photoURL && (
                                        <p className="text-red-500">photo URL required</p>
                                    )}
                                </div>
                                <div className="form-control mt-6">
                                    <input
                                        type="submit"
                                        value="Sign up"
                                        className="btn btn-primary"
                                    />
                                </div>
                            </form>
                            <p className="mt-3 text-white text-center">
                                already have an your acccout?{" "}
                                <Link to="/login">
                                    {" "}
                                    <span className="text-red-500">Login</span>
                                </Link>{" "}
                            </p>
                            <div className="divider">OR</div>
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;
