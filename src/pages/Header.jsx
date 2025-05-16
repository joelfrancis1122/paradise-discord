import { Globe } from "lucide-react";

export default function Header({ cart }) {
    return (
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
                className="bg-gradient-to-r from-[#7e22ce]/40 to-[#4c1d95]/40 backdrop-blur-md border border-[#c4b5fd]/30 px-4 py-2 rounded-lg flex items-center transition-all duration-200 shadow-[0_0_10px_rgba(139,92,246,0.7)] hover:shadow-[0_0_15px_rgba(139,92,246,1)] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]"
                aria-label="View Cart"
            >
                Glammy's Bag
                <span className="ml-2 text-xs">
                    {cart.items.length} item{cart.items.length !== 1 ? "s" : ""}
                </span>
            </button>
        </header>
    );
}