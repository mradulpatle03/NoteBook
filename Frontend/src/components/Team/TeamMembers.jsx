import { Crown } from "lucide-react";

export default function TeamMembers({ members }) {
  return (
    <section
      className="
    bg-white/80 dark:bg-white/5
    backdrop-blur
    border border-[#6E6E6E]/20
    rounded-xl
    px-4 py-4
  "
    >
      <h2 className="text-sm font-semibold text-black dark:text-white mb-3">
        Members
      </h2>

      <ul className="space-y-2">
        {members.map((m) => {
          const role = m.role;

          return (
            <li
              key={m._id || m.user?._id}
              className="
            flex items-center justify-between
            px-3 py-2 rounded-lg
            hover:bg-black/5 dark:hover:bg-white/10
            transition
          "
            >
              {/* LEFT */}
              <div className="min-w-0 flex items-center gap-2">
                <span className="text-sm font-medium text-black dark:text-white truncate">
                  {m.user?.name || "Unknown"}
                </span>

                {/* OWNER */}
                {role === "owner" && (
                  <Crown size={12} className="text-[#BAFF39] shrink-0" />
                )}
              </div>

              {/* RIGHT ROLE */}
              <span
                className={`
              text-[10px] uppercase tracking-wide shrink-0 font-medium
              ${
                role === "owner"
                  ? "text-[#BAFF39]"
                  : role === "admin"
                    ? "text-black dark:text-white"
                    : "text-[#6E6E6E]"
              }
            `}
              >
                {role}
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
