import { DAYS } from "../../constants/days";

export default function AddHabitForm({ state, actions }) {
  const {
    title,
    frequency,
    days,
    intervalDays,
    durationType,
    durationDays,
    loading,
  } = state;

  const {
    setTitle,
    setFrequency,
    toggleDay,
    setIntervalDays,
    setDurationType,
    setDurationDays,
    submit,
  } = actions;

  const inputBase = `
    w-full px-3 py-2 rounded-lg
    bg-white dark:bg-[#0A0A0A]
    text-black dark:text-white
    border border-gray-200 dark:border-gray-800
    placeholder:text-[#6E6E6E]
    focus:outline-none focus:ring-2 focus:ring-[#BAFF39]/40
    transition
    disabled:opacity-60
  `;

  return (
    <div className="space-y-4">
      {/* TITLE */}
      <input
        className={inputBase}
        placeholder="Habit title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        disabled={loading}
      />

      {/* FREQUENCY */}
      <select
        className={inputBase}
        value={frequency}
        onChange={(e) => setFrequency(e.target.value)}
        disabled={loading}
      >
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="interval">Every N days</option>
      </select>

      {/* WEEKLY DAYS */}
      {frequency === "weekly" && (
        <div className="flex flex-wrap gap-2">
          {DAYS.map((day) => {
            const active = days.includes(day);

            return (
              <button
                key={day}
                type="button"
                onClick={() => toggleDay(day)}
                className={`
                  px-3 py-1.5 rounded-lg text-sm border
                  transition-all

                  ${
                    active
                      ? `
                        bg-[#BAFF39] text-black border-[#BAFF39]
                      `
                      : `
                        bg-white dark:bg-[#0A0A0A]
                        border-gray-200 dark:border-gray-800
                        text-[#6E6E6E]
                        hover:text-black dark:hover:text-white
                        hover:bg-gray-100 dark:hover:bg-white/5
                      `
                  }
                `}
              >
                {day.toUpperCase()}
              </button>
            );
          })}
        </div>
      )}

      {/* INTERVAL */}
      {frequency === "interval" && (
        <div className="flex items-center gap-3">
          <input
            type="number"
            min={1}
            value={intervalDays}
            onChange={(e) => setIntervalDays(+e.target.value)}
            className={`${inputBase} w-24`}
          />
          <span className="text-sm text-[#6E6E6E]">days</span>
        </div>
      )}

      {/* DURATION */}
      <div className="space-y-2">
        <select
          value={durationType}
          onChange={(e) => setDurationType(e.target.value)}
          className={inputBase}
        >
          <option value="forever">Forever</option>
          <option value="custom">Only for X days</option>
        </select>

        {durationType === "custom" && (
          <input
            type="number"
            min={1}
            value={durationDays}
            onChange={(e) => setDurationDays(+e.target.value)}
            className={inputBase}
          />
        )}
      </div>

      {/* ACTION */}
      <div className="flex justify-end pt-2">
        <button
          onClick={submit}
          disabled={loading}
          className="
            px-5 py-2 rounded-lg
            bg-[#BAFF39] text-black
            hover:scale-[1.02] active:scale-[0.98]
            transition
            disabled:opacity-60
          "
        >
          {loading ? "Saving..." : "Save"}
        </button>
      </div>
    </div>
  );
}