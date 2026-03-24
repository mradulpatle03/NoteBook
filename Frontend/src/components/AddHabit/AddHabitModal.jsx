import { useAddHabit } from "./useAddHabit";
import AddHabitForm from "./AddHabitForm";

export default function AddHabitModal({ onClose, onAdded }) {
  const { state, actions } = useAddHabit({ onClose, onAdded });

  return (
    <div
      className="
        fixed inset-0 z-50
        flex items-center justify-center
        bg-black/50 backdrop-blur-sm
      "
    >
      {/* MODAL */}
      <div
        className="
          w-[420px] max-w-[92vw]
          rounded-2xl p-6
          bg-white/90 dark:bg-[#0A0A0A]/90
          backdrop-blur-xl
          border border-gray-200 dark:border-gray-800
          shadow-2xl
          animate-in fade-in zoom-in-95 duration-200
        "
      >
        {/* HEADER */}
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg font-semibold text-black dark:text-white">
            Add Habit
          </h2>

          <button
            onClick={onClose}
            className="
              w-8 h-8 flex items-center justify-center
              rounded-md
              text-[#6E6E6E]
              hover:text-black dark:hover:text-white
              hover:bg-gray-100 dark:hover:bg-white/5
              transition
            "
          >
            ✕
          </button>
        </div>

        {/* FORM */}
        <AddHabitForm state={state} actions={actions} />

        {/* FOOTER */}
        <div className="mt-5 flex justify-end">
          <button
            onClick={onClose}
            className="
              text-sm
              text-[#6E6E6E]
              hover:text-black dark:hover:text-white
              transition
            "
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}