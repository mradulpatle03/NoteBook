import { Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import api from "../../api/axios";
import InviteEmptyState from "./InviteEmptyState";

export default function UserSearchInput({
  value = "",
  onChange = () => {},
  onUserSelect = () => {},
}) {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const wrapperRef = useRef(null);
  const debounceRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setResults([]);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    const q = value.trim();

    // reset cleanly
    if (q.length < 2) {
      setResults([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(async () => {
      try {
        const res = await api.get(`/users/search?q=${encodeURIComponent(q)}`);
        setResults(res.data || []);
      } catch {
        setResults([]);
      } finally {
        setLoading(false);
      }
    }, 300);

    return () => clearTimeout(debounceRef.current);
  }, [value]);

  const showDropdown = loading || results.length > 0;

  return (
    <div ref={wrapperRef} className="relative">
      {/* ICON */}
      <Search
        size={14}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6E6E6E]"
      />

      {/* INPUT */}
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search by name, username or email"
        autoComplete="off"
        className="
      w-full pl-9 pr-3 py-2.5 text-sm
      rounded-md
      bg-white/70 dark:bg-white/5
      backdrop-blur
      border border-[#6E6E6E]/30
      text-black dark:text-white
      placeholder:text-[#6E6E6E]
      focus:border-[#BAFF39]
      outline-none transition
    "
      />

      {/* DROPDOWN */}
      {showDropdown && (
        <div
          className="
        absolute z-[9999] mt-2 w-full
        bg-white/90 dark:bg-white/5
        backdrop-blur
        border border-[#6E6E6E]/20
        rounded-xl shadow-lg
        max-h-60 overflow-y-auto
      "
        >
          {loading ? (
            <InviteEmptyState text="Searching users…" />
          ) : results.length === 0 ? (
            <InviteEmptyState text="No users found" />
          ) : (
            <ul className="py-1">
              {results.map((u) => (
                <li
                  key={u._id}
                  onClick={() => {
                    onUserSelect(u.username);
                    setResults([]);
                  }}
                  className="
                px-3 py-2 cursor-pointer rounded-md
                hover:bg-black/5 dark:hover:bg-white/10
                transition
              "
                >
                  <div className="text-sm font-medium text-black dark:text-white">
                    {u.name}
                  </div>
                  <div className="text-xs text-[#6E6E6E]">@{u.username}</div>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
