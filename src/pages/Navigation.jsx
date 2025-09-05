import { Shield, Zap, Gift } from "lucide-react";
import roles from "/role.webp"
import boost from "/Booster.webp"
import gifticon from "/gifticon.webp"
export default function Navigation({ activeTab, setActiveTab }) {
    return (
        <div className="md:col-span-1 
    w-full 
    bg-[rgba(255,255,255,0.03)] 
    backdrop-blur-[20px] 
    border border-[rgba(255,255,255,0.08)] 
    rounded-2xl p-4 
    shadow-[0_4px_30px_rgba(0,0,0,0.15)] 
    relative overflow-hidden 
    hover:shadow-[0_8px_40px_rgba(100,200,255,0.4)] 
    transition-all duration-500 group">

            <div className="absolute inset-0 
        bg-[linear-gradient(45deg,rgba(100,200,255,0.1),rgba(200,150,255,0.1))] 
        opacity-20 group-hover:opacity-40 animate-shimmer" />

            <h2 className="text-center text-xl font-extrabold mb-6 text-[#a78bfa] tracking-widest [text-shadow:_0_2px_4px_rgba(0,0,0,0.7)]">
                Start Shopping
            </h2>
            <div className="flex flex-col w-full space-y-3">
                <button
                    onClick={() => setActiveTab("roles")}
                    className={`relative flex items-center gap-3 w-full justify-start p-3 rounded-lg transition-all duration-300
      ${activeTab === "roles"
                            ? "bg-[rgba(100,200,255,0.15)] text-white shadow-[0_0_20px_rgba(100,200,255,0.5)]"
                            : "hover:bg-[rgba(100,200,255,0.1)] hover:shadow-[0_0_15px_rgba(200,150,255,0.4)] hover:scale-105"}
      border border-[rgba(255,255,255,0.08)] 
      focus:outline-none focus:ring-2 focus:ring-[rgba(100,200,255,0.4)]`}
                    aria-label="View Roles"
                    aria-current={activeTab === "roles" ? "true" : "false"}
                >
                    <img src={roles} alt="Shield Icon" className="h-6 w-6" />
                    <span className="text-lg font-medium text-[rgba(255,255,255,0.9)]">Roles</span>
                </button>

                <button
                    onClick={() => setActiveTab("boosters")}
                    className={`relative flex items-center gap-3 w-full justify-start p-3 rounded-lg transition-all duration-300
      ${activeTab === "boosters"
                            ? "bg-[rgba(100,200,255,0.15)] text-white shadow-[0_0_20px_rgba(100,200,255,0.5)]"
                            : "hover:bg-[rgba(100,200,255,0.1)] hover:shadow-[0_0_15px_rgba(200,150,255,0.4)] hover:scale-105"}
      border border-[rgba(255,255,255,0.08)] 
      focus:outline-none focus:ring-2 focus:ring-[rgba(100,200,255,0.4)]`}
                    aria-label="View Boosters"
                    aria-current={activeTab === "boosters" ? "true" : "false"}
                >
                    <img src={boost} alt="Boost Icon" className="h-6 w-6" />
                    <span className="text-lg font-medium text-[rgba(255,255,255,0.9)]">Boosters</span>
                </button>

                <button
                    onClick={() => setActiveTab("gifting")}
                    className={`relative flex items-center gap-3 w-full justify-start p-3 rounded-lg transition-all duration-300
      ${activeTab === "gifting"
                            ? "bg-[rgba(100,200,255,0.15)] text-white shadow-[0_0_20px_rgba(100,200,255,0.5)]"
                            : "hover:bg-[rgba(100,200,255,0.1)] hover:shadow-[0_0_15px_rgba(200,150,255,0.4)] hover:scale-105"}
      border border-[rgba(255,255,255,0.08)] 
      focus:outline-none focus:ring-2 focus:ring-[rgba(100,200,255,0.4)]`}
                    aria-label="View Gift Cards"
                    aria-current={activeTab === "gifting" ? "true" : "false"}
                >
                    <img src={gifticon} alt="Gift Icon" className="h-6 w-6" />
                    <span className="text-lg font-medium text-[rgba(255,255,255,0.9)]">Gifting</span>
                </button>
            </div>

        </div>
    );
}