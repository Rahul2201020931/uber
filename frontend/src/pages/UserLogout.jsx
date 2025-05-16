import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserLogout = () => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const logoutHandler = async () => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/logout`, {}, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.status === 200) {
                localStorage.removeItem('token');
                navigate('/login');
            }
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };
    return (
        <div>
            <h2>You have been logged out.</h2>
        </div>
    );
};

export default UserLogout;