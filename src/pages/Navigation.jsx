import { Shield, Zap, Gift } from "lucide-react";
import roles from "/role.webp"
import boost from "/Booster.webp"
import gifticon from "/gifticon.webp"
export default function Navigation({ activeTab, setActiveTab }) {
    return (
        <div className="md:col-span-1 bg-gradient-to-b from-[#1a0b2e]/80 to-[#4c1d95]/80 backdrop-blur-2xl border border-[#8b5cf6]/30 rounded-2xl p-4 shadow-[0_0_15px_rgba(139,92,246,0.5)] relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.2)_0%,transparent_70%)] opacity-50 animate-pulse" />
            <h2 className="text-center text-xl font-extrabold mb-6 text-[#a78bfa] tracking-widest [text-shadow:_0_2px_4px_rgba(0,0,0,0.7)]">
                Start Shopping
            </h2>
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
                    <img
                        src={roles}
                        alt="Shield Icon"
                        className="h-6 w-6"
                    />
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
                    <img
                        src={boost}
                        alt="boost Icon"
                        className="h-6 w-6"
                    />
                    <span className="text-lg font-medium">Boosters</span>
                    <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_0%_0%,rgba(255,255,255,0.3)_0%,transparent_50%)] opacity-0 hover:opacity-30 transition-opacity duration-300" />
                </button>
                <button
                    onClick={() => setActiveTab("gifting")}
                    className={`relative flex items-center gap-3 w-full justify-start p-3 text-left rounded-lg transition-all duration-300 ${activeTab === "giftcards"
                        ? "bg-gradient-to-r from-[#4c1d95]/60 to-[#7e22ce]/60 text-white shadow-[0_0_10px_rgba(139,92,246,0.8)]"
                        : "hover:bg-[#6d28d9]/30 hover:shadow-[0_0_12px_rgba(139,92,246,0.6)] hover:scale-105"
                        } focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]`}
                    aria-label="View Gift Cards"
                    aria-current={activeTab === "gifting" ? "true" : "false"}
                >
                    <img
                        src={gifticon}
                        alt="gift Icon"
                        className="h-6 w-6"
                    />
                    <span className="text-lg font-medium">Gifting</span>
                    <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_0%_0%,rgba(255,255,255,0.3)_0%,transparent_50%)] opacity-0 hover:opacity-30 transition-opacity duration-300" />
                </button>
            </div>
        </div>
    );
}