import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export default function AuthSuccess() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get("token");

    if (!token) {
      navigate("/login");
      return;
    }

    // Save token (optional, or use it directly)
    localStorage.setItem("mirage_token", token);

    // Fetch user info from backend using token
    axios
      .get("http://localhost:3000/api/auth/me", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        const user = res.data.user;
        console.log("User info fetched successfully:", user);
        localStorage.setItem("mirage_user", JSON.stringify(user)); 
        navigate("/"); // Redirect to homepage or dashboard
      })
      .catch((err) => {
        console.error("Failed to fetch user info", err);
        navigate("/error");
      });
  }, [location, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center text-white">
      Logging you in...
    </div>
  );
}
