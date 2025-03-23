import back from '../assets/Sweets.jpg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div 
      className='h-screen flex justify-center items-center bg-cover bg-center relative'
      style={{ backgroundImage: `url(${back})` }}
    >
      {/* Light blur overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm"></div>

      {/* Login form with reduced blur effect */}
      <div className='w-[30%] h-auto rounded-3xl backdrop-blur-2xl shadow-2xl py-6 '>
        <h1 className='flex gap-4 justify-center items-center text-2xl font-bold text-white'>
          <FontAwesomeIcon icon={faUser} />
          Login
        </h1>

        <form className='flex flex-col gap-8 justify-center items-center my-8' onSubmit={handleSubmit}>
          <div className="relative w-[70%]">
            <span className="absolute inset-y-0 right-0 flex items-center pr-3">
              <FontAwesomeIcon icon={faUser} className="text-white" />
            </span>
            <input
              type="text"
              required
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border-b-2 text-white bg-transparent focus:outline-none focus:border-b-black"
            />
          </div>

          <div className="relative w-[70%]">
            <span className="absolute inset-y-0 right-0 flex items-center pr-3">
              <FontAwesomeIcon icon={faLock} className="text-white " />
            </span>
            <input
              type="password"
              required
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-b-2 text-white bg-transparent focus:outline-none focus:border-b-black"
            />
          </div>

          <button className='w-[50%] border border-white bg-transparent rounded-md flex justify-center p-2 mt-3 mb-2 mx-auto font-bold text-white'>
            LOGIN
          </button>
        </form>

        <p className='flex justify-center mx-auto'>
          Don&apos;t have an account?
          <span className='font-semibold text-white pl-2'>
            <Link to='/register'>Sign up</Link>
          </span>
        </p>
      </div>
    </div>
  );
}
