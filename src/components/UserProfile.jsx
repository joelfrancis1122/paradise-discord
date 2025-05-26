import { useEffect, useState } from "react";

export default function UserProfile() {
  const [user, setUser] = useState(null);

useEffect(() => {
  const token = localStorage.getItem("jwt");
  if (!token) return;
  fetch("http://localhost:3001/api/me", {
    headers: { Authorization: `Bearer ${token}` }
  })
    .then(res => res.json())
    .then(data => {
      if (data.user) setUser(data.user);
      else if (data.error) {
        // Token invalid or expired
        localStorage.removeItem("jwt");
        setUser(null);
        window.location.href = "/login";
      }
    });
}, []);

  if (!user) return <div>Loading user...</div>;

  return (
    <div className="flex items-center gap-2">
      <img
        src={`https://cdn.discordapp.com/avatars/${user.discordId}/${user.avatar}.png`}
        alt="avatar"
        className="w-10 h-10 rounded-full"
      />
      <span>{user.username}</span>
    </div>
  );
}