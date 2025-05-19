import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

export default function Cart({ cart, removeFromCart, updateCartQuantity, clearCart }) {
    const prevTotalRef = useRef(cart.total);

    useEffect(() => {
        prevTotalRef.current = cart.total;
    }, [cart.total]);

    const handleClearCart = () => {
        if (window.confirm("Are you sure you want to clear your cart?")) {
            clearCart();
        }
    };

    const handleCheckout = () => {
        alert("Proceeding to checkout! (This is a placeholder action.)");
    };

    return (
        <div className="p-6">
            <h1 className="text-3xl font-extrabold text-[#a78bfa] mb-8 tracking-widest [text-shadow:_0_2px_4px_rgba(0,0,0,0.7)] text-center">
                 Your Cart
            </h1>

            {cart.items.length === 0 ? (
                <div className="bg-gradient-to-br from-[#1a0b2e]/80 to-[#0f172a]/80 backdrop-blur-3xl border border-[#8b5cf6]/30 rounded-2xl p-8 shadow-[0_0_20px_rgba(139,92,246,0.7)] text-center">
                    <p className="text-white/80 text-lg mb-4">Your cart is empty.</p>
                    <Link
                        to="/"
                        className="inline-block bg-gradient-to-r from-[#4c1d95] to-[#7e22ce] text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 shadow-[0_0_10px_rgba(139,92,246,0.7)] hover:shadow-[0_0_15px_rgba(139,92,246,1)] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]"
                    >
                        Continue Shopping
                    </Link>
                </div>
            ) : (
                <div className="relative">
                    <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.15)_0%,transparent_70%)] opacity-40 animate-pulse" />

                    {/* Cart Items */}
                    <div className="space-y-3 max-h-[50vh] overflow-y-auto pr-4">
                        {cart.items.map((item, index) => (
                            <div
                                key={`${item.id}-${index}`}
                                className="relative bg-gradient-to-br from-[#1a0b2e]/60 to-[#4c1d95]/60 backdrop-blur-xl border border-[#8b5cf6]/30 p-4 rounded-2xl flex items-center gap-4 shadow-[0_0_15px_rgba(139,92,246,0.6)] hover:shadow-[0_0_25px_rgba(139,92,246,0.9)] hover:scale-[1.01] transition-all duration-300"
                            >
                                <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_10%_10%,rgba(255,255,255,0.2)_0%,transparent_50%)] opacity-20 hover:opacity-40 transition-opacity duration-300" />
                                {item.image && (
                                    <div className="bg-[#7e22ce] p-2 rounded-full shadow-[0_0_10px_rgba(139,92,246,0.7)]">
                                        <img
                                            src={item.image}
                                            alt={`${item.name} Icon`}
                                            className="h-12 w-12 object-contain drop-shadow-[0_0_10px_rgba(255,255,0,0.8)]"
                                        />
                                    </div>
                                )}
                                <div className="flex-1">
                                    <h3 className="font-bold text-lg text-white tracking-widest [text-shadow:_0_1px_2px_rgba(0,0,0,0.5)]">
                                        {item.name}
                                    </h3>
                                    <p className="font-extrabold text-lg text-white [text-shadow:_0_1px_2px_rgba(0,0,0,0.5)]">
                                        ${(item.price * (item.quantity || 1)).toFixed(2)}
                                    </p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => updateCartQuantity(index, item.quantity - 1)}
                                        className="bg-gradient-to-r from-[#9333ea]/40 to-[#4c1d95]/40 backdrop-blur-md border border-[#c4b5fd]/30 text-white hover:bg-[#6d28d9]/30 px-2 py-1 rounded-lg transition-all duration-200 shadow-[0_0_10px_rgba(139,92,246,0.5)] hover:shadow-[0_0_15px_rgba(139,92,246,0.8)] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]"
                                        aria-label={`Decrease quantity of ${item.name}`}
                                    >
                                        -
                                    </button>
                                    <span className="text-white text-sm">{item.quantity || 1}</span>
                                    <button
                                        onClick={() => updateCartQuantity(index, (item.quantity || 1) + 1)}
                                        className="bg-gradient-to-r from-[#9333ea]/40 to-[#4c1d95]/40 backdrop-blur-md border border-[#c4b5fd]/30 text-white hover:bg-[#6d28d9]/30 px-2 py-1 rounded-lg transition-all duration-200 shadow-[0_0_10px_rgba(139,92,246,0.5)] hover:shadow-[0_0_15px_rgba(139,92,246,0.8)] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]"
                                        aria-label={`Increase quantity of ${item.name}`}
                                    >
                                        +
                                    </button>
                                </div>
                                <button
                                    onClick={() => removeFromCart(index)}
                                    className="bg-gradient-to-r from-[#9333ea]/40 to-[#4c1d95]/40 backdrop-blur-md border border-[#c4b5fd]/30 text-white hover:bg-[#6d28d9]/30 px-4 py-1 rounded-lg transition-all duration-200 shadow-[0_0_10px_rgba(139,92,246,0.5)] hover:shadow-[0_0_15px_rgba(139,92,246,0.8)] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]"
                                    aria-label={`Remove ${item.name} from cart`}
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Total, Clear Cart, and Checkout */}
                    <div className="mt-8 border-t border-[#8b5cf6]/30 pt-6 flex flex-col items-center gap-4">
                        <p
                            className={`text-xl font-extrabold text-white [text-shadow:_0_1px_2px_rgba(0,0,0,0.5)] transition-all duration-300 ${
                                cart.total !== prevTotalRef.current ? "animate-glow-pulse" : ""
                            }`}
                        >
                            Total: ${cart.total.toFixed(2)}
                        </p>
                        <div className="flex gap-4">
                            <button
                                onClick={handleClearCart}
                                className="bg-gradient-to-r from-[#9333ea]/40 to-[#4c1d95]/40 backdrop-blur-md border border-[#c4b5fd]/30 text-white hover:bg-[#6d28d9]/30 px-6 py-2 rounded-lg transition-all duration-200 shadow-[0_0_10px_rgba(139,92,246,0.5)] hover:shadow-[0_0_15px_rgba(139,92,246,0.8)] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]"
                                aria-label="Clear Cart"
                            >
                                Clear Cart
                            </button>
                            <button
                                onClick={handleCheckout}
                                className="bg-gradient-to-r from-[#4c1d95] to-[#7e22ce] text-white font-semibold px-6 py-2 rounded-lg transition-all duration-200 shadow-[0_0_10px_rgba(139,92,246,0.7)] hover:shadow-[0_0_15px_rgba(139,92,246,1)] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]"
                                aria-label="Proceed to Checkout"
                            >
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}