import { Trash2, Check } from "lucide-react";
import { motion } from "framer-motion";
import StreakBadge from "./StreakBadge";

export default function HabitItem({
  habit,
  onComplete,
  onDelete,
  disabled,
}) {
  const handleDelete = () => {
    const confirmation = window.prompt(
      `Type the habit name to delete:\n\n"${habit.title}"`
    );

    if (!confirmation || confirmation.trim() !== habit.title) {
      alert("Habit name did not match. Deletion cancelled.");
      return;
    }

    onDelete(habit._id);
  };

  const canToggle = !disabled && !habit.done;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="
        group
        flex items-center justify-between
        rounded-xl
        px-4 py-3
        backdrop-blur-xl
        bg-white/80 dark:bg-[#0A0A0A]/80
        border border-gray-200 dark:border-gray-800
        transition-all
        hover:bg-white dark:hover:bg-[#0A0A0A]
      "
    >
      {/* LEFT */}
      <div className="flex items-center gap-3 flex-1 min-w-0">
        {/* STATUS */}
        <button
          onClick={() => canToggle && onComplete(habit._id)}
          disabled={!canToggle}
          aria-label={
            habit.done ? "Habit completed" : "Mark habit as completed"
          }
          className={`
            w-5 h-5 rounded-md border flex items-center justify-center
            transition-all
            focus:outline-none focus:ring-2 focus:ring-[#BAFF39]/40

            ${
              habit.done
                ? "bg-[#BAFF39] border-[#BAFF39]"
                : "border-gray-300 dark:border-gray-700 group-hover:border-[#BAFF39]"
            }

            ${!canToggle ? "opacity-40 cursor-not-allowed" : ""}
          `}
        >
          {habit.done && <Check size={12} className="text-black" />}
        </button>

        {/* TITLE */}
        <span
          className={`
            text-sm truncate transition-colors

            ${
              habit.done
                ? "line-through text-[#6E6E6E]"
                : "text-black dark:text-white"
            }
          `}
          title={habit.title}
        >
          {habit.title}
        </span>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-3 ml-3">
        <StreakBadge habitId={habit._id} />

        {onDelete && (
          <button
            onClick={handleDelete}
            aria-label="Delete habit"
            className="
              opacity-0 group-hover:opacity-100
              text-[#6E6E6E]
              hover:text-red-500
              transition
            "
            title="Delete habit"
          >
            <Trash2 size={16} />
          </button>
        )}
      </div>
    </motion.div>
  );
}