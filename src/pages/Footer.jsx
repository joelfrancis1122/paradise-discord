import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="container mx-auto p-4 mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 bg-gradient-to-br relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.15)_0%,transparent_70%)] opacity-40 animate-pulse" />
            <div>
                <h3 className="text-xl font-extrabold text-[#a78bfa] mb-4 tracking-widest [text-shadow:_0_2px_4px_rgba(0,0,0,0.7)]">
                    About Us
                </h3>
                <p className="text-white/80"> <strong>Mirage</strong>  is one of the most advanced, fastest-growing, and uniquely crafted communities on Discord. Built with passion and precision, Mirage brings together users from all walks of life to connect, play, and thrive in a vibrant, welcoming atmosphere. Whether you're here for games, social interaction, or just a place to chill, Mirage evolves constantly to deliver something truly special ❤️</p>
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
                    Reach out to us anytime at official.mirage.team@gmail.com — we’ll get back to you as soon as possible.

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
    );
}