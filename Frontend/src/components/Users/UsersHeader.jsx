import { Search } from "lucide-react";

export default function UsersHeader({ search, onSearch }) {
  return (
    <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">

      {/* LEFT */}
      <div className="max-w-lg pt-6">
        <h1 className="text-2xl font-semibold text-black dark:text-white">
          Community Members
        </h1>
        <p className="text-sm text-[#6E6E6E] mt-1">
          Discover and connect with people on the platform
        </p>
      </div>

      {/* RIGHT - SEARCH */}
      <div className="relative w-full md:w-80 shrink-0">
        
        <Search
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6E6E6E]"
        />

        <input
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          className="
            w-full rounded-xl
            pl-10 pr-3 py-2.5 text-sm
            bg-white/70 dark:bg-white/5 backdrop-blur
            border border-[#6E6E6E]/30
            text-black dark:text-white
            placeholder:text-[#6E6E6E]
            focus:outline-none
            focus:border-[#BAFF39]
            transition
          "
        />
      </div>
    </div>
  );
}