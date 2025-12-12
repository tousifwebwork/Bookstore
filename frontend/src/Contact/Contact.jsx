import React, { useRef } from 'react'
import NavBar from '../components/NavBar'
import axios from 'axios'
import toast from 'react-hot-toast'


const Contact = () => {
    const emailRef = useRef(null);
    const msgRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const feedback = {
             email: emailRef.current.value, 
             message: msgRef.current.value
         };

        try{
            await axios.post('http://localhost:3000/contact/feedback', feedback);
            toast.success('Feedback sent successfully!');
            emailRef.current.value = '';
            msgRef.current.value = '';
        }catch(err){
            console.log("Error in sending feedback:", err);
            toast.error('Failed to send feedback');
        }
    }



return (
    <>
        <NavBar />
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
                <form onSubmit={handleSubmit} className="bg-white text-gray-500 max-w-96 mx-auto md:p-6 p-4 text-left text-sm rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Need Help? Contact Us</h2>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                        <input ref={emailRef} id="email" className="w-full border border-gray-500/30 outline-none rounded p-2" type="email" placeholder="Enter your email" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="msg" className="block text-gray-700 font-medium mb-2">Message</label>
                        <textarea ref={msgRef} rows="4" id="msg" className="w-full border resize-none border-gray-500/30 outline-none rounded p-2" placeholder="Your Message..." required></textarea>
                    </div>
                    <button type="submit" className="w-full bg-indigo-500 hover:bg-indigo-600/90 active:scale-95 transition py-2.5 rounded text-white font-medium"
                    >Send Message</button>
                </form>
            </div>
        </div>
    </>
)
}

export default Contact