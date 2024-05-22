import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../Authprovider/AuthProvider';

const Navbar = () => {
    const {user,logOut} = useContext(AuthContext) ;

    const handleSignOut = e => {
      logOut()
      .then()
      .catch()
    }
    return (
        <div className="navbar bg-base-200 animate__animated animate__backInLeft animate__delay-1s">
            <div className="navbar-start">
                <div className='hidden sm:block'><h1 className='text-2xl font-extrabold'>Dream <span className='text-yellow-300  '>Haven</span></h1></div>
                <div className="dropdown block sm:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
                        <li><NavLink to="/">Home</NavLink> </li>
                        <li><NavLink to="/demo">Demo</NavLink> </li>
                        <li><NavLink to="/about">About</NavLink> </li>
                        <li><NavLink to="/login">Login</NavLink> </li>
                    </ul>
                </div>
            </div>
            <div className="list-none gap-4 text-xl font-semibold hidden lg:flex md:flex">
                <li><NavLink to="/"  activeClassName="active">Home</NavLink> </li>
                <li><NavLink to="/Registration">Register</NavLink> </li>
            </div>
            <div className="navbar-end">
               {
                user ?  
                <button onClick={handleSignOut} activeClassName="active" className="bg-yellow-300 y px-3 py-1 rounded-lg text-[15px] ">
                SignOut</button> 
                : 
               <li className='list-none'><NavLink to="/login" activeClassName="active"> <button className="bg-yellow-300 y px-3 py-1 rounded-lg text-[15px] ">
               SignIn
               </button></NavLink></li>
               }
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS Navbar component" src="https://i.ibb.co/GtRR5nx/banner.jpg" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;