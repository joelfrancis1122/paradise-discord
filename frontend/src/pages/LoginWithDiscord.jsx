import React from "react";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const DISCORD_LOGIN_URL = `${BACKEND_URL}/auth/discord`;

export default function LoginWithDiscord() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-3xl mb-6">Login to continue</h1>
            <a
                href={DISCORD_LOGIN_URL}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-bold"
            >
                Login with Discord
            </a>
        </div>
    );
}