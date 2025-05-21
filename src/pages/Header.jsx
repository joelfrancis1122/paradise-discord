import { Globe } from "lucide-react";
import { useState } from "react";
import Cart from "./Cart";
import cartIcon from "/cart.png";
import starsSparkle from "/stars.gif";

export default function Header({ cart, removeFromCart, updateCartQuantity, clearCart }) {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [currency, setCurrency] = useState({ symbol: "$", code: "USD" });
    const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);

    
    const closeCart = () => {
        setIsCartOpen(false);
    };

    return (
        <>
            <header className="container mx-auto flex items-center justify-between p-4 gap-3 bg-gradient-to-r from-[#1a0b2e]/80 to-[#0f172a]/80 backdrop-blur-md border border-[#8b5cf6]/30 rounded-2xl shadow-[0_0_15px_rgba(139,92,246,0.6)] md:animate-glow-pulse">
                <div className="flex items-center gap-2">
                    <h2 className="text-xl sm:text-xl font-extrabold text-[#a78bfa] tracking-widest [text-shadow:_0_2px_4px_rgba(0,0,0,0.7)]">
                        WELCOME!!! To Mirage Store
                    </h2>
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
                            aria-label="Select Currency"
                            onClick={() => setShowCurrencyDropdown((v) => !v)}
                        >
                            {currency.symbol} {currency.code}
                        </button>
                        {showCurrencyDropdown && (
                            <div className="absolute left-0 mt-2 w-full bg-[#181028] border border-[#c4b5fd]/80 rounded-lg shadow-lg z-50">
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

                    {/* Language Button */}
                    <div className="relative">
                        <button
                            className="bg-gradient-to-r from-[#4c1d95]/40 to-[#7e22ce]/40 backdrop-blur-md border border-[#c4b5fd]/30 text-white hover:bg-[#6d28d9]/30 px-4 py-2 rounded-lg flex items-center transition-all duration-200 shadow-[0_0_10px_rgba(139,92,246,0.5)] hover:shadow-[0_0_15px_rgba(139,92,246,0.8)] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]"
                            aria-label="Language"
                        >
                            <Globe className="mr-2 h-4 w-4" /> English
                        </button>
                    </div>

                    {/* Cart Button */}
                    <button
                        onClick={() => setIsCartOpen(true)}
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

            {/* Cart Modal */}
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