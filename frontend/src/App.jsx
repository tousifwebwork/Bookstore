import { Toaster } from 'react-hot-toast';
import Signup from "./components/Signup"
import Courses from "./Courses/Courses"
import Home from "./Home/Home"
import {Navigate, Route, Routes } from "react-router-dom"
import { useAuth } from './context/authProvider';
import Contact from './Contact/Contact';
import About from './components/About';

const App = () => {

    const [authUser, setauthUser] = useAuth();

  return (
    <>
    <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/course" element={authUser ? <Courses /> : <Navigate to="/signup" />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/signup" element={<Signup />} />
         <Route path="/about" element={<About />} />
    </Routes>
    <Toaster />
    </div>
    </>
  )
}

export default App
