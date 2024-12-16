import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import toast from 'react-hot-toast';
import logo from '../../assets/logo.png'

const Navbar = () => {
  const {user, logoutUser, setLoading} = useContext(AuthContext);

  

  const handleLogOut = ()=>{
    logoutUser()
    .then(()=>{
      toast.success("Log Out Success!!")
      setLoading(false);
    })
    .catch(err=> toast.error(`${err.message}`))
  }


  const links = <>
     <li><NavLink  
     className={({ isActive }) =>
              `hover:border-l-0 hover:border-r-0 hover:border-t-0 border-blue-800 hover:bg-transparent hover:border-b-2 bg-transparent font-bold text-base ${
                isActive ? 'border-b-2 border-l-0 border-r-0 border-t-0 bg-transparent' : ''
              }`}
      to='/'>Home</NavLink></li>     
     <li><NavLink 
     className={({ isActive }) =>
      `hover:border-l-0 hover:border-r-0 hover:border-t-0 border-blue-800 hover:bg-transparent hover:border-b-2 bg-transparent font-bold text-base ${
        isActive ? 'border-b-2 border-l-0 border-r-0 border-t-0 bg-transparent' : ''
      }`}
     to='/find-job'>Jobs</NavLink></li>     
     {
      user && <li><NavLink
      className={({ isActive }) =>
        `hover:border-l-0 hover:border-r-0 hover:border-t-0 border-blue-800 hover:bg-transparent hover:border-b-2 bg-transparent font-bold text-base ${
          isActive ? 'border-b-2 border-l-0 border-r-0 border-t-0 bg-transparent' : ''
        }`} 
      to='/my-applications'>My Applications</NavLink></li>
     }    
     {
      user && <li><NavLink 
      className={({ isActive }) =>
        `hover:border-l-0 hover:border-r-0 hover:border-t-0 border-blue-800 hover:bg-transparent hover:border-b-2 bg-transparent font-bold text-base ${
          isActive ? 'border-b-2 border-l-0 border-r-0 border-t-0 bg-transparent' : ''
        }`}
      to='/add-job'>Add a Job</NavLink></li>
     } 
     {
      user && <li><NavLink 
      className={({ isActive }) =>
        `hover:border-l-0 hover:border-r-0 hover:border-t-0 border-blue-800 hover:bg-transparent hover:border-b-2 bg-transparent font-bold text-base ${
          isActive ? 'border-b-2 border-l-0 border-r-0 border-t-0 bg-transparent' : ''
        }`}
      to='/my-posted-job'>My Posted Job</NavLink></li>
     } 
     {
      user && <li><Link to='' onClick={handleLogOut} className="lg:hidden">Log out</Link></li>
     } 
  </>
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <Link to='/' className="btn font-bold text-xl bg-transparent hover:bg-transparent border-none">
          <img 
          className='w-10 h-10'
          src={logo} 
          alt="" />
          <p>Job Box</p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex gap-2 text-base font-semibold">
          {links}
        </ul>
      </div>
      <div className="navbar-end flex gap-2">
        {
          user?<>
          <div 
           title={user && user?.displayName}
          className='rounded-full h-12 w-12 border-2 overflow-hidden'>
             <img 
            className="w-full h-full object-cover"
            src={user && user?.photoURL} 
            alt="user img" />
          </div>
          <button onClick={handleLogOut} className="hidden lg:flex btn font-bold text-base">Log out</button>
          </>:<>
          <Link to='/login' className="btn font-bold text-base">Login</Link>
          </>
        }
        {/* responsive dropdown */}
        <div className="dropdown dropdown-end"> 
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow flex flex-col gap-2 font-semibold text-base">
            {links}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;