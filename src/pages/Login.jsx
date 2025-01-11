import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import FormInput from '../components/FormInput';
import Loader from '../components/Loader';

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', formData);
      toast.success('Login successful!');
      console.log('User logged in:', response.data);
    } catch (error) {
      toast.error(error.response?.data?.message || 'Login failed!');
      console.error('Login failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 py-6">
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
        />
        {loading ? <Loader /> : <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Login</button>}
      </form>
    </div>
  );
}

export default Login;
