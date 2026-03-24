export default function SidebarItem({ icon, label, onClick, active }) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full h-11
        flex items-center gap-3
        px-2 rounded-md
        text-sm
        transition-all duration-150

        ${
          active
            ? `
              bg-[#BAFF39]/20
              text-black dark:text-white
            `
            : `
              text-[#6E6E6E]
              hover:text-black dark:hover:text-white
              hover:bg-gray-100 dark:hover:bg-white/5
            `
        }
      `}
    >
      {/* ICON */}
      <span
        className={`
          shrink-0 flex items-center justify-center w-8
          transition-colors

          ${
            active
              ? `
                text-[#BAFF39]
              `
              : `
                text-[#6E6E6E]
                group-hover:text-black dark:group-hover:text-white
              `
          }
        `}
      >
        {icon}
      </span>

      {/* LABEL */}
      <span
        className="
          whitespace-nowrap overflow-hidden
          max-w-0 group-hover:max-w-xs
          transition-all duration-200
        "
      >
        {label}
      </span>
    </button>
  );
}