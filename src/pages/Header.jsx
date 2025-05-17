import { Globe } from "lucide-react";
import { useState } from "react";
import Cart from "./Cart";
import cartIcon from "/cart.png"
export default function Header({ cart, removeFromCart, updateCartQuantity, clearCart }) {
    const [isCartOpen, setIsCartOpen] = useState(false);

    return (
        <>
            <header className="container mx-auto flex items-center justify-end p-4 gap-3 bg-gradient-to-r from-[#1a0b2e]/80 to-[#0f172a]/80 backdrop-blur-md border border-[#8b5cf6]/30 rounded-2xl shadow-[0_0_15px_rgba(139,92,246,0.6)] md:animate-glow-pulse">
                <button
                    className="bg-gradient-to-r from-[#4c1d95]/40 to-[#2e1065]/40 backdrop-blur-md border border-[#c4b5fd]/30 text-white hover:bg-[#6d28d9]/30 px-4 py-2 rounded-lg transition-all duration-200 shadow-[0_0_10px_rgba(139,92,246,0.5)] hover:shadow-[0_0_15px_rgba(139,92,246,0.8)] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]"
                    aria-label="Select Currency"
                >
                    $ USD
                </button>
                <button
                    className="bg-gradient-to-r from-[#4c1d95]/40 to-[#7e22ce]/40 backdrop-blur-md border border-[#c4b5fd]/30 text-white hover:bg-[#6d28d9]/30 px-4 py-2 rounded-lg flex items-center transition-all duration-200 shadow-[0_0_10px_rgba(139,92,246,0.5)] hover:shadow-[0_0_15px_rgba(139,92,246,0.8)] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]"
                    aria-label="Select Language"
                >
                    <Globe className="mr-2 h-4 w-4" /> Language
                </button>
                <button
                    onClick={() => setIsCartOpen(true)}
                    className="bg-gradient-to-r from-[#7e22ce]/40 to-[#4c1d95]/40 backdrop-blur-md border border-[#c4b5fd]/30 p-2 rounded-lg flex items-center justify-center transition-all duration-200 shadow-[0_0_10px_rgba(139,92,246,0.7)] hover:shadow-[0_0_15px_rgba(139,92,246,1)] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#8b5cf6] relative"
                    aria-label={`View Cart (${cart.items.length} item${cart.items.length !== 1 ? "s" : ""})`}
                >
                    <img
                        src="/cart.png"
                        alt="Cart"
                        className="w-5 h-5 sm:w-6 sm:h-6 text-white [text-shadow:_0_1px_2px_rgba(0,0,0,0.5)]"
                    />

                    {cart.items.length > 0 && (
                        <span className="absolute -top-1 -right-1 bg-[#a78bfa] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-[0_0_5px_rgba(139,92,246,0.7)]">
                            {cart.items.length}
                        </span>
                    )}
                </button>
            </header>

            {/* Cart Modal */}
            {isCartOpen && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
                    <div className="relative bg-[#0a0d16] rounded-2xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
                        <button
                            onClick={() => setIsCartOpen(false)}
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
                        />
                    </div>
                </div>
            )}
        </>
    );
}