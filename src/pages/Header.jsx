import { Globe, LogIn, LogOut } from "lucide-react"; // Changed LogIn to LogOut
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCurrency } from "../context/CurrencyContext";
import Cart from "./Cart";
import cartIcon from "/cart.png";
import starsSparkle from "/stars.gif";

export default function Header({ cart, removeFromCart, updateCartQuantity, clearCart }) {
  const { currency, setCurrency } = useCurrency();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);
  const [language, setLanguage] = useState({ name: "English", code: "en" });
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [user, setUser] = useState(null);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const navigate = useNavigate();
  const flipSoundRef = useRef(new Audio("/sounds/wind.wav"));

  const closeCart = () => {
    flipSoundRef.current.currentTime = 0;
    flipSoundRef.current.play();
    setIsCartOpen(false);
  };

  useEffect(() => {
    // Try to get user from localStorage
    const userStr = localStorage.getItem("mirage_user");
    if (userStr) {
      try {
        setUser(JSON.parse(userStr));
      } catch {
        setUser(null);
      }
    } else {
      setUser(null);
    }
  }, []);

  // Optionally, listen for storage changes (e.g., login in another tab)
  useEffect(() => {
    const handleStorage = () => {
      const userStr = localStorage.getItem("mirage_user");
      if (userStr) {
        setUser(JSON.parse(userStr));
      } else {
        setUser(null);
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  return (
    <>
      <header className="container mx-auto flex items-center justify-between p-4 gap-3 bg-gradient-to-r from-[#1a0b2e]/80 to-[#0f172a]/80 backdrop-blur-md border border-[#8b5cf6]/30 rounded-2xl shadow-[0_0_15px_rgba(139,92,246,0.6)] md:animate-glow-pulse">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-extrabold text-[#a78bfa] tracking-widest [text-shadow:_0_2px_4px_rgba(0,0,0,0.7)]">
            {user ? `Welcome, ${user.username}` : "WELCOME To Mirage Store"}
          </h2>
          {user && user.avatar && (
            <img
              src={user.avatar}
              alt="avatar"
              className="w-10 h-10 rounded-full border-2 border-[#a78bfa] shadow"
            />
          )}
          <img
            src={starsSparkle}
            alt="Sparkling Stars"
            className="w-8 h-8 sm:w-10 sm:h-10 object-contain drop-shadow-[0_0_5px_rgba(139,92,246,0.7)]"
          />
        </div>

        <div className="flex items-center gap-3">
          {/* Currency Dropdown */}
          <div className="relative">
            <button
              className="bg-gradient-to-r from-[#4c1d95]/40 to-[#2e1065]/40 backdrop-blur-md border border-[#c4b5fd]/30 text-white hover:bg-[#6d28d9]/30 px-4 py-2 rounded-lg transition-all duration-200 shadow-[0_0_10px_rgba(139,92,246,0.5)] hover:shadow-[0_0_15px_rgba(139,92,246,0.8)] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]"
              onClick={() => {
                console.log("Toggling currency dropdown, current state:", showCurrencyDropdown);
                flipSoundRef.current.currentTime = 0;
                flipSoundRef.current.play();
                setShowCurrencyDropdown((prev) => !prev);
              }}
              aria-label="Select Currency"
            >
              {currency.symbol} {currency.code}
            </button>
            {showCurrencyDropdown && (
              <div className="absolute left-0 mt-2 w-full bg-[#181028] border border-[#c4b5fd]/80 rounded-lg shadow-lg z-50 pointer-events-auto">
                {[
                  { symbol: "$", code: "USD" },
                  { symbol: "C$", code: "CAD" },
                  { symbol: "€", code: "EUR" },
                  { symbol: "£", code: "GBP" },
                  { symbol: "A$", code: "AUD" },
                ].map((cur) => (
                  <button
                    key={cur.code}
                    className="block w-full text-left px-4 py-2 text-white hover:bg-[#6d28d9]/60 rounded-lg"
                    onClick={() => {
                      console.log("Selected currency:", cur);
                      flipSoundRef.current.currentTime = 0;
                      flipSoundRef.current.play();
                      setCurrency(cur);
                      setShowCurrencyDropdown(false);
                    }}
                  >
                    {cur.symbol} {cur.code}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Language Dropdown */}
          <div className="relative">
            <button
              className="bg-gradient-to-r from-[#4c1d95]/40 to-[#7e22ce]/40 backdrop-blur-md border border-[#c4b5fd]/30 text-white hover:bg-[#6d28d9]/30 px-4 py-2 rounded-lg flex items-center transition-all duration-200 shadow-[0_0_10px_rgba(139,92,246,0.5)] hover:shadow-[0_0_15px_rgba(139,92,246,0.8)] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]"
              onClick={() => {
                console.log("Toggling language dropdown, current state:", showLanguageDropdown);
                flipSoundRef.current.currentTime = 0;
                flipSoundRef.current.play();
                setShowLanguageDropdown((prev) => !prev);
              }}
              aria-label="Select Language"
            >
              <Globe className="mr-2 h-4 w-4" /> {language.name}
            </button>
            {showLanguageDropdown && (
              <div className="absolute left-0 mt-2 w-full bg-[#181028] border border-[#c4b5fd]/80 rounded-lg shadow-lg z-50">
                {[
                  { name: "English", code: "en" },
                  { name: "Spanish", code: "es" },
                  { name: "French", code: "fr" },
                  { name: "German", code: "de" },
                ].map((lang) => (
                  <button
                    key={lang.code}
                    className="block w-full text-left px-4 py-2 text-white hover:bg-[#6d28d9]/60 rounded-lg"
                    onClick={() => {
                      console.log("Selected language:", lang);
                      flipSoundRef.current.currentTime = 0;
                      flipSoundRef.current.play();
                      setLanguage(lang);
                      setShowLanguageDropdown(false);
                    }}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Username or Login Button */}
          {user ? (
            <div className="relative">
              <button
                onClick={() => setShowUserDropdown((prev) => !prev)}
                className="bg-gradient-to-r from-[#7e22ce]/40 to-[#4c1d95]/40 backdrop-blur-md border border-[#c4b5fd]/30 text-white px-4 py-2 rounded-lg flex items-center transition-all duration-200 shadow-[0_0_10px_rgba(139,92,246,0.5)] hover:shadow-[0_0_15px_rgba(139,92,246,0.8)] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]"
                aria-label="User Menu"
              >
                <span className="font-semibold">{user.username}</span>
              </button>
              {showUserDropdown && (
                <div className="absolute right-0 mt-2 w-32 bg-[#181028] border border-[#c4b5fd]/80 rounded-lg shadow-lg z-50">
                  <button
                    onClick={() => {
                      localStorage.removeItem("mirage_token");
                      localStorage.removeItem("mirage_user");
                      setUser(null);
                      setShowUserDropdown(false);
                      navigate("/login");
                    }}
                    className="block w-full text-left px-4 py-2 text-white hover:bg-[#7c3aed]/60 rounded-lg"
                  >
                    <LogOut className="inline mr-2 h-4 w-4" /> Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="bg-gradient-to-r from-[#4c1d95]/40 to-[#5865F2]/40 backdrop-blur-md border border-[#c4b5fd]/30 text-white hover:bg-[#5865F2]/30 px-4 py-2 rounded-lg flex items-center transition-all duration-200 shadow-[0_0_10px_rgba(139,92,246,0.5)] hover:shadow-[0_0_15px_rgba(139,92,246,0.8)] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]"
              aria-label="Login with Discord"
            >
              <LogIn className="mr-2 h-4 w-4" /> Login
            </button>
          )}

          {/* Cart Button */}
          <button
            onClick={() => {
              flipSoundRef.current.currentTime = 0;
              flipSoundRef.current.play();
              setIsCartOpen(true);
            }}
            className="bg-gradient-to-r from-[#7e22ce]/40 to-[#4c1d95]/40 backdrop-blur-md border border-[#c4b5fd]/30 p-2 rounded-lg flex items-center justify-center transition-all duration-200 shadow-[0_0_10px_rgba(139,92,246,0.7)] hover:shadow-[0_0_15px_rgba(139,92,246,1)] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#8b5cf6] relative"
            aria-label={`View Cart (${cart.items.length} item${cart.items.length !== 1 ? "s" : ""})`}
          >
            <img
              src={cartIcon}
              alt="Cart"
              className="w-5 h-5 sm:w-6 sm:h-6 text-white [text-shadow:_0_1px_2px_rgba(0,0,0,0.5)]"
            />
            {cart.items.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#a78bfa] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-[0_0_5px_rgba(139,92,246,0.7)]">
                {cart.items.length}
              </span>
            )}
            <p className="ml-2">Cart</p>
          </button>
        </div>
      </header>

      {isCartOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="relative bg-[#0a0d16] rounded-2xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <button
              onClick={closeCart}
              className="absolute top-4 right-4 text-white/80 hover:text-white"
              aria-label="Close Cart"
            >
              ✕
            </button>
            <Cart
              cart={cart}
              removeFromCart={removeFromCart}
              updateCartQuantity={updateCartQuantity}
              clearCart={clearCart}
              closeCart={closeCart}
            />
          </div>
        </div>
      )}
    </>
  );
}