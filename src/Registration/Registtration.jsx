import React, { useContext, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { NavLink } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../Authprovider/AuthProvider';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
const Registtration = () => {
  const [showPassword,setshowPassword] = useState('')
  const { createUser } = useContext(AuthContext);
  const handleSignUp = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name')
    const email = form.get('email')
    const password = form.get('password')
    const url = form.get('url')
    console.log(name, email, password, url)
    createUser (email,password)
        if (password.length < 6) {
          toast.error('password at least 6 number or longer')
          return;
      }
      else if (!/[A-Z]/.test(password)) {
          toast.error('your password need at least 1 laege charcter')
          return;
      }
      else if(!/[a-z]/.test(password)) {
        toast.error('Your password needs at least one lowercase character.');
        return;
      }
      else{
        toast.success('Successfully registration done and go log in page')
        return;
    } 
    
  }
  return (
    <div>
      <Navbar></Navbar>
      <div class=" mx-auto my-8  w-full max-w-sm p-4 bg-red-300 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form class="space-y-6" onSubmit={handleSignUp}>
          <h5 class="text-xl text-white font-medium text-gray-900 dark:text-white">
            Sign in to our platform
          </h5>
          <div>
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left"
            >
              Your name
            </label>
            <input
              type="name"
              name="name"
              id="name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="milon sorkar"
              required
            />
          </div>
          <div>
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left"
            >
              Your password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="••••••••"
                class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
              <span className="absolute top-3 right-3"
                onClick={() => setshowPassword(!showPassword)}>
                {
                  showPassword ? <AiFillEye /> : <AiFillEyeInvisible />
                }
              </span>
            </div>
          </div>
          <div>
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left"
            >
              Your image url
            </label>
            <input
              type="url"
              name="url"
              id="url"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="//https/"
              required
            />
          </div>
    
          <button
            type="submit"
            class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Register to your account
          </button>
          <div className="flex gap-2 justify-center">
            <h3> have a account ? plese</h3>
            <NavLink to="/login" className="text-blue-700">Login</NavLink>
          </div>
        </form>

        <ToastContainer></ToastContainer>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Registtration;