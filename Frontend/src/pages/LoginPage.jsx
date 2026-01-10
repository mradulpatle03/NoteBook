import { useState, useEffect } from "react";
import api from "../api/axios";
import { useNavigate, Link } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const navigate = useNavigate();

  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  /* REDIRECT IF LOGGED IN */
  useEffect(() => {
    const token = localStorage.getItem("token");
    // if (token) navigate("/dashboard");
  }, [navigate]);

  /* EMAIL/PASSWORD LOGIN */
  const submit = async (e) => {
    e.preventDefault();
    setError("");

    if (!identifier || !password) {
      setError("All fields are required");
      return;
    }

    try {
      setLoading(true);

      const res = await api.post("/auth/login", {
        identifier,
        password,
      });

      localStorage.setItem("token", res.data.token);
      // set user in storage
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      {/* BACKGROUND */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl" />

      <form
        onSubmit={submit}
        className="relative w-full max-w-sm bg-white/90 dark:bg-slate-900/90 backdrop-blur border border-slate-200 dark:border-slate-800 p-6 sm:p-8 rounded-2xl shadow-xl"
      >
        {/* HEADER */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-semibold">Welcome back</h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Sign in to your account
          </p>
        </div>

        {/* ERROR */}
        {error && (
          <div className="mb-4 text-sm text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 rounded-md px-3 py-2">
            {error}
          </div>
        )}

        {/* DIVIDER */}
        <div className="flex items-center gap-3 mb-5">
          <div className="flex-1 h-px bg-slate-200 dark:bg-slate-700" />
          <span className="text-xs text-slate-400">OR</span>
          <div className="flex-1 h-px bg-slate-200 dark:bg-slate-700" />
        </div>

        {/* IDENTIFIER */}
        <label className="text-xs text-slate-600 dark:text-slate-400 mb-1 block">
          Email or Username
        </label>
        <div className="relative mb-4">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
          <input
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            disabled={loading}
            className="w-full pl-10 pr-3 py-2 rounded-md bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 focus:ring-2 focus:ring-emerald-500/40"
          />
        </div>

        {/* PASSWORD */}
        <label className="text-xs text-slate-600 dark:text-slate-400 mb-1 block">
          Password
        </label>
        <div className="relative mb-6">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
            className="w-full pl-10 pr-10 py-2 rounded-md bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 focus:ring-2 focus:ring-emerald-500/40"
          />
          <button
            type="button"
            onClick={() => setShowPassword((p) => !p)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>

        {/* SUBMIT */}
        <button
          disabled={loading}
          className="w-full bg-emerald-600 hover:bg-emerald-700 py-2.5 rounded-md font-medium text-white disabled:opacity-60 transition"
        >
          {loading ? "Logging in…" : "Login"}
        </button>

        {/* FOOTER */}
        <p className="mt-6 text-sm text-slate-600 dark:text-slate-400 text-center">
          Don’t have an account?{" "}
          <Link to="/register" className="text-emerald-500 hover:underline">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}
