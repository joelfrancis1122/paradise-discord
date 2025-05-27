"use client"

import { useEffect, useRef, useState } from "react"
import gift from "/gift.webp"
import { toast } from "react-toastify"

export default function TabContent({ activeTab, items, addToCart }) {
  const [addedItemId, setAddedItemId] = useState(null)
  const [flippedCards, setFlippedCards] = useState([])

  useEffect(() => {
    console.log("active", activeTab)
  }, [activeTab])

  const handleAddToCart = (item) => {
    const sound = new Audio("/sounds/magic-chime.wav")
    sound.play().catch((error) => {
      console.error("Error playing sound:", error)
    })

    addToCart(item)
    setAddedItemId(item.id)

    toast.success(
      <div className="flex items-center gap-2">
        <span>{item.name} added to cart</span>
      </div>,
      {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      },
    )

    setTimeout(() => {
      setAddedItemId(null)
    }, 2000)
  }
const flipSoundRef = useRef(new Audio('/sounds/wind.wav'));

  const toggleFlip = (itemId) => {
      
      const flipSound = flipSoundRef.current;
      flipSound.volume = 0.2; 
  flipSound.currentTime = 0; 
  flipSound.play();

    setFlippedCards((prev) => (prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]))
  }

  const parseDetails = (details, type) => {
    console.log(`Parsing details for type ${type}:`, details)
    if (!details) return []

    if (type === "roles" || type === "boosters") {
      const parsed = details
        .replace("Benefits: ", "")
        .split(", ")
        .map((benefit) => {
          let text = benefit.trim()
          if (text.includes("XP")) {
            text = text.replace(/(\dx XP)/, "<strong>$1</strong>")
          }
          return { text, icon: type === "roles" ? "👑" : "⭐" }
        })
      console.log(`Parsed details for ${type}:`, parsed)
      return parsed
    } else if (type === "giftcards") {
      const points = details.split(". ").filter((point) => point.trim() !== "")
      const parsed = points.map((point) => {
        let icon = "🎁"
        let text = point.trim()
        if (text.includes("Valid")) icon = "⏳"
        if (text.includes("bonus")) {
          icon = "💰"
          text = text.replace(/(\$\d+ credit)/, "<strong>$1</strong>")
        }
        return { text, icon }
      })
      console.log(`Parsed details for ${type}:`, parsed)
      return parsed
    }
    return []
  }

  return (
    <div className="md:col-span-4 bg-gradient-to-br from-[#1a0b2e]/80 to-[#0f172a]/80 backdrop-blur-3xl border border-[#8b5cf6]/30 rounded-2xl p-6 shadow-[0_0_20px_rgba(139,92,246,0.7)] relative overflow-hidden">
      <div className="absolute inset-0  bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.15)_0%,transparent_70%)] opacity-40 animate-pulse" />
      {activeTab === "roles" && (
        <div className="animate-fade">
          <h1 className="text-3xl font-extrabold text-[#a78bfa] mb-2 tracking-widest [text-shadow:0_2px_4px_rgba(0,0,0,0.7)]">
            Grab roles
          </h1>
          <h2 className="text-xl font-semibold mb-4 text-white/90 [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
            Welcome to our store!
          </h2>
          <p className="mb-4 text-white/80">
            Get instant delivery of purchase. We deeply appreciate your love and kindness for donating !! 💖
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {items
              .filter((item) => item.type === "roles")
              .map((item) => (
                <div
                  key={item.id}
                  className="relative cursor-pointer [perspective:1000px]"
                  onClick={() => toggleFlip(item.id)}
                >
                  <div
                    className={`relative w-full min-h-[450px] transition-transform duration-500 [transform-style:preserve-3d] ${flippedCards.includes(item.id) ? "[transform:rotateY(180deg)]" : ""}`}
                  >
                    {/* Front Side */}
                    <div className="absolute w-full min-h-[450px] flex flex-col items-center justify-between p-4 rounded-2xl bg-gradient-to-br from-[#1a0b2e]/60 to-[#4c1d95]/60 [backface-visibility:hidden]">
                      <div className="absolute inset-0  bg-[radial-gradient(circle_at_10%_10%,rgba(255,255,255,0.2)_0%,transparent_50%)] opacity-20 hover:opacity-40 transition-opacity duration-300" />
                      <div className="p-3 rounded-full mb-4 shadow-[0_0_10px_rgba(139,92,246,0.7)]">
                        {item.image && (
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt="Roles Icon"
                            className="h-40 w-40 object-contain drop-shadow-[0_0_10px_rgba(255,255,0,0.8)]"
                          />
                        )}
                      </div>
                      <h3 className="font-bold text-lg text-white mb-2 tracking-widest [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
                        {item.name}
                      </h3>
                      <p className="text-white/80 text-center mb-4">Get access to exclusive perks and features</p>
                      <p className="font-extrabold text-xl text-white mb-3 [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
                        ${item.price.toFixed(2)}
                      </p>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          handleAddToCart(item)
                        }}
                        className="w-full bg-gradient-to-r from-[#4c1d95] to-[#7e22ce] text-white font-semibold px-4 py-2 rounded-lg transition-all duration-200 shadow-[0_0_10px_rgba(139,92,246,0.7)] hover:shadow-[0_0_15px_rgba(139,92,246,1)] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#8b5cf6] relative overflow-hidden"
                        aria-label={`Add ${item.name} to cart`}
                      >
                        <span className="relative z-10">Add to Cart</span>
                      </button>
                    </div>

                    {/* Back Side */}
                    <div className="absolute w-full min-h-[450px] flex flex-col items-center justify-start p-6 rounded-2xl bg-gradient-to-br from-[#4c1d95]/70 to-[#7e22ce]/70 text-white [backface-visibility:hidden] [transform:rotateY(180deg)] overflow-y-auto">
                      <div className="absolute inset-0  bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.2)_0%,transparent_60%)] opacity-30" />
                      <h3 className="font-bold text-2xl text-white mb-3 tracking-widest [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
                        {item.name}
                      </h3>
                      <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full mb-4"></div>
                      <h4 className="text-lg font-semibold text-purple-300 mb-3">Benefits</h4>
                      {parseDetails(item.details, "roles").length > 0 ? (
                        <ul className="text-white/90 text-base mb-6 space-y-4 w-full">
                          {parseDetails(item.details, "roles").map((detail, index) => (
                            <li
                              key={index}
                              className="flex items-center gap-3 animate-fade-up"
                              style={{ animationDelay: `${index * 100}ms` }}
                            >
                              <span className="text-2xl text-yellow-300 flex-shrink-0">{detail.icon}</span>
                              <span className="leading-relaxed" dangerouslySetInnerHTML={{ __html: detail.text }} />
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-white/80 mb-6">No details available.</p>
                      )}
                      <div className="mt-auto w-full">
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            handleAddToCart(item)
                          }}
                          className="w-full bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-200 shadow-[0_0_10px_rgba(139,92,246,0.7)] hover:shadow-[0_0_15px_rgba(139,92,246,1)] hover:scale-105"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}

      {activeTab === "boosters" && (
        <div className="animate-fade">
          <h1 className="text-3xl font-extrabold text-[#a78bfa] mb-2 tracking-widest [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
            Boosters
          </h1>
          <h2 className="text-xl font-semibold mb-4 text-white/90 [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
            Enhance your server experience!
          </h2>
          <p className="mb-4 text-white/80">Power up your journey — unlock boosts and level up fast! 🚀</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {items
              .filter((item) => item.type === "boosters")
              .map((item) => (
                <div
                  key={item.id}
                  className="relative cursor-pointer [perspective:1000px]"
                  onClick={() => toggleFlip(item.id)}
                >
                  <div
                    className={`relative w-full min-h-[450px] transition-transform duration-500 [transform-style:preserve-3d] ${flippedCards.includes(item.id) ? "[transform:rotateY(180deg)]" : ""}`}
                  >
                    {/* Front Side */}
                    <div className="absolute w-full min-h-[450px] flex flex-col items-center justify-between p-4 rounded-2xl bg-gradient-to-br from-[#1a0b2e]/60 to-[#4c1d95]/60 [backface-visibility:hidden]">
                      <div className="absolute inset-0  bg-[radial-gradient(circle_at_10%_10%,rgba(255,255,255,0.2)_0%,transparent_50%)] opacity-20 hover:opacity-40 transition-opacity duration-300" />
                      <div className="p-3 rounded-full mb-4 shadow-[0_0_10px_rgba(59,130,246,0.7)]">
                        {item.image && (
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt="Booster Icon"
                            className="h-40 w-40 object-contain drop-shadow-[0_0_10px_rgba(255,255,0,0.8)]"
                          />
                        )}
                      </div>
                      <h3 className="font-bold text-lg text-white mb-2 tracking-widest [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
                        {item.name}
                      </h3>
                      <p className="text-white/80 text-center mb-4">
                        Boost the server for{" "}
                        {item.name.includes("1") ? "1 month" : item.name.includes("3") ? "3 months" : "6 months"}
                      </p>
                      <p className="font-extrabold text-xl text-white mb-3 [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
                        ${item.price.toFixed(2)}
                      </p>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          handleAddToCart(item)
                        }}
                        className="w-full bg-gradient-to-r from-[#4c1d95] to-[#7e22ce] text-white font-semibold px-4 py-2 rounded-lg transition-all duration-200 shadow-[0_0_10px_rgba(139,92,246,0.7)] hover:shadow-[0_0_15px_rgba(139,92,246,1)] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#8b5cf6] relative overflow-hidden"
                        aria-label={`Add ${item.name} to cart`}
                      >
                        <span className="relative z-10">Add to Cart</span>
                      </button>
                    </div>

                    {/* Back Side */}
                    <div className="absolute w-full min-h-[450px] flex flex-col items-center justify-start p-6 rounded-2xl bg-gradient-to-br from-[#4c1d95]/70 to-[#7e22ce]/70 text-white [backface-visibility:hidden] [transform:rotateY(180deg)] overflow-y-auto">
                      <div className="absolute inset-0  bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.2)_0%,transparent_60%)] opacity-30" />
                      <h3 className="font-bold text-2xl text-white mb-3 tracking-widest [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
                        {item.name}
                      </h3>
                      <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full mb-4"></div>
                      <h4 className="text-lg font-semibold text-purple-300 mb-3">Benefits</h4>
                      {parseDetails(item.details, "boosters").length > 0 ? (
                        <ul className="text-white/90 text-base mb-6 space-y-4 w-full">
                          {parseDetails(item.details, "boosters").map((detail, index) => (
                            <li
                              key={index}
                              className="flex items-center gap-3 animate-fade-up"
                              style={{ animationDelay: `${index * 100}ms` }}
                            >
                              <span className="text-2xl text-yellow-300 flex-shrink-0">{detail.icon}</span>
                              <span className="leading-relaxed" dangerouslySetInnerHTML={{ __html: detail.text }} />
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-white/80 mb-6">No details available.</p>
                      )}
                      <div className="mt-auto w-full">
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            handleAddToCart(item)
                          }}
                          className="w-full bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-200 shadow-[0_0_10px_rgba(139,92,246,0.7)] hover:shadow-[0_0_15px_rgba(139,92,246,1)] hover:scale-105"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}

      {activeTab === "gifting" && (
        <div className="animate-fade">
          <h1 className="text-3xl font-extrabold text-[#a78bfa] mb-2 tracking-widest [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
            Gift Cards
          </h1>
          <h2 className="text-xl font-semibold mb-4 text-white/90 [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
            Perfect gifts for your friends!
          </h2>
          <p className="mb-4 text-white/80">Got a kind heart? Brighten someone's day with a gift card! 💝</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {items
              .filter((item) => item.type === "giftcards")
              .map((item) => (
                <div
                  key={item.id}
                  className="relative cursor-pointer [perspective:1000px]"
                  onClick={() => toggleFlip(item.id)}
                >
                  <div
                    className={`relative w-full min-h-[450px] transition-transform duration-500 [transform-style:preserve-3d] ${flippedCards.includes(item.id) ? "[transform:rotateY(180deg)]" : ""}`}
                  >
                    {/* Front Side */}
                    <div className="absolute w-full min-h-[450px] flex flex-col items-center justify-between p-4 rounded-2xl bg-gradient-to-br from-[#1a0b2e]/60 to-[#4c1d95]/60 [backface-visibility:hidden]">
                      <div className="absolute inset-0  bg-[radial-gradient(circle_at_10%_10%,rgba(255,255,255,0.2)_0%,transparent_50%)] opacity-20 hover:opacity-40 transition-opacity duration-300" />
                      <div className="p-3 rounded-full mb-4 shadow-[0_0_10px_rgba(236,72,153,0.7)]">
                        <img
                          src={gift || "/placeholder.svg"}
                          alt="Gift Icon"
                          className="h-40 w-40 object-contain drop-shadow-[0_0_10px_rgba(255,255,0,0.8)]"
                        />
                      </div>
                      <h3 className="font-bold text-lg text-white mb-2 tracking-widest [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
                        {item.name}
                      </h3>
                      <p className="text-white/80 text-center mb-4">Gift card value varies</p>
                      <p className="font-extrabold text-xl text-white mb-3 [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
                        ${item.price.toFixed(2)}
                      </p>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          handleAddToCart(item)
                        }}
                        className="w-full bg-gradient-to-r from-[#4c1d95] to-[#7e22ce] text-white font-semibold px-4 py-2 rounded-lg transition-all duration-200 shadow-[0_0_10px_rgba(139,92,246,0.7)] hover:shadow-[0_0_15px_rgba(139,92,246,1)] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#8b5cf6] relative overflow-hidden"
                        aria-label={`Add ${item.name} to cart`}
                      >
                        <span className="relative z-10">Add to Cart</span>
                      </button>
                    </div>

                    {/* Back Side */}
                    <div className="absolute w-full min-h-[450px] flex flex-col items-center justify-start p-6 rounded-2xl bg-gradient-to-br from-[#4c1d95]/70 to-[#7e22ce]/70 text-white [backface-visibility:hidden] [transform:rotateY(180deg)] overflow-y-auto">
                      <div className="absolute inset-0  bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.2)_0%,transparent_60%)] opacity-30" />
                      <h3 className="font-bold text-2xl text-white mb-3 tracking-widest [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
                        {item.name}
                      </h3>
                      <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-purple-600 rounded-full mb-4"></div>
                      <h4 className="text-lg font-semibold text-pink-300 mb-3">Details</h4>
                      {parseDetails(item.details, "giftcards").length > 0 ? (
                        <ul className="text-white/90 text-base mb-6 space-y-4 w-full">
                          {parseDetails(item.details, "giftcards").map((detail, index) => (
                            <li
                              key={index}
                              className="flex items-center gap-3 animate-fade-up"
                              style={{ animationDelay: `${index * 100}ms` }}
                            >
                              <span className="text-2xl flex-shrink-0">{detail.icon}</span>
                              <span className="leading-relaxed" dangerouslySetInnerHTML={{ __html: detail.text }} />
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-white/80 mb-6">No details available.</p>
                      )}
                      <div className="mt-auto w-full">
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            handleAddToCart(item)
                          }}
                          className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-200 shadow-[0_0_10px_rgba(236,72,153,0.7)] hover:shadow-[0_0_15px_rgba(236,72,153,1)] hover:scale-105"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  )
}
