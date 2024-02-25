import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import { toast } from 'react-toastify';
import SocialLogin from '../SocialLogin/SocialLogin';
import login from '../../../../images/signin.jpg'
const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const emailRef = useRef('');
    const passwordRef = useRef('');
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    // const notify = () => toast("Email Sent !");
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (user) {
        navigate(from, { replace: true });

    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        // console.log(email,password)
        signInWithEmailAndPassword(email, password);
        // navigate(from, { replace: true });
    }
    const navigateRegister = (event) => {
        navigate('/register');
    }
    const resetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        if (email) {
            toast('Sent email');
        }
        else {
            toast('Please enter email address');
        }

    }
    let errorElement;
    if (error) {
        errorElement =   <div className="alert alert-error shadow-lg">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span>Error! {error?.message}</span>
        </div>
      </div>

    }
    return (
        <div>
                        <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <div className="card-body">
                            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign In</h2>
                            {errorElement}
                            <form onSubmit={handleSubmit}>
                                <div  className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input required ref={emailRef} type="email" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input required ref={passwordRef} type="password" placeholder="password" className="input input-bordered" />

                                </div>
                                <div className="form-control mt-6">
                                    <button type='submit' className="btn btn-primary">Login</button>
                                </div>
                            </form>
                 
                            <label className="label">
                                <p>New to AdminOgram? <Link to="/register" className='label-text-alt link link-hover text-primary decoration-none' >Please Register</Link ></p>
                            </label>
                            <label className="label">
                                <p>Forget Password? <button onClick={resetPassword} className="btn btn-link label-text-alt link link-hover text-primary decoration-none" to="/register" >Reset Password</button ></p>
                            </label>
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>

                    <img className=" mask mask-parallelogram object-cover object-center rounded" alt="hero" src={login} />

                </div>
            </div>
        </div>
    );
};

export default Login;