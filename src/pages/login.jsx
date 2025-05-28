import { LogIn } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  // Function to handle Discord login
  const handleDiscordLogin = () => {
    window.location.href = "http://localhost:3000/api/auth/discord";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] to-[#1a0b2e] p-4">
      <div className="bg-[#0a0d16]/80 backdrop-blur-md border border-[#8b5cf6]/30 rounded-2xl p-8 max-w-md w-full shadow-[0_0_20px_rgba(139,92,246,0.7)]">
        <h1 className="text-3xl font-extrabold text-[#a78bfa] mb-4 tracking-widest [text-shadow:0_2px_4px_rgba(0,0,0,0.7)]">
          Login to Mirage Store
        </h1>
        <p className="text-white/80 mb-6">
          Continue to login using Discord!
        </p>
        <div className="flex gap-3">
          <button
            onClick={handleDiscordLogin}
            className="w-full bg-gradient-to-r from-[#4c1d95]/80 to-[#5865F2]/80 backdrop-blur-md border border-[#c4b5fd]/30 text-white hover:bg-[#5865F2]/60 px-4 py-3 rounded-lg flex items-center justify-center transition-all duration-200 shadow-[0_0_10px_rgba(139,92,246,0.7)] hover:shadow-[0_0_15px_rgba(139,92,246,1)] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]"
            aria-label="Login with Discord"
          >
            <LogIn className="mr-2 h-5 w-5" />
            Login with Discord
          </button>
          <button
            onClick={() => navigate(-1)}
            className="bg-gradient-to-r from-[#64748b]/80 to-[#334155]/80 backdrop-blur-md border border-[#c4b5fd]/30 text-white hover:bg-[#334155]/60 px-4 py-3 rounded-lg flex items-center justify-center transition-all duration-200 shadow-[0_0_10px_rgba(100,116,139,0.7)] hover:shadow-[0_0_15px_rgba(100,116,139,1)] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]"
            aria-label="Go Back"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}

// this is the login page okkk

//here when we click on the login with discord button handle discord login function will be called and it will redirect to the discord auth page

//after clicking on the authoize button in the discord auth page it will redirect to the callback url which is set in the discord developer portal and then it will redirect to the mirage store home page with the user data in the session

