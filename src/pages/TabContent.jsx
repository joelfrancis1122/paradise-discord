import { useState } from "react";
import gift from "/gift.webp";

export default function TabContent({ activeTab, items, addToCart }) {
    const [addedItemId, setAddedItemId] = useState(null); // Track which item was just added for button animation
    const [toast, setToast] = useState({ show: false, message: "" }); // Manage toast visibility and message

    const handleAddToCart = (item) => {
        // Play sound
        const sound = new Audio("/sounds/magic-chime.mp3");
        sound.play().catch((error) => {
            console.error("Error playing sound:", error);
        });

        // Call the addToCart function
        addToCart(item);

        // Set the item ID to trigger the button animation (if desired)
        setAddedItemId(item.id);

        // Show the toast with a message
        setToast({ show: true, message: `${item.name} Added to Cart!` });

        // Reset the button animation after 2 seconds
        setTimeout(() => {
            setAddedItemId(null);
        }, 2000);

        // Hide the toast after 3 seconds
        setTimeout(() => {
            setToast({ show: false, message: "" });
        }, 3000);
    };

    return (
        <div className="md:col-span-4 bg-gradient-to-br from-[#1a0b2e]/80 to-[#0f172a]/80 backdrop-blur-3xl border border-[#8b5cf6]/30 rounded-2xl p-6 shadow-[0_0_20px_rgba(139,92,246,0.7)] relative overflow-hidden">
            {/* Toast Notification */}
            {toast.show && (
                <div className="fixed top-4 right-4 z-50 animate-fade-in">
                    <div className="bg-gradient-to-r from-[#4c1d95] to-[#7e22ce] text-white px-4 py-2 rounded-lg shadow-[0_0_15px_rgba(139,92,246,0.7)] border border-[#8b5cf6]/30 backdrop-blur-md">
                        <p className="text-sm font-semibold tracking-widest [text-shadow:_0_1px_2px_rgba(0,0,0,0.5)]">
                            {toast.message}
                        </p>
                    </div>
                </div>
            )}

            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.15)_0%,transparent_70%)] opacity-40 animate-pulse" />
            {activeTab === "roles" && (
                <div className="animate-fade-in">
                    <h1 className="text-3xl font-extrabold text-[#a78bfa] mb-2 tracking-widest [text-shadow:_0_2px_4px_rgba(0,0,0,0.7)]">
                        Grab roles
                    </h1>
                    <h2 className="text-xl font-semibold mb-4 text-white/90 [text-shadow:_0_1px_2px_rgba(0,0,0,0.5)]">
                        Welcome to our store!
                    </h2>
                    <p className="mb-4 text-white/80">
                        We appreciate you checking it out. Buy anything from roles, giftcards, and boosters!
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                        {items
                            .filter((item) => item.type === "roles")
                            .map((item) => (
                                <div
                                    key={item.id}
                                    className={`relative bg-gradient-to-br from-[#1a0b2e]/60 to-[#4c1d95]/60 backdrop-blur-xl border border-[#8b5cf6]/30 p-4 rounded-2xl flex flex-col items-center shadow-[0_0_15px_rgba(139,92,246,0.6)] hover:shadow-[0_0_25px_rgba(139,92,246,0.9)] hover:scale-105 transition-all duration-300 ${
                                        item.isPremium
                                            ? "shadow-[0_0_20px_5px_rgba(139,92,246,0.9)] hover:shadow-[0_0_40px_10px_rgba(139,92,246,1)] animate-glow-pulse"
                                            : ""
                                    }`}
                                >
                                    <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_10%_10%,rgba(255,255,255,0.2)_0%,transparent_50%)] opacity-20 hover:opacity-40 transition-opacity duration-300" />
                                    <div className="p-3 rounded-full mb-3 shadow-[0_0_10px_rgba(139,92,246,0.7)]">
                                        {item.image && (
                                            <img
                                                src={item.image}
                                                alt="roles Icon"
                                                className="h-40 w-40 object-contain drop-shadow-[0_0_10px_rgba(255,255,0,0.8)]"
                                            />
                                        )}
                                    </div>
                                    <h3 className="font-bold text-lg text-white mb-2 tracking-widest [text-shadow:_0_1px_2px_rgba(0,0,0,0.5)]">
                                        {item.name}
                                    </h3>
                                    <p className="text-white/80 text-center mb-4">Get access to exclusive channels and perks</p>
                                    <p className="font-extrabold text-xl text-white mb-3 [text-shadow:_0_1px_2px_rgba(0,0,0,0.5)]">
                                        ${item.price.toFixed(2)}
                                    </p>
                                    <button
                                        onClick={() => handleAddToCart(item)}
                                        className="w-full bg-gradient-to-r from-[#4c1d95] to-[#7e22ce] text-white font-semibold px-4 py-2 rounded-lg transition-all duration-200 shadow-[0_0_10px_rgba(139,92,246,0.7)] hover:shadow-[0_0_15px_rgba(139,92,246,1)] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#8b5cf6] relative overflow-hidden"
                                        aria-label={`Add ${item.name} to cart`}
                                    >
                                        <span className="relative z-10">Add to Cart</span>
                                    </button>
                                </div>
                            ))}
                    </div>
                </div>
            )}

            {activeTab === "boosters" && (
                <div className="animate-fade-in">
                    <h1 className="text-3xl font-extrabold text-[#a78bfa] mb-2 tracking-widest [text-shadow:_0_2px_4px_rgba(0,0,0,0.7)]">
                        Boosters
                    </h1>
                    <h2 className="text-xl font-semibold mb-4 text-white/90 [text-shadow:_0_1px_2px_rgba(0,0,0,0.5)]">
                        Enhance your server experience!
                    </h2>
                    <p className="mb-4 text-white/80">
                        Nonrefundable. Instant delivery. Contact Glammy on Discord if issues arise.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                        {items
                            .filter((item) => item.type === "boosters")
                            .map((item) => (
                                <div
                                    key={item.id}
                                    className={`relative bg-gradient-to-br from-[#1a0b2e]/60 to-[#4c1d95]/60 backdrop-blur-xl border border-[#8b5cf6]/30 p-4 rounded-2xl flex flex-col items-center shadow-[0_0_15px_rgba(139,92,246,0.6)] hover:shadow-[0_0_25px_rgba(139,92,246,0.9)] hover:scale-105 transition-all duration-300 ${
                                        item.isPremium
                                            ? "shadow-[0_0_20px_5px_rgba(139,92,246,0.9)] hover:shadow-[0_0_40px_10px_rgba(139,92,246,1)] animate-glow-pulse"
                                            : ""
                                    }`}
                                >
                                    <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_10%_10%,rgba(255,255,255,0.2)_0%,transparent_50%)] opacity-20 hover:opacity-40 transition-opacity duration-300" />
                                    <div className="[0_0_20px_5px_rgba(139,92,246,0.9)] p-3 rounded-full mb-3 shadow-[0_0_10px_rgba(59,130,246,0.7)]">
                                        {item.image && (
                                            <img
                                                src={item.image}
                                                alt="Booster Icon"
                                                className="h-40 w-40 object-contain drop-shadow-[0_0_10px_rgba(255,255,0,0.8)]"
                                            />
                                        )}
                                    </div>
                                    <h3 className="font-bold text-lg text-white mb-2 tracking-widest [text-shadow:_0_1px_2px_rgba(0,0,0,0.5)]">
                                        {item.name}
                                    </h3>
                                    <p className="text-white/80 text-center mb-4">
                                        Boost the server for{" "}
                                        {item.name.includes("1") ? "1 month" : item.name.includes("3") ? "3 months" : "6 months"}
                                    </p>
                                    <p className="font-extrabold text-xl text-white mb-3 [text-shadow:_0_1px_2px_rgba(0,0,0,0.5)]">
                                        ${item.price.toFixed(2)}
                                    </p>
                                    <button
                                        onClick={() => handleAddToCart(item)}
                                        className="w-full bg-gradient-to-r from-[#4c1d95] to-[#7e22ce] text-white font-semibold px-4 py-2 rounded-lg transition-all duration-200 shadow-[0_0_10px_rgba(139,92,246,0.7)] hover:shadow-[0_0_15px_rgba(139,92,246,1)] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#8b5cf6] relative overflow-hidden"
                                        aria-label={`Add ${item.name} to cart`}
                                    >
                                        <span className="relative z-10">Add to Cart</span>
                                    </button>
                                </div>
                            ))}
                    </div>
                </div>
            )}

            {activeTab === "giftcards" && (
                <div className="animate-fade-in">
                    <h1 className="text-3xl font-extrabold text-[#a78bfa] mb-2 tracking-widest [text-shadow:_0_2px_4px_rgba(0,0,0,0.7)]">
                        Gift Cards
                    </h1>
                    <h2 className="text-xl font-semibold mb-4 text-white/90 [text-shadow:_0_1px_2px_rgba(0,0,0,0.5)]">
                        Perfect gifts for your friends!
                    </h2>
                    <p className="mb-4 text-white/80">
                        Nonrefundable. Instant delivery. Contact Glammy on Discord if issues arise.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                        {items
                            .filter((item) => item.type === "giftcards")
                            .map((item) => (
                                <div
                                    key={item.id}
                                    className={`relative bg-gradient-to-br from-[#1a0b2e]/60 to-[#4c1d95]/60 backdrop-blur-xl border border-[#8b5cf6]/30 p-4 rounded-2xl flex flex-col items-center shadow-[0_0_15px_rgba(139,92,246,0.6)] hover:shadow-[0_0_25px_rgba(139,92,246,0.9)] hover:scale-105 transition-all duration-300 ${
                                        item.isPremium
                                            ? "shadow-[0_0_20px_5px_rgba(139,92,246,0.9)] hover:shadow-[0_0_40px_10px_rgba(139,92,246,1)] animate-glow-pulse"
                                            : ""
                                    }`}
                                >
                                    <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_10%_10%,rgba(255,255,255,0.2)_0%,transparent_50%)] opacity-20 hover:opacity-40 transition-opacity duration-300" />
                                    <div className="p-3 rounded-full mb-3 shadow-[0_0_10px_rgba(236,72,153,0.7)]">
                                  
                                           {item.image && (
                                            <img
                                                src={item.image}
                                                alt="Gift Icon"
                                                className="h-40 w-40 object-contain drop-shadow-[0_0_10px_rgba(255,255,0,0.8)]"
                                            />
                                        )}
                                    </div>
                                    <h3 className="font-bold text-lg text-white mb-2 tracking-widest [text-shadow:_0_1px_2px_rgba(0,0,0,0.5)]">
                                        {item.name}
                                    </h3>
                                    <p className="text-white/80 text-center mb-4">Gift card value varies</p>
                                    <p className="font-extrabold text-xl text-white mb-3 [text-shadow:_0_1px_2px_rgba(0,0,0,0.5)]">
                                        ${item.price.toFixed(2)}
                                    </p>
                                    <button
                                        onClick={() => handleAddToCart(item)}
                                        className="w-full bg-gradient-to-r from-[#4c1d95] to-[#7e22ce] text-white font-semibold px-4 py-2 rounded-lg transition-all duration-200 shadow-[0_0_10px_rgba(139,92,246,0.7)] hover:shadow-[0_0_15px_rgba(139,92,246,1)] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#8b5cf6] relative overflow-hidden"
                                        aria-label={`Add ${item.name} to cart`}
                                    >
                                        <span className="relative z-10">Add to Cart</span>
                                    </button>
                                </div>
                            ))}
                    </div>
                </div>
            )}
        </div>
    );
}