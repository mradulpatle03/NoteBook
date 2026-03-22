import { useEffect, useState } from "react";
import { Github, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import api from "../api/axios";

export default function Footer() {
  const [views, setViews] = useState(null);

  useEffect(() => {
    let mounted = true;

    api.get("/views")
      .then((res) => {
        if (mounted && typeof res.data?.count === "number") {
          setViews(res.data.count);
        }
      })
      .catch(() => {});

    return () => (mounted = false);
  }, []);

  return (
    <footer className="bg-white dark:bg-black border-t border-[#6E6E6E]/20">
      
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-10">

        {/* TOP - BRAND STATEMENT */}
        <div className="flex flex-col items-center text-center gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#BAFF39]" />
            <h2 className="text-lg font-semibold text-black dark:text-white tracking-wide">
              HabForge
            </h2>
          </div>

          <p className="text-[#6E6E6E] text-sm max-w-md">
            A focused system to build consistency, track progress, and turn small habits into long-term results.
          </p>
        </div>

        {/* MIDDLE - NAV GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm text-[#6E6E6E]">

          <div className="space-y-2">
            <p className="text-black dark:text-white font-medium">Product</p>
            <Link to="/profile" className="block hover:text-black dark:hover:text-white transition">
              Profile
            </Link>
            <Link to="/privacy" className="block hover:text-black dark:hover:text-white transition">
              Privacy
            </Link>
          </div>

          <div className="space-y-2">
            <p className="text-black dark:text-white font-medium">Resources</p>
            <a href="#" className="block hover:text-black dark:hover:text-white transition">
              Docs
            </a>
            <a href="#" className="block hover:text-black dark:hover:text-white transition">
              Guides
            </a>
          </div>

          <div className="space-y-2 col-span-2 sm:col-span-1">
            <p className="text-black dark:text-white font-medium">Connect</p>
            <a
              href="https://github.com/mradulpatle03"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-black dark:hover:text-white transition"
            >
              <Github size={14} />
              GitHub
            </a>
          </div>

        </div>

        {/* BOTTOM - META */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6E6E6E] pt-6 border-t border-[#6E6E6E]/20">

          <p>
            © {new Date().getFullYear()} HabForge • Built by{" "}
            <span className="text-black dark:text-white">Mradul</span>
          </p>

          <div className="flex items-center gap-4">
            <span>v1.0</span>

            <div className="flex items-center gap-1.5">
              <Eye size={12} />
              <span>
                {views !== null ? `${views.toLocaleString()} views` : "—"}
              </span>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}