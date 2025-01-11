import { Link } from 'react-router-dom';
import { FaHome, FaSignInAlt, FaUserPlus } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between items-center">
      <h1 className="text-xl font-bold">MyApp</h1>
      <div className="flex space-x-4">
        <Link to="/" className="flex items-center space-x-1 hover:text-gray-300">
          <FaHome />
          <span>Home</span>
        </Link>
        <Link to="/login" className="flex items-center space-x-1 hover:text-gray-300">
          <FaSignInAlt />
          <span>Login</span>
        </Link>
        <Link to="/register" className="flex items-center space-x-1 hover:text-gray-300">
          <FaUserPlus />
          <span>Register</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
