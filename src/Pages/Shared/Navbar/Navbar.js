import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menuItems = <>

        <li className='font-semibold mr-3'><Link to='/'>Home</Link></li>
        <li className='font-semibold mr-3'><Link to='/all-parts'>About</Link></li>
        <li className='font-semibold mr-3'><Link to='/portfolio'>Contact Us</Link></li>
        <li className='font-semibold mr-3'><Link to='/blogs'>Blog</Link></li>

    </>

    return (
        <div>
            <div className="navbar bg-[#000066] px-5">

                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                            {menuItems}
                        </ul>
                    </div>
                    <div className="avatar md:block hidden">
                        <div className="w-16 rounded-xl">
                            {/* <img src={logo} alt="" /> */}
                        </div>
                    </div>
                </div>
                <div>
                    <label for='dashboard-sidebar' tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>


                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal  text-white">
                        {menuItems}
                    </ul>
                </div>
                <div className='navbar-end'>
                    <div className="dropdown dropdown-hover dropdown-end">

                        <label tabIndex="0">

                            <div className="avatar">
                                <div>Login</div>

                                <div className=" text-center text-white text-xl bg-primary leading-tight z-10 rounded-full md:w-16 w-12  md:h-16 h-12 border-2 border-primary cursor-pointer hover:ring hover:ring-offset-2 duration-500 ring-primary">

                                    {/* <img src={user?.photoURL ? user?.photoURL : userPhoto} alt={user?.displayName} /> */}
                                </div>

                            </div>

                        </label>

                        <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-lg md:w-52 h-52">
                            {/* <p className='text-center mb-5 md:font-bold'>{user?.displayName}</p> */}
                            <p className='mb-3 text-center'>
                                {/* {
                                    user ? <p className='text-center btn  btn-sm rounded-full' onClick={logout}><Link to='/login'>SignOut</Link></p>
                                        :
                                        <p className='text-center btn  btn-sm rounded-full'><Link to='/login'>Login</Link></p>

                                } */}
                            </p>
                            <p className='text-center btn  btn-sm rounded-full'><Link to='/dashboard'>Dashboard</Link></p>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;