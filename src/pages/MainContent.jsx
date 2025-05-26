import Navigation from "./Navigation";
import TabContent from "./TabContent";

export default function MainContent({ activeTab, setActiveTab, items, addToCart }) {
    return (
        
        <div className="container mx-auto grid md:grid-cols-5 gap-6 p-4 bg-gradient-to-br from-[#1a0b2e]/80 to-[#0f172a]/80 backdrop-blur-3xl border border-[#8b5cf6]/30 rounded-2xl shadow-[0_0_20px_rgba(139,92,246,0.7)] md:animate-glow-pulse transition-all duration-500 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(54,179,232,0.15)_0%,transparent_70%)] opacity-40 animate-pulse" />
            <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
            <TabContent activeTab={activeTab} items={items} addToCart={addToCart} />
        </div>
    );
}