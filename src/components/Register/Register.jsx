import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";


const Register = () => {

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [validPasswordErrMsg, setValidPasswordErrMsg] = useState('');

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const password2 = e.target.password2.value;
        console.log({name, email, password, password2});
    }

    const validatePassword = e => {
        const password = e.target.value;
        setValidPasswordErrMsg('');
        if (password.length === 0) {
            setValidPasswordErrMsg('');
        } else if (!/[A-Z]/.test(password)) {
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
                                    required
                                    placeholder="Your Name"
                                    className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    required
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
                                        required
                                        placeholder="Password"
                                        className="input input-bordered w-full" />
                                    <span
                                        onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                                        title={isPasswordVisible ? "Hide Password" : "Show Password"}
                                        className="absolute password-show-icons-bg">
                                        {
                                            isPasswordVisible ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                        }
                                    </span>
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Re-type Password</span>
                                </label>
                                <div className="relative">
                                    <input
                                        type={isPasswordVisible ? "text" : "password"}
                                        name="password2"
                                        required
                                        placeholder="Re-type Password"
                                        className="input input-bordered w-full" />
                                    <span
                                        onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                                        title={isPasswordVisible ? "Hide Password" : "Show Password"}
                                        className="absolute password-show-icons-bg">
                                        {
                                            isPasswordVisible ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                        }
                                    </span>
                                </div>
                                <div className="h-4 relative">
                                    {
                                        validPasswordErrMsg && <p className="text-red-500 text-xs absolute left-1 -bottom-3">{validPasswordErrMsg}</p>
                                    }
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary disabled">Register</button>
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