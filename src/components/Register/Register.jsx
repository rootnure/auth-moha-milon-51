import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";


const Register = () => {

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [validPasswordErrMsg, setValidPasswordErrMsg] = useState('');

    const handleRegister = e => {
        e.preventDefault();
        console.log('Register Clicked');
    }

    const validatePassword = e => {
        const password = e.target.value;
        console.log(password);
        setValidPasswordErrMsg('');
        if (!/[A-Z]/.test(password)) {
            setValidPasswordErrMsg('Password must contain at lest one UPPERCASE (A-Z) letter');
        } else if (!/[a-z]/.test(password)) {
            setValidPasswordErrMsg('Password must contain at lest one lowercase (a-z) letter');
        } else if (!/[0-9]/.test(password)) {
            setValidPasswordErrMsg('Password must contain at lest one digit (0-9)');
        } else if (!/[!@#$%^&*()_+\-=[\]{};'~`:"\\|,.<>/?]/.test(password)) {
            setValidPasswordErrMsg('Password must contain at lest one special character');
        } else if (password.length < 6) {
            setValidPasswordErrMsg('Password must be at lest 6 character long');
        }
    }

    return (
        <section className="hero min-h-[calc(100vh-70px)] bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    className="input input-bordered" />
                            </div>
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
                                        onChange={validatePassword}
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
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Re-type Password</span>
                                </label>
                                <div className="relative">
                                    <input
                                        type={isPasswordVisible ? "text" : "password"}
                                        name="password2"
                                        placeholder="Re-type Password"
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
                                {
                                    validPasswordErrMsg && <p className="text-red-500 text-xs absolute left-1 -bottom-4">{validPasswordErrMsg}</p>
                                }
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary disabled">Register</button>
                            </div>
                        </form>
                        <div className="mt-2">
                            <p>Already have an account? <Link to="/login" className="text-blue-500">LogIn</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;