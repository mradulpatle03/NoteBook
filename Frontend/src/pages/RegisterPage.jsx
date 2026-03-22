import { useState } from "react";
import api from "../api/axios";
import { useNavigate, Link } from "react-router-dom";
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";

export default function RegisterPage() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !password) {
      setError("All fields are required");
      return;
    }

    try {
      setLoading(true);
      const res = await api.post("/auth/register", { name, email, password });
      localStorage.setItem("token", res.data.token);
      console.log("Registration successful");
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden 
      bg-gradient-to-br from-white via-[#f9f9f9] to-[#f3f3f3] 
      dark:from-[#0a0a0a] dark:via-[#111] dark:to-[#0a0a0a]
      text-black dark:text-white">

      {/* GLOW BACKGROUND */}
      <div className="absolute top-[-100px] left-[-100px] w-72 h-72 bg-[#BAFF39]/20 blur-3xl rounded-full" />
      <div className="absolute bottom-[-100px] right-[-100px] w-72 h-72 bg-[#BAFF39]/20 blur-3xl rounded-full" />

      {/* CARD */}
      <form
        onSubmit={submit}
        className="relative w-full max-w-sm 
        bg-white/80 dark:bg-white/5 
        backdrop-blur-xl 
        border border-[#6E6E6E]/20 
        rounded-2xl p-8 
        shadow-[0_10px_40px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
      >
        {/* HEADER */}
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-semibold tracking-wide">
            Create account
          </h1>
          <p className="text-sm text-[#6E6E6E] mt-1">
            Start building better habits today
          </p>
        </div>

        {/* ERROR */}
        {error && (
          <div className="mb-4 text-sm text-red-500 bg-red-500/10 border border-red-500/20 rounded-md px-3 py-2">
            {error}
          </div>
        )}

        {/* NAME */}
        <label className="text-xs text-[#6E6E6E] mb-1 block">Full Name</label>
        <div className="relative mb-4">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6E6E6E] w-4 h-4" />
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={loading}
            className="w-full pl-10 pr-3 py-2.5 rounded-md 
            bg-white/60 dark:bg-white/5 
            border border-[#6E6E6E]/30 
            focus:border-[#BAFF39] focus:bg-white dark:focus:bg-white/10
            outline-none transition"
          />
        </div>

        {/* EMAIL */}
        <label className="text-xs text-[#6E6E6E] mb-1 block">Email</label>
        <div className="relative mb-4">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6E6E6E] w-4 h-4" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
            className="w-full pl-10 pr-3 py-2.5 rounded-md 
            bg-white/60 dark:bg-white/5 
            border border-[#6E6E6E]/30 
            focus:border-[#BAFF39] focus:bg-white dark:focus:bg-white/10
            outline-none transition"
          />
        </div>

        {/* PASSWORD */}
        <label className="text-xs text-[#6E6E6E] mb-1 block">Password</label>
        <div className="relative mb-6">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6E6E6E] w-4 h-4" />
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
            className="w-full pl-10 pr-10 py-2.5 rounded-md 
            bg-white/60 dark:bg-white/5 
            border border-[#6E6E6E]/30 
            focus:border-[#BAFF39] focus:bg-white dark:focus:bg-white/10
            outline-none transition"
          />
          <button
            type="button"
            onClick={() => setShowPassword((p) => !p)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6E6E6E] hover:text-black dark:hover:text-white"
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>

        {/* SUBMIT */}
        <button
          disabled={loading}
          className="w-full bg-[#BAFF39] text-black py-2.5 rounded-md font-medium 
          hover:scale-[1.01] hover:shadow-md transition disabled:opacity-60"
        >
          {loading ? "Creating account…" : "Create Account"}
        </button>

        {/* FOOTER */}
        <p className="mt-6 text-sm text-[#6E6E6E] text-center">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-black dark:text-white hover:underline"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}