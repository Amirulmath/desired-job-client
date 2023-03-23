import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import userPhoto from '../../../assets/Profile1.png';
import logo from '../../../assets/Logo.png'

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
    }
    
    const menuItems = <>

        <li className='font-semibold mr-3'><Link to='/'>Home</Link></li>
        <li className='font-semibold mr-3'><Link to='/about'>About</Link></li>
        <li className='font-semibold mr-3'><Link to='/contact'>Contact Us</Link></li>
        <li className='font-semibold mr-3'><Link to='/blog'>Blog</Link></li>

    </>

    return (
        <div>
            <div className="navbar bg-[#000066] px-5">

                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-light lg:hidden mr-10">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                            {menuItems}
                        </ul>
                    </div>
                    <div className="avatar">
                        <div className="w-16 rounded-xl">
                            <img src={logo} alt="" />
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
                                <div className=" text-center text-white text-xl bg-primary leading-tight z-10 rounded-full md:w-16 w-12  md:h-16 h-12 border-2 border-primary cursor-pointer hover:ring hover:ring-offset-2 duration-500 ring-primary">
                                    <img src={user?.photoURL ? user?.photoURL : userPhoto} alt={user?.displayName} />
                                </div>

                            </div>

                        </label>

                        <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-lg md:w-52 h-52">
                            <p className='text-center mb-5 md:font-bold'>{user?.displayName}</p>
                            <p className='mb-3 text-center'>
                                {
                                    user ? <p className='text-center btn  btn-sm rounded-full' onClick={handleLogOut}><Link to='/login'>SignOut</Link></p>
                                        :
                                        <p className='text-center btn  btn-sm rounded-full'><Link to='/login'>Sign In</Link></p>

                                }
                            </p>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;