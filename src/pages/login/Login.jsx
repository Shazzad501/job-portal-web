import React, { useContext, useEffect, useRef, useState } from 'react';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import toast from 'react-hot-toast';
import { sendPasswordResetEmail } from 'firebase/auth';
import auth from '../../firebase/firebase.config';
import { Typewriter } from 'react-simple-typewriter';
import loginLotti from "../../assets/login.json"; 
import Lottie from 'react-lottie-player';
// import axios from 'axios';

const Login = () => {
  const {setUser, loginUser, createUserWithGoogle, setLoading} = useContext(AuthContext)
  const navigate = useNavigate()
  // eye pass show stat
  const [showPass, setShowPass] = useState(false)
  const emailRef = useRef()
  const location = useLocation()
  const [error, setError]=useState("")

  // redirect path
  const redirectPath = location?.state?.from?.pathname || '/';


  // handle login
  const handleLogin=(e)=>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    
    // state resate
    setError('')

      loginUser(email, password)
      .then(res=>{
        setUser(res.user);
        toast.success("Login Success!!")
        navigate(redirectPath)
        // Reset the form fields after successful login
        e.target.reset();
        setLoading(false);
      })
      .catch(err=>{
        setError(`${err.message}!!`)
      })
    
  }

  // handle google login function
  const handleGoogleLogin=()=>{
    createUserWithGoogle()
    .then(res=>{
      setUser(res.user);
      toast.success("Login Success!!")
      navigate(redirectPath)
      setLoading(false)
    })
    .catch(err=> toast.error(`${err.message}`))
  }

  // handle forget password
  const handleForgotPassword=()=>{
    const email = emailRef.current.value;
    // error state reset
    setError("")

    if(!email){
      setError("Please enter a valid email")
    }
    else{
      sendPasswordResetEmail(auth, email)
      .then(()=>{
        toast.success("Sent a mail for your mail box!")
        window.open("https://mail.google.com/", "_blank")
      })
      .catch(err=>{
        setError(`${err.message}`)
      })
    }
  }

  useEffect(()=>{
    // dynamic title
    // document.title="Login || Job Portal"
  }, [])
  return (
    <div className="flex items-center justify-center min-h-screen py-6">
        <div  className="card bg-base-100 w-full max-w-md py-16 px-5 shrink-0 rounded-md  border-2">
          <h2 className="font-bold text-xl text-center ">
          <Typewriter
                words={[
                  "Login your account",
                ]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
          </h2>
          <div className='flex justify-center -mb-10'>
            <Lottie
            loop
            animationData={loginLotti}
            play
            className="w-28 h-28"
            />
          </div>
          <form onSubmit={handleLogin} className="card-body">
            {/* Email filed */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-base">Email Address</span>
              </label>
              <input 
              ref={emailRef}
              name="email"
              type="email" 
              placeholder="demo.mail@gamil.com" 
              className="input input-bordered" required />
            </div>
            {/* Email filed */}

            {/* password filed */}
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label> 
              <input 
              type={showPass ? 'text' : 'password'}
              name='password' 
              placeholder="password" 
              className="input input-bordered" required />
              <button onClick={()=>setShowPass(!showPass)} className='btn btn-xs absolute right-2 top-12'>{showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</button>
              <label className="label">
                <Link to='' onClick={handleForgotPassword} className="label-text-alt link link-hover">Forgot password?</Link>
              </label>
            </div>
            {/* password filed */}

            <div>
              {
                error &&  <label className="label">
                <span className="label-text text-red-600">{error}</span>
              </label> 
              }
            </div>

            <div className="form-control mt-6">
              {/* <button className="btn bg-[#073B4c] font-bold text-base text-white hover:bg-[#073B4c]">Login</button> */}

              <input  type="submit" value="Login" className="btn bg-gradient-to-tr from-blue-600 to-blue-800 font-bold text-base text-white hover:bg-gradient-to-tl "/>

              <button onClick={handleGoogleLogin} className="btn mt-6 bg-gradient-to-tl from-blue-600 to-blue-800 hover:bg-gradient-to-tr font-bold text-base text-white"><FaGoogle></FaGoogle>Login with Google</button>
            </div>
          </form>
          <p className='font-semibold text-sm text-center'>Don't Have An Account? <Link to='/register' className='font-semibold text-sm text-red-600 underline'>Register</Link></p>
        </div>
    </div>
  );
};

export default Login;