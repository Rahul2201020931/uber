import React, {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { UserDataContext } from '../context/UserContext';   

const UserProtectWrapper = ({ children }) => {
    // Add your user authentication logic here
    // Example: check if user is authenticated, redirect if not
   const  token = localStorage.getItem('token')
    const navigate = useNavigate();
    if (!token) {
        // Redirect to login page if user is not authenticated
        navigate('/login');
        return null; // or a loading spinner
    }

    return (
        <>
            {children}
        </>
    );
};

export default UserProtectWrapper;