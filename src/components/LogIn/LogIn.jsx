import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";


const LogIn = () => {

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const handleLogInSubmit = e => {
        e.preventDefault();
        console.log('login clicked');
    }

    return (
        <section className="hero min-h-[calc(100vh-70px)] bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleLogInSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="relative">
                                    <input
                                        type={isPasswordVisible ? "text" : "password"}
                                        name="password"
                                        placeholder="Password"
                                        className="input input-bordered w-full" />
                                    <span
                                        onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                                        title={isPasswordVisible ? "Hide Password" : "Show Password"}
                                        className="absolute top-0 bottom-0 right-0 flex items-center p-3 cursor-pointer text-lg">
                                        {
                                            isPasswordVisible ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                        }
                                    </span>
                                </div>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div className="mt-2">
                            <p>Don&apos;t have an account? <Link to="/register" className="text-blue-500">Register</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LogIn;