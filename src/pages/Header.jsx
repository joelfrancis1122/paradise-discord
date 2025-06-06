import { Globe, LogIn, LogOut } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCurrency } from "../context/CurrencyContext";
import { useTranslation } from "../context/TranslationContext";
import Cart from "./Cart";
import cartIcon from "/cart.png";
import starsSparkle from "/stars.gif";

export default function Header({ cart, removeFromCart, updateCartQuantity, clearCart }) {
  const { currency, setCurrency } = useCurrency();
  const { language, setLanguage, translate } = useTranslation();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [user, setUser] = useState(null);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [welcomeText, setWelcomeText] = useState("WELCOME To Mirage Store");
  const [cartText, setCartText] = useState("Cart");
  const [loginText, setLoginText] = useState("Login");
  const [logoutText, setLogoutText] = useState("Logout");
  const navigate = useNavigate();

  // Refs for dropdowns
  const currencyRef = useRef(null);
  const languageRef = useRef(null);
  const userRef = useRef(null);

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (currencyRef.current && !currencyRef.current.contains(event.target)) {
        setShowCurrencyDropdown(false);
      }
      if (languageRef.current && !languageRef.current.contains(event.target)) {
        setShowLanguageDropdown(false);
      }
      if (userRef.current && !userRef.current.contains(event.target)) {
        setShowUserDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Load user
  useEffect(() => {
    console.log("Cart prop:", cart); // Debug cart
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
    return () => window.addEventListener("storage", handleStorage);
  }, []);

  // Translate UI text
  useEffect(() => {
    console.log("Language changed:", language); // Debug
    async function updateTranslations() {
      console.log("Updating translations for language:", language.code);
      if (!user) {
        const translatedWelcome = await translate("welcome", "WELCOME To Mirage Store");
        console.log("Welcome text:", translatedWelcome);
        setWelcomeText(translatedWelcome);
      }
      const translatedCart = await translate("cart", "Cart");
      console.log("Cart text:", translatedCart);
      setCartText(translatedCart);
      const translatedLogin = await translate("login", "Login");
      console.log("Login text:", translatedLogin);
      setLoginText(translatedLogin);
      const translatedLogout = await translate("logout", "Logout");
      console.log("Logout text:", translatedLogout);
      setLogoutText(translatedLogout);
    }
    updateTranslations();
  }, [language, user, translate]);

  const closeCart = () => setIsCartOpen(false);

  return (
    <>
      <header className="container mx-auto flex items-center justify-between p-4 gap-3 bg-gradient-to-r from-[#1a0b2e]/80 to-[#0f172a]/80 backdrop-blur-md border border-[#8b5cf6]/30 rounded-2xl shadow-[0_0_15px_rgba(139,92,246,0.6)] md:animate-glow-pulse">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-extrabold text-[#a78bfa] tracking-widest [text-shadow:_0_2px_4px_rgba(0,0,0,0.7)]">
            {user ? `Welcome, ${user.username}` : welcomeText}
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
          <div className="relative" ref={currencyRef}>
            <button
              className="bg-gradient-to-r from-[#4c1d95]/40 to-[#2e1065]/40 backdrop-blur-md border border-[#c4b5fd]/30 text-white hover:bg-[#6d28d9]/30 px-4 py-2 rounded-lg transition-all duration-200 shadow-[0_0_10px_rgba(139,92,246,0.5)] hover:shadow-[0_0_15px_rgba(139,92,246,0.8)] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]"
              onClick={() => setShowCurrencyDropdown((prev) => !prev)}
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
          <div className="relative" ref={languageRef}>
            <button
              className="bg-gradient-to-r from-[#4c1d95]/90 to-[#7e22ce]/90 backdrop-blur-md border border-[#c4b5fd]/30 text-white hover:bg-[#6d28d9]/30 px-4 py-2 rounded-lg flex items-center transition-all duration-200 shadow-[0_0_10px_rgba(139,92,246,0.5)] hover:shadow-[0_0_15px_rgba(139,92,246,0.8)] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]"
              onClick={() => setShowLanguageDropdown((prev) => !prev)}
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
                  { name: "Japanese", code: "ja" },
                  { name: "Portuguese", code: "pt" },
                ].map((lang) => (
                  <button
                    key={lang.code}
                    className="block w-full text-left px-4 py-2 text-white hover:bg-[#6d28d9]/60 rounded-lg"
                    onClick={() => {
                      console.log("Setting language:", lang); // Debug
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
            <div className="relative" ref={userRef}>
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
                      navigate("/");
                    }}
                    className="block w-full text-left px-4 py-2 text-white hover:bg-[#7c3aed]/60 rounded-lg"
                  >
                    <LogOut className="inline mr-2 h-4 w-4" /> {logoutText}
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="bg-gradient-to-r from-[#4c1d95]/40 to-[#5865F2]/40 backdrop-blur-md border border-[#c4b5fd]/30 text-white hover:bg-[#5865F2]/30 px-4 py-2 rounded-lg flex items-center transition-all duration-200 shadow-[0_0_10px_rgba(139,92,246,0.5)] hover:shadow-[0_0_15px_rgba(139,92,246,0.8)] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]"
            >
              <LogIn className="mr-2 h-4 w-4" /> {loginText}
            </button>
          )}

          {/* Cart Button */}
          <button
            onClick={() => {
              console.log("Opening cart, items:", cart?.items); // Debug
              setIsCartOpen(true);
            }}
            className="bg-gradient-to-r from-[#7e22ce]/40 to-[#4c1d95]/40 backdrop-blur-md border border-[#c4b5fd]/30 p-2 rounded-lg flex items-center justify-center transition-all duration-200 shadow-[0_0_10px_rgba(139,92,246,0.7)] hover:shadow-[0_0_15px_rgba(139,92,246,1)] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#8b5cf6] relative"
            aria-label={`View Cart (${cart?.items?.length || 0} item${cart?.items?.length !== 1 ? "s" : ""})`}
          >
            <img
              src={cartIcon}
              alt="Cart"
              className="w-5 h-5 sm:w-6 sm:h-6 text-white [text-shadow:_0_1px_2px_rgba(0,0,0,0.5)]"
            />
            {cart?.items?.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#a78bfa] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-[0_0_5px_rgba(139,92,246,0.7)]">
                {cart.items.length}
              </span>
            )}
            <p className="ml-2">{cartText}</p>
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
              removeFromCart={(id) => {
                console.log("Removing item:", id); // Debug
                removeFromCart(id);
              }}
              updateCartQuantity={(id, quantity) => {
                console.log("Updating quantity:", id, quantity); // Debug
                updateCartQuantity(id, quantity);
              }}
              clearCart={() => {
                console.log("Clearing cart"); // Debug
                clearCart();
              }}
              closeCart={closeCart}
            />
          </div>
        </div>
      )}
    </>
  );
}