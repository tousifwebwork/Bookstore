import React from 'react'
import { useAuth } from '../context/authProvider';
import toast from 'react-hot-toast';

const Logout = () => {
   const [authUser, setauthUser] = useAuth();
   function handleLogout(){
    try{
    setauthUser({...authUser,user:null});
    localStorage.removeItem("user");
    toast.success("Logout Successful!");
     setTimeout(() => {   window.location.reload();
    },3000) 

    }catch(err){
        toast.error("Error in logout");
        setTimeout(() => {
        },2000)
    }
   }
  return (
    <>
    <button onClick={handleLogout} className='px-3 py-2 text-white bg-red-400 cursor-pointer rounded-xl'>Logout</button>
    </>
  )
}

export default Logout