import { Link, useNavigate } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { LogOut, User, Menu } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const { user, loading, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleLogout = () => {
    logout();
    setOpen(false);
    navigate("/");
  };

  return (
    <nav className="sticky top-0 z-40 backdrop-blur-md bg-white/80 dark:bg-stone-900/90 border-b border-[#6E6E6E]/20">
  <div className="w-full px-6 py-4 flex items-center justify-between">

    {/* LEFT: LOGO */}
    <Link
      to="/"
      className="flex items-center gap-2 text-black dark:text-white font-semibold tracking-wide"
    >
      <span className="w-2 h-2 rounded-full bg-[#BAFF39]" />
      <h1 className="text-lg font-bold font-mono tracking-widest uppercase">HabForge</h1>
    </Link>

    {/* RIGHT: ACTIONS */}
    <div className="flex items-center gap-4 relative" ref={menuRef}>
      
      {/* THEME TOGGLE */}
      <ThemeToggle />

      {loading ? (
        <span className="text-[#6E6E6E]">…</span>
      ) : user ? (
        <>
          {/* AVATAR */}
          <button onClick={() => navigate(`/u/${user.username}`)}>
            {user.avatar ? (
              <img
                src={user.avatar}
                className="w-8 h-8 rounded-full border border-[#6E6E6E]/30"
              />
            ) : (
              <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#BAFF39] text-black text-sm font-semibold">
                {(user.name || user.username || "?")[0].toUpperCase()}
              </div>
            )}
          </button>

          {/* MENU */}
          <button
            onClick={() => setOpen((v) => !v)}
            className={`p-1.5 rounded transition ${
              open
                ? "bg-[#BAFF39]/20 text-black dark:text-white"
                : "text-[#6E6E6E] hover:bg-[#BAFF39]/10 hover:text-black dark:hover:text-white"
            }`}
          >
            <Menu size={18} />
          </button>

          {/* DROPDOWN */}
          {open && (
            <div className="absolute right-0 top-12 w-44 rounded-xl bg-white dark:bg-black border border-[#6E6E6E]/20 shadow-md">
              <NavItem
                icon={<User size={14} />}
                label="Profile"
                onClick={() => {
                  navigate(`/u/${user.username}`);
                  setOpen(false);
                }}
              />
              <NavItem
                icon={<LogOut size={14} />}
                label="Logout"
                danger
                onClick={handleLogout}
              />
            </div>
          )}
        </>
      ) : (
        <>
          <Link
            to="/login"
            className="text-[#6E6E6E] hover:text-black dark:hover:text-white transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-4 py-1.5 rounded-md bg-[#BAFF39] text-black font-medium hover:opacity-90 transition"
          >
            Sign Up
          </Link>
        </>
      )}
    </div>
  </div>
</nav>
  );
}

function NavItem({ icon, label, onClick, danger = false }) {
  return (
    <button
      onClick={onClick}
      className={`w-full px-4 py-2 flex items-center gap-2 text-sm transition ${
        danger
          ? "text-red-500 hover:bg-red-500/10"
          : "text-[#6E6E6E] hover:text-black dark:hover:text-white hover:bg-[#BAFF39]/10"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}