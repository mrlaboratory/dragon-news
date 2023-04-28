import React from 'react';
import logo from '../../assets/assets/logo.png'
import Marquee from "react-fast-marquee";
import { NavLink } from 'react-router-dom';
import moment from 'moment';



const Header = () => {
    return (
        <div>
            <div className='text-center flex justify-center flex-col items-center pt-4'>
                <img src={logo} alt="" />
                <h3>Journalism Without Fear or Favour</h3>
                <h3>{moment().format('MMMM D YYYY')}</h3>

            </div>
            <div className='flex p-2 rounded-lg bg-[#F3F3F3] mt-3'>
                <p className='btn bg-[#D72050] rounded-lg text-white border-none'>Latest : </p>
                <Marquee > Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus nihil, inventore odio voluptatem quisquam ex sunt temporibus eum accusamus libero. </Marquee>

            </div>
            <div className="navbar bg-base-100 mt-5 flex justify-between">
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li> <NavLink className="btn btn-sm text-white mr-2" to='/'>Home</NavLink> </li>
                        <li> <NavLink className="btn btn-sm text-white mr-2" to='/about'>About</NavLink> </li>
                        <li> <NavLink className="btn btn-sm text-white mr-2" to='/contact'>Contact</NavLink> </li>
                    </ul>
                </div>
                <div className="flex-none gap-2">
                 
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;