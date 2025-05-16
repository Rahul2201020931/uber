import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CaptainLogout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Clear captain's auth data (adjust key as needed)
        localStorage.removeItem("captainToken");
        localStorage.removeItem("captainInfo");
        // Redirect to login or home page
        navigate("/captain/login", { replace: true });
    }, [navigate]);

    return (
        <div>
            <h2>Logging out...</h2>
        </div>
    );
};

export default CaptainLogout;