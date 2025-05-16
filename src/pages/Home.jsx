"use client" // Remove if not using Next.js

import { Shield, Zap, Gift, Globe } from "lucide-react"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import pic from "./image.jpg"
import pic1 from "../../public/2.png"
import pic2 from "../../public/4.png"
import pic3 from "../../public/5.png"
import pic11 from "../../public/11.png"
import pic22 from "../../public/22.png"
import pic33 from "../../public/33.png"
import gift from "../../public/gift.png"
import axios from "axios"

// Add these CSS animations
const styles = `
  @keyframes glow {
    0% { box-shadow: 0 0 10px rgba(139, 92, 246, 0.5); }
    50% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.8); }
    100% { box-shadow: 0 0 10px rgba(139, 92, 246, 0.5); }
  }
  
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }
  
  @keyframes twinkle {
    0% { background-color: rgba(255, 255, 255, 0); }
    50% { background-color: rgba(255, 255, 255, 0.05); }
    100% { background-color: rgba(255, 255, 255, 0); }
  }
  
  .animate-glow-pulse {
    animation: glow 3s infinite ease-in-out;
  }
  
  .animate-float {
    animation: float 6s infinite ease-in-out;
  }
  
  .animate-twinkle {
    animation: twinkle 4s infinite ease-in-out;
  }
`

export default function Home() {
    const [activeTab, setActiveTab] = useState("roles")
    const [items, setItems] = useState([])
    const [cart, setCart] = useState({ items: [], total: 0 })

    // Fetch items from RESTAURANT-SERVER
    const fetchItems = async () => {
        try {
            console.log(response, "items")
            setItems(response.data)
        } catch (error) {
            console.error("Failed to fetch items:", error)
            // Mock data fallback
            setItems([
                { id: "1", name: "VIP Role", price: 4.99, type: "roles" ,image: pic11},
                { id: "2", name: "Premium Role", price: 9.99, type: "roles" ,image: pic22},
                { id: "3", name: "Elite Role", price: 19.99, type: "roles",image: pic33 },
                { id: "4", name: "1 Month Boost", price: 4.99, type: "boosters", image: pic1 },
                { id: "5", name: "3 Month Boost", price: 12.99, type: "boosters", image: pic2 },
                { id: "6", name: "6 Month Boost", price: 24.99, type: "boosters", image: pic3 },
                { id: "7", name: "$10 Gift Card", price: 10.0, type: "giftcards" },
                { id: "8", name: "$25 Gift Card", price: 25.0, type: "giftcards" },
                { id: "9", name: "$50 Gift Card", price: 50.0, type: "giftcards" },
            ]);

        }
    }

    // Add item to cart
    const addToCart = (item) => {
        setCart((prev) => ({
            items: [...prev.items, item],
            total: prev.total + item.price,
        }))
    }

    useEffect(() => {
        fetchItems()
    }, [])

    useEffect(() => {
        // Add the styles to the document
        const styleElement = document.createElement("style")
        styleElement.innerHTML = styles
        document.head.appendChild(styleElement)

        return () => {
            document.head.removeChild(styleElement)
        }
    }, [])

    return (
        <div className="min-h-screen bg-[#0a0d16] bg-[url('/background.webp')] bg-cover bg-center bg-no-repeat text-white font-sans relative overflow-hidden">
            {/* Particle Overlay */}
            <div className="absolute inset-0 pointer-events-none md:block hidden">
                <div className="absolute top-10 left-20 w-2 h-2 bg-white/60 rounded-full animate-particle delay-100" />
                <div className="absolute top-40 right-30 w-3 h-3 bg-[#36b3e8]/70 rounded-full animate-particle delay-300" />
                <div className="absolute bottom-20 left-40 w-2 h-2 bg-[#9333ea]/60 rounded-full animate-particle delay-500" />
                <div className="absolute bottom-30 right-20 w-3 h-3 bg-white/50 rounded-full animate-particle delay-700" />
            </div>

            {/* Magical Starfield */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute w-full h-full bg-[url('/stars.webp')] bg-repeat opacity-40"></div>
                <div className="absolute w-full h-full animate-twinkle"></div>
            </div>

            {/* Header */}
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
                        {cart.items.length} item{cart.items.length !== 1 ? "s" : ""} for ${cart.total.toFixed(2)} USD
                    </span>
                </button>
            </header>

            {/* Logo and Join Section */}
            <div className="container mx-auto flex flex-col items-center justify-center py-12 relative">
                <div className="relative w-full max-w-2xl aspect-[4/3] mb-6 rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(139,92,246,0.8)] bg-gradient-to-b from-[#4c1d95]/30 to-[#7e22ce]/30 backdrop-blur-2xl border border-[#c4b5fd]/30 md:animate-glow-pulse [mask-image:_linear-gradient(to_bottom,white_50%,transparent_100%)]">
                    <img
                        src={pic || ""}
                        alt="paradiselize Logo"
                        className="object-cover w-full h-full mix-blend-overlay opacity-90 transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(54,179,232,0.25)_0%,transparent_70%)] opacity-50 animate-pulse" />
                </div>

                <div className="flex items-center gap-4 mt-4">
                    <div className="bg-gradient-to-r from-[#4c1d95]/30 to-[#7e22ce]/30 backdrop-blur-2xl border border-[#c4b5fd]/30 rounded-2xl p-4 flex items-center gap-3 shadow-[0_0_15px_rgba(139,92,246,0.6)] relative overflow-hidden">
                        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_10%_10%,rgba(255,255,255,0.2)_0%,transparent_50%)] opacity-20 animate-pulse" />
                        <div className="bg-[#5865F2] rounded-md p-2 shadow-[0_0_10px_rgba(88,101,242,0.7)]">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="white" >
                                <path d="M19.8437 4.5C18.3062 3.8 16.6687 3.3 14.9625 3C14.7938 3.3 14.5875 3.7 14.4375 4.1C12.6 3.8 10.8 3.8 9 4.1C8.85 3.7 8.6375 3.3 8.4625 3C6.75 3.3 5.1125 3.8 3.575 4.5C0.975 8.4 0.2 12.2 0.6 15.95C2.625 17.45 4.575 18.35 6.5 18.95C7 18.3 7.45 17.6 7.825 16.85C7.1 16.6 6.4 16.3 5.75 15.9C5.9 15.8 6.05 15.7 6.2 15.6C10.3 17.45 14.8 17.45 18.85 15.6C19 15.7 19.15 15.8 19.3 15.9C18.65 16.3 17.95 16.6 17.225 16.85C17.6 17.6 18.05 18.3 18.55 18.95C20.475 18.35 22.425 17.45 24.45 15.95C24.925 11.65 23.75 7.9 21.2 4.5H19.8437ZM8.2 13.6C7 13.6 6 12.5 6 11.15C6 9.8 6.975 8.7 8.2 8.7C9.425 8.7 10.425 9.8 10.4 11.15C10.4 12.5 9.425 13.6 8.2 13.6ZM15.85 13.6C14.65 13.6 13.65 12.5 13.65 11.15C13.65 9.8 14.625 8.7 15.85 8.7C17.075 8.7 18.075 9.8 18.05 11.15C18.05 12.5 17.075 13.6 15.85 13.6Z" />
                            </svg>
                        </div>
                        <div>
                            <a
                                href="https://discord.gg/GerGdy49"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block bg-gradient-to-r from-[#4c1d95]/40 to-[#7e22ce]/40 backdrop-blur-md p-2 rounded-lg transition-all duration-200 hover:bg-[#6d28d9]/30 hover:shadow-[0_0_12px_rgba(139,92,246,0.7)] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]"
                            >
                                <h3 className="font-extrabold text-lg text-white tracking-widest [text-shadow:_0_1px_2px_rgba(0,0,0,0.5)]">
                                    Join Paradise Today
                                </h3>
                                <p className="text-sm text-white/80">
                                    <span className="bg-[#5865F2] px-1 rounded text-white shadow-[0_0_5px_rgba(88,101,242,0.5)]">
                                        65,593
                                    </span>{" "}
                                    members online
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto grid md:grid-cols-5 gap-6 p-4 bg-gradient-to-br from-[#1a0b2e]/80 to-[#0f172a]/80 backdrop-blur-3xl border border-[#8b5cf6]/30 rounded-2xl shadow-[0_0_20px_rgba(139,92,246,0.7)] md:animate-glow-pulse transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(54,179,232,0.15)_0%,transparent_70%)] opacity-40 animate-pulse" />
                {/* Left - Navigation */}
                <div className="md:col-span-1 bg-gradient-to-b from-[#1a0b2e]/80 to-[#4c1d95]/80 backdrop-blur-2xl border border-[#8b5cf6]/30 rounded-2xl p-4 shadow-[0_0_15px_rgba(139,92,246,0.5)] relative overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.2)_0%,transparent_70%)] opacity-50 animate-pulse" />
                    <h2 className="text-center text-xl font-extrabold mb-6 text-[#a78bfa] tracking-widest [text-shadow:_0_2px_4px_rgba(0,0,0,0.7)]">
                        Start Shopping          </h2>
                    <div className="flex flex-col w-full bg-transparent space-y-3">
                        <button
                            onClick={() => setActiveTab("roles")}
                            className={`relative flex items-center gap-3 w-full justify-start p-3 text-left rounded-lg transition-all duration-300 ${activeTab === "roles"
                                ? "bg-gradient-to-r from-[#4c1d95]/60 to-[#7e22ce]/60 text-white shadow-[0_0_10px_rgba(139,92,246,0.8)]"
                                : "hover:bg-[#6d28d9]/30 hover:shadow-[0_0_12px_rgba(139,92,246,0.6)] hover:scale-105"
                                } focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]`}
                            aria-label="View Roles"
                            aria-current={activeTab === "roles" ? "true" : "false"}
                        >
                            <Shield className="h-6 w-6 text-[#a78bfa]" />
                            <span className="text-lg font-medium">Roles</span>
                            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_0%_0%,rgba(255,255,255,0.3)_0%,transparent_50%)] opacity-0 hover:opacity-30 transition-opacity duration-300" />
                        </button>
                        <button
                            onClick={() => setActiveTab("boosters")}
                            className={`relative flex items-center gap-3 w-full justify-start p-3 text-left rounded-lg transition-all duration-300 ${activeTab === "boosters"
                                ? "bg-gradient-to-r from-[#4c1d95]/60 to-[#7e22ce]/60 text-white shadow-[0_0_10px_rgba(139,92,246,0.8)]"
                                : "hover:bg-[#6d28d9]/30 hover:shadow-[0_0_12px_rgba(139,92,246,0.6)] hover:scale-105"
                                } focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]`}
                            aria-label="View Boosters"
                            aria-current={activeTab === "boosters" ? "true" : "false"}
                        >
                            <Zap className="h-6 w-6 text-[#a78bfa]" />
                            <span className="text-lg font-medium">Boosters</span>
                            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_0%_0%,rgba(255,255,255,0.3)_0%,transparent_50%)] opacity-0 hover:opacity-30 transition-opacity duration-300" />
                        </button>
                        <button
                            onClick={() => setActiveTab("giftcards")}
                            className={`relative flex items-center gap-3 w-full justify-start p-3 text-left rounded-lg transition-all duration-300 ${activeTab === "giftcards"
                                ? "bg-gradient-to-r from-[#4c1d95]/60 to-[#7e22ce]/60 text-white shadow-[0_0_10px_rgba(139,92,246,0.8)]"
                                : "hover:bg-[#6d28d9]/30 hover:shadow-[0_0_12px_rgba(139,92,246,0.6)] hover:scale-105"
                                } focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]`}
                            aria-label="View Gift Cards"
                            aria-current={activeTab === "giftcards" ? "true" : "false"}
                        >
                            <Gift className="h-6 w-6 text-[#a78bfa]" />
                            <span className="text-lg font-medium">Gift Cards</span>
                            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_0%_0%,rgba(255,255,255,0.3)_0%,transparent_50%)] opacity-0 hover:opacity-30 transition-opacity duration-300" />
                        </button>
                    </div>
                </div>

                {/* Right - Content */}
                <div className="md:col-span-4 bg-gradient-to-br from-[#1a0b2e]/80 to-[#0f172a]/80 backdrop-blur-3xl border border-[#8b5cf6]/30 rounded-2xl p-6 shadow-[0_0_20px_rgba(139,92,246,0.7)] relative overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.15)_0%,transparent_70%)] opacity-40 animate-pulse" />
                    {activeTab === "roles" && (
                        <div className="animate-fade-in">
                            <h1 className="text-3xl font-extrabold text-[#a78bfa] mb-2 tracking-widest [text-shadow:_0_2px_4px_rgba(0,0,0,0.7)]">
                                paradise
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
                                            className={`relative bg-gradient-to-br from-[#1a0b2e]/60 to-[#4c1d95]/60 backdrop-blur-xl border border-[#8b5cf6]/30 p-4 rounded-2xl flex flex-col items-center shadow-[0_0_15px_rgba(139,92,246,0.6)] hover:shadow-[0_0_25px_rgba(139,92,246,0.9)] hover:scale-105 transition-all duration-300 ${item.isPremium
                                                ? "shadow-[0_0_20px_5px_rgba(139,92,246,0.9)] hover:shadow-[0_0_40px_10px_rgba(139,92,246,1)] animate-glow-pulse"
                                                : ""
                                                }`}
                                        >
                                            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_10%_10%,rgba(255,255,255,0.2)_0%,transparent_50%)] opacity-20 hover:opacity-40 transition-opacity duration-300" />
                                            <div className="bg-[#7e22ce] p-3 rounded-full mb-3 shadow-[0_0_10px_rgba(139,92,246,0.7)]">
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
                                                onClick={() => addToCart(item)}
                                                className="w-full bg-gradient-to-r from-[#4c1d95] to-[#7e22ce] text-white font-semibold px-4 py-2 rounded-lg transition-all duration-200 shadow-[0_0_10px_rgba(139,92,246,0.7)] hover:shadow-[0_0_15px_rgba(139,92,246,1)] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]"
                                                aria-label={`Add ${item.name} to cart`}
                                            >
                                                Add to Cart
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
                                This ad-free server thrives with your help. All donations support upgrades & growth!
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                                {items
                                    .filter((item) => item.type === "boosters")
                                    .map((item) => (
                                        <div
                                            key={item.id}
                                            className={`relative bg-gradient-to-br from-[#1a0b2e]/60 to-[#4c1d95]/60 backdrop-blur-xl border border-[#8b5cf6]/30 p-4 rounded-2xl flex flex-col items-center shadow-[0_0_15px_rgba(139,92,246,0.6)] hover:shadow-[0_0_25px_rgba(139,92,246,0.9)] hover:scale-105 transition-all duration-300 ${item.isPremium
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
                                                onClick={() => addToCart(item)}
                                                className="w-full bg-gradient-to-r from-[#4c1d95] to-[#7e22ce] text-white font-semibold px-4 py-2 rounded-lg transition-all duration-200 shadow-[0_0_10px_rgba(139,92,246,0.7)] hover:shadow-[0_0_15px_rgba(139,92,246,1)] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]"
                                                aria-label={`Add ${item.name} to cart`}
                                            >
                                                Add to Cart
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
                                Nonrefundable. Instant delivery. Contact Lawrence on Discord if issues arise.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                                {items
                                    .filter((item) => item.type === "giftcards")
                                    .map((item) => (
                                        <div
                                            key={item.id}
                                            className={`relative bg-gradient-to-br from-[#1a0b2e]/60 to-[#4c1d95]/60 backdrop-blur-xl border border-[#8b5cf6]/30 p-4 rounded-2xl flex flex-col items-center shadow-[0_0_15px_rgba(139,92,246,0.6)] hover:shadow-[0_0_25px_rgba(139,92,246,0.9)] hover:scale-105 transition-all duration-300 ${item.isPremium
                                                ? "shadow-[0_0_20px_5px_rgba(139,92,246,0.9)] hover:shadow-[0_0_40px_10px_rgba(139,92,246,1)] animate-glow-pulse"
                                                : ""
                                                }`}
                                        >
                                            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_10%_10%,rgba(255,255,255,0.2)_0%,transparent_50%)] opacity-20 hover:opacity-40 transition-opacity duration-300" />
                                            <div className="bg-pink-500 p-3 rounded-full mb-3 shadow-[0_0_10px_rgba(236,72,153,0.7)]">
                                                        <img
                                                            src={gift}
                                                            alt="Booster Icon"
                                                            className="h-40 w-40 object-contain drop-shadow-[0_0_10px_rgba(255,255,0,0.8)]"
                                                        />
                                            </div>
                                            <h3 className="font-bold text-lg text-white mb-2 tracking-widest [text-shadow:_0_1px_2px_rgba(0,0,0,0.5)]">
                                                {item.name}
                                            </h3>
                                            <p className="text-white/80 text-center mb-4">Gift card value varies</p>
                                            <p className="font-extrabold text-xl text-white mb-3 [text-shadow:_0_1px_2px_rgba(0,0,0,0.5)]">
                                                ${item.price.toFixed(2)}
                                            </p>
                                            <button
                                                onClick={() => addToCart(item)}
                                                className="w-full bg-gradient-to-r from-[#4c1d95] to-[#7e22ce] text-white font-semibold px-4 py-2 rounded-lg transition-all duration-200 shadow-[0_0_10px_rgba(139,92,246,0.7)] hover:shadow-[0_0_15px_rgba(139,92,246,1)] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]"
                                                aria-label={`Add ${item.name} to cart`}
                                            >
                                                Add to Cart
                                            </button>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Footer */}
            <footer className="container mx-auto p-4 mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 bg-gradient-to-br  relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.15)_0%,transparent_70%)] opacity-40 animate-pulse" />
                <div>
                    <h3 className="text-xl font-extrabold text-[#a78bfa] mb-4 tracking-widest [text-shadow:_0_2px_4px_rgba(0,0,0,0.7)]">
                        About Us
                    </h3>
                    <p className="text-white/80">paradise is one of the oldest and largest socialize servers on Discord.</p>
                </div>
                <div>
                    <h3 className="text-xl font-extrabold text-[#a78bfa] mb-4 tracking-widest [text-shadow:_0_2px_4px_rgba(0,0,0,0.7)]">
                        Links
                    </h3>
                    <ul className="space-y-2">
                        <li>
                            <Link
                                to="/terms"
                                className="text-white/80 hover:text-white hover:bg-gradient-to-r hover:from-white/20 hover:to-[#9333ea]/20 hover:shadow-[0_0_10px_rgba(147,51,234,0.6)] p-2 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#36b3e8]"
                            >
                                Terms
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/privacy"
                                className="text-white/80 hover:text-white hover:bg-gradient-to-r hover:from-white/20 hover:to-[#9333ea]/20 hover:shadow-[0_0_10px_rgba(147,51,234,0.6)] p-2 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#36b3e8]"
                            >
                                Privacy
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-extrabold text-[#a78bfa] mb-4 tracking-widest [text-shadow:_0_2px_4px_rgba(0,0,0,0.7)]">
                        Contact Us
                    </h3>
                    <p className="text-white/80 mb-4">
                        If you have any questions, concerns, or want to contact us, you can do this on our Discord.
                    </p>
                    <a
                        href="https://discord.gg/GerGdy49"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-[#4c1d95]/40 to-[#7e22ce]/40 backdrop-blur-md border border-[#c4b5fd]/30 px-4 py-2 rounded-lg inline-block transition-all duration-200 shadow-[0_0_10px_rgba(139,92,246,0.7)] hover:shadow-[0_0_15px_rgba(139,92,246,1)] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]"
                    >
                        Discord Server
                    </a>
                </div>
            </footer>

            <div className="container mx-auto p-4 text-center text-sm text-white/70 ">
                <p>All rights reserved. 2025 © paradise</p>
                <p>We're not affiliated with or endorsed by Discord.</p>
            </div>
        </div>
    )
}
