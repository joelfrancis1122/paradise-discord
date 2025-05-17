import { useEffect, useState } from "react";
import Header from "./Header";
import LogoAndJoinSection from "./LogoAndJoinSection";
import MainContent from "./MainContent";
import Footer from "./Footer";
import Disclaimer from "./Disclaimer";
import pic1 from "/2.webp";
import pic2 from "/4.webp";
import pic3 from "/5.webp";
import pic11 from "/11.webp";
import pic22 from "/22.webp";
import pic33 from "/33.webp";
import '../index.css'
import styles1 from "../assets/style"


export default function Home() {
    useEffect(() => {
        const styleElement = document.createElement("style");
        styleElement.innerHTML = styles1;
        document.head.appendChild(styleElement);

        return () => {
            document.head.removeChild(styleElement);
        };
    }, []);

    const [activeTab, setActiveTab] = useState("roles");
    const [items, setItems] = useState([]);
    const [cart, setCart] = useState({ items: [], total: 0 });

    const fetchItems = async () => {
        try {
            setItems([
                { id: "1", name: "VIP Role", price: 4.99, type: "roles", image: pic11 },
                { id: "2", name: "Premium Role", price: 9.99, type: "roles", image: pic22 },
                { id: "3", name: "Elite Role", price: 19.99, type: "roles", image: pic33 },
                { id: "4", name: "1 Month Boost", price: 4.99, type: "boosters", image: pic1 },
                { id: "5", name: "3 Month Boost", price: 12.99, type: "boosters", image: pic2 },
                { id: "6", name: "6 Month Boost", price: 24.99, type: "boosters", image: pic3 },
                { id: "7", name: "$10 Gift Card", price: 10.0, type: "giftcards" },
                { id: "8", name: "$25 Gift Card", price: 25.0, type: "giftcards" },
                { id: "9", name: "$50 Gift Card", price: 50.0, type: "giftcards" },
            ]);
        } catch (error) {
            console.error("Failed to get items:", error);
        }
    };

    const addToCart = (item) => {
        setCart((prev) => ({
            items: [...prev.items, item],
            total: prev.total + item.price,
        }));
    };

    useEffect(() => {
        fetchItems();
    }, []);


    return (
        <div className="min-h-screen bg-[#0a0d16] bg-[url('/background.webp')] bg-cover bg-center bg-no-repeat text-white font-sans relative overflow-hidden">
            {/* Magical Starfield */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute w-full h-full bg-[url('/stars.webp')] bg-repeat opacity-40"></div>
                <div className="absolute w-full h-full animate-twinkle"></div>
            </div>

            <Header cart={cart} />
            <LogoAndJoinSection />
            <MainContent
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                items={items}
                addToCart={addToCart}
            />
            <Footer />
            <Disclaimer />
        </div>
    );
}