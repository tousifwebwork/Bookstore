import React from "react";
import { Link, replace, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form"
import axios from "axios";
import toast from "react-hot-toast";

const Signup = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";



    const {
            register,
            handleSubmit,
            formState: { errors },
        } = useForm()
    
        const onSubmit = async (data) => {
          const userinfo = {fullname: data.fullname, email: data.email, password: data.password};
         await  axios.post('http://localhost:3000/user/signup', userinfo)
          .then((res)=>{
            console.log(res.data.user);
            if(res.data){
             toast.success('Signup successful!');
              navigate(from,{replace:true} );
            
            }
            localStorage.setItem('user',JSON.stringify(res.data.user));
          })
          .catch((err)=>{
            if (err.response) {
              toast.error('Signup Error: ' + err.response.data.message);
            } 
          })
        }
    


  return (
    <>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center px-4 py-10">

       
        <div className="relative bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 w-full max-w-md">

          <Link
            to="/"
            className="absolute right-4 top-4 text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white text-xl"
          >
            ✕
          </Link>

          {/* Title */}
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
            Create an Account
          </h2>

          {/* Form */}
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>

            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="Your name"
                className="mt-1 w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg 
                bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 
                outline-none focus:ring-2 focus:ring-blue-500"
                {...register("fullname", { required: "Username is required" })}
              />
               {errors.fullname && <span className='text-red-700'>Username required</span>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="example@gmail.com"
                className="mt-1 w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg 
                bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 
                outline-none focus:ring-2 focus:ring-blue-500"
                {...register("email", { required: "Email is required" })}
              />
                {errors.email && <span className='text-red-700'>Email required</span>}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Your password"
                className="mt-1 w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg 
                bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 
                outline-none focus:ring-2 focus:ring-blue-500"
                {...register("password", { required: "Password is required" })}
              />
                {errors.password && <span className='text-red-700'>Password required</span>}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-200"
            >
              Sign Up
            </button>
          </form>

          {/* Redirect */}
          <p className="mt-6 text-center text-gray-700 dark:text-gray-300">
            Already have an account?{" "}
            <button
              onClick={() => document.getElementById("my_modal_3").showModal()}
              className="text-blue-500 hover:underline"
            >
              Log in
            </button>
          </p>

          <Login />
        </div>
      </div>
    </>
  );
};

export default Signup;
