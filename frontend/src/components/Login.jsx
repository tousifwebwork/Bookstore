import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast'
const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        const userinfo = {
             email: data.email, 
             password: data.password
         };
            await  axios.post('http://localhost:3000/user/login', userinfo)
            .then((res)=>{
                console.log(res.data.user);
                if(res.data){
                     toast.success('Login successful!');
                     
                      document.getElementById("my_modal_3").close();  
                     setTimeout(() => {
                 window.location.reload();
                localStorage.setItem('user',JSON.stringify(res.data.user));
                     },1000) 
                 }
                  })
                  .catch((err)=>{
                    if (err.response) {
                      toast.error('Error: ' + err.response.data.message);
                      setTimeout(() => {
                      },2000)
                    }
                  })
    }

    return (
        <>
            <div>
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box w-100">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <button 
                                type="button" 
                                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                                onClick={() => document.getElementById("my_modal_3").close()}
                            >
                                ✕
                            </button>

                            <h3 className="font-bold text-lg">Login</h3>

                            <div className='mt-4'>
                                <div>
                                    <span>Email</span>
                                    <br />
                                    <input 
                                        type="email" 
                                        placeholder='Enter Your Email'
                                        className='w-80 px-3 py-1 border rounded-md outline-none' 
                                        {...register("email", { required: "Email is required" })}
                                    />
                                   {errors.email && <span className='text-red-700'>Email required</span>}
                                </div>

                                <div className='mt-2'>
                                    <span>Password</span>
                                    <br />
                                    <input 
                                        type="password" 
                                        placeholder='Enter Your Password' 
                                        className='w-80 px-3 py-1 border rounded-md outline-none' 
                                        {...register("password", { required: "Password is required" })}
                                    />
                                    {errors.password && <span className='text-red-700'>Password required</span>}
                                </div>

                                <div className='flex justify-between mt-4'>
                                    <button type="submit" className='btn btn-primary px-5'>Login</button>
                                    <p className='mt-2 mr-15'>
                                        Not Registered? 
                                        <Link to="/signup" className='underline text-pink-500 cursor-pointer'>Signup</Link>
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </dialog>
            </div>
        </>
    )
}

export default Login
