import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const LogIn = () => {

    const { userSignIn } = useContext(AuthContext);

    const navigate = useNavigate();

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const handleLogInSubmit = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log({ email, password });

        userSignIn(email, password)
            .then(res => {
                console.log(res.user)
                e.target.reset();
                navigate('/');
            })
            .catch(err => console.error(err))
    }

    return (
        <section className="hero min-h-[calc(100vh-70px)] bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
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
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Login</button>
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