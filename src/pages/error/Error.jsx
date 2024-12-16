import { NavLink } from 'react-router-dom';

const Error = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center py-28">
      <h2 className="font-bold text-5xl">404</h2>
      <div className="flex items-center justify-center">
        <img src="https://i.ibb.co.com/MkmFJVc/error.webp" alt="" />
      </div>
      <h2 className="font-bold text-4xl">Page Not Found!!</h2>
      <NavLink to='/' className='btn font-bold text-base bg-gray-500 text-white hover:text-black'>Go Back</NavLink>
    </div>
  );
};

export default Error;