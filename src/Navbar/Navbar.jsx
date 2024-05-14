import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <div>
            <div className="list-none flex justify-center gap-4">
                <li><NavLink to="/">Home</NavLink> </li>
                <li><NavLink to="/About">About</NavLink> </li>
                <li><NavLink to="/Carrier">Carrier</NavLink> </li>
                <li><NavLink to="/login">Login</NavLink> </li>
            </div>
            <div className="flex gap-4">
                <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar" >
                    <div className="w-10 rounded-full">
                        <img
                            alt=""
                            src=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;