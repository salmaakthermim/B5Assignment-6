import RegistrationForm from '@/components/modules/auth/RegistrationForm';
import { loggedInUser } from '@/redux/features/auth/authSlice';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import ParcelRegister from "@/assets/images/parcel-registsion.jpg";

const RegistrationPage = () => {
  const loggedInData = useSelector(loggedInUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedInData?.name || loggedInData?.email) {
      navigate('/');
    }
  }, [loggedInData?.name, loggedInData?.email, navigate]);

  return (
    <div className="flex min-h-screen">


    {/* Right Side - Form */}
    <div className="flex w-full md:w-1/2 items-center justify-center p-8">
      <div className="max-w-md w-full">
        <RegistrationForm></RegistrationForm>
      </div>
    </div>
      {/* Left Side - Image */}
      <div className="hidden md:flex w-1/2 items-center justify-center bg-gray-100">
      <img
        src={ParcelRegister}
        alt="Login"
        className="h-110 w-full object-cover"
      />
    </div>
  </div>
  );
};
export default RegistrationPage;
