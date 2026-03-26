import { Plus } from "lucide-react";

export default function TeamWorkspacePlaceholder({ onStartProject }) {
  return (
    <section
      className="
    min-h-[240px]
    flex flex-col items-center justify-center
    text-center

    bg-white/60 dark:bg-white/5
    backdrop-blur
    border border-dashed border-[#6E6E6E]/30
    rounded-xl
    px-6 py-10
  "
    >
      {/* TITLE */}
      <h2 className="text-base font-semibold text-black dark:text-white">
        No projects yet
      </h2>

      {/* SUBTEXT */}
      <p className="text-sm text-[#6E6E6E] mt-1">
        Start your first project and stay consistent
      </p>

      {/* BUTTON */}
      <button
        onClick={onStartProject}
        className="
      mt-5
      inline-flex items-center gap-2
      px-4 py-2.5 rounded-md
      bg-[#BAFF39] text-black font-medium
      hover:opacity-90 transition
      text-sm
    "
      >
        <Plus size={16} />
        Create project
      </button>
    </section>
  );
}
