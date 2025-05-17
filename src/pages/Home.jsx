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
import gift from "/gift.webp";
import '../index.css';
import styles1 from "../assets/style";

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
                { id: "7", name: "$10 Gift Card", price: 10.0, type: "giftcards" ,image:gift},
                { id: "8", name: "$25 Gift Card", price: 25.0, type: "giftcards" ,image:gift},
                { id: "9", name: "$50 Gift Card", price: 50.0, type: "giftcards",image:gift },
            ]);
        } catch (error) {
            console.error("Failed to get items:", error);
        }
    };

    const addToCart = (item) => {
        setCart((prev) => {
            const existingItemIndex = prev.items.findIndex(
                (cartItem) => cartItem.id === item.id && cartItem.type === item.type
            );
            let updatedItems;
            if (existingItemIndex >= 0) {
                updatedItems = [...prev.items];
                updatedItems[existingItemIndex].quantity =
                    (updatedItems[existingItemIndex].quantity || 1) + 1;
            } else {
                updatedItems = [...prev.items, { ...item, quantity: 1 }];
            }
            const newTotal = updatedItems.reduce((sum, cartItem) => {
                return sum + cartItem.price * (cartItem.quantity || 1);
            }, 0);
            return {
                items: updatedItems,
                total: newTotal,
            };
        });
    };

    const removeFromCart = (index) => {
        setCart((prev) => {
            const newItems = prev.items.filter((_, i) => i !== index);
            const newTotal = newItems.reduce((sum, cartItem) => {
                return sum + cartItem.price * (cartItem.quantity || 1);
            }, 0);
            return {
                items: newItems,
                total: newTotal,
            };
        });
    };

    const updateCartQuantity = (index, newQuantity) => {
        if (newQuantity <= 0) {
            removeFromCart(index);
            return;
        }
        setCart((prev) => {
            const updatedItems = [...prev.items];
            updatedItems[index].quantity = newQuantity;
            const newTotal = updatedItems.reduce((sum, cartItem) => {
                return sum + cartItem.price * (cartItem.quantity || 1);
            }, 0);
            return {
                items: updatedItems,
                total: newTotal,
            };
        });
    };

    const clearCart = () => {
        setCart({ items: [], total: 0 });
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

            <Header
                cart={cart}
                removeFromCart={removeFromCart}
                updateCartQuantity={updateCartQuantity}
                clearCart={clearCart}
            />
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