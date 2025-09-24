import LoginForm from '@/components/modules/auth/LoginForm';
import { loggedInUser } from '@/redux/features/auth/authSlice';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import ParcelLogin from "../assets/images/parcel-login.jpg";

const LoginPage = () => {
  const loggedInData = useSelector(loggedInUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedInData?.name || loggedInData?.email) {
      navigate('/');
    }
  }, [loggedInData?.name, loggedInData?.email, navigate]);

  return (
    <div className="flex min-h-screen">
    {/* Left Side - Image */}
    <div className="hidden md:flex w-1/2 items-center justify-center bg-gray-100">
      <img
        src={ParcelLogin}
        alt="Login"
        className="h-full w-full object-cover"
      />
    </div>

    {/* Right Side - Form */}
    <div className="flex w-full md:w-1/2 items-center justify-center p-8">
      <div className="max-w-md w-full">
        <LoginForm />
      </div>
    </div>
  </div>
  );
};
export default LoginPage;
