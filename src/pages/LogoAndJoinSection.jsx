import logo from "../assets/2Q.png";
import pic from "/image.webp";

export default function LogoAndJoinSection() {
    return (
        <div className="container mx-auto flex flex-col items-center justify-center py-30 relative pointer-events-none">
            <div className="absolute inset-0 opacity-100 pointer-events-none">
                {/* Background Image with Blend Mode */}
                <div className="absolute inset-0 mix-blend-soft-light">

                    <img
                        src={pic || ""}
                        alt="Mirage Logo"
                        className="object-cover w-full h-[500px] transition-transform transform duration-1000 hover:scale-105 will-change-transform"
                    />

                </div>

                {/* Flexbox to align icon center vertically, with 100px left gap */}
                <div className="absolute inset-0 flex items-center pl-[100px]">
                    <img
                        src={logo || ""}
                        alt="Overlay Icon"
                        className="hidden sm:hidden md:block w-30 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-lg object-cover z-10" />
                </div>
            </div>



            <div className="flex items-center gap-4 mt-4">
                <div className="bg-gradient-to-r from-[#4c1d95]/30 to-[#7e22ce]/30 backdrop-blur-2xl border border-[#c4b5fd]/30 rounded-2xl p-4 flex items-center gap-3 shadow-[0_0_15px_rgba(139,92,246,0.6)] relative overflow-hidden">
                    <div className="absolute inset-0  bg-[radial-gradient(circle_at_10%_10%,rgba(255,255,255,0.2)_0%,transparent_50%)] opacity-20 animate-pulse" />
                    <div className="bg-[#5865F2] rounded-md p-2 shadow-[0_0_10px_rgba(88,101,242,0.7)]">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
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
                                Join Mirage Today
                            </h3>
                            <p className="text-sm text-white/80">
                                <span className="bg-[#8b5cf6] px-1 rounded text-white shadow-[0_0_5px_rgba(88,101,242,0.5)]">
                                    65,000
                                </span>{" "}
                                members online
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}