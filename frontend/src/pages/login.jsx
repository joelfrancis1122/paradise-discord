import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    const error = params.get("error");

    if (token) {
      localStorage.setItem("jwt", token);
      // Redirect to home or dashboard
      navigate("/");
    } else if (error) {
      // Show error message or redirect
      alert("Login failed: " + error);
      navigate("/");
    }
  }, [navigate]);

  return <div>Logging in...</div>;
}