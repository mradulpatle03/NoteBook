import { UserPlus } from "lucide-react";

export default function InviteEmptyState({ text }) {
  return (
    <div
      className="
    flex flex-col items-center justify-center
    py-10 px-4
    text-center
    text-[#6E6E6E]
    animate-fade-in
  "
    >
      {/* ICON BUBBLE */}
      <div
        className="
      relative
      w-16 h-16 rounded-2xl
      flex items-center justify-center
      bg-[#BAFF39]/10
      text-[#BAFF39]
      mb-4
    "
      >
        <UserPlus size={28} />

        {/* glow */}
        <span
          className="
        absolute inset-0 rounded-2xl
        bg-[#BAFF39]/20 blur-xl
        -z-10
      "
        />
      </div>

      {/* TEXT */}
      <p className="text-sm font-medium text-black dark:text-white">{text}</p>

      {/* SUBTEXT */}
      <p className="text-xs mt-1 text-[#6E6E6E]">
        Try searching by username or email
      </p>
    </div>
  );
}
