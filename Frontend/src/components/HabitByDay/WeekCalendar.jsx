import { useEffect, useRef } from "react";
import { DAYS } from "../../constants/days";

export default function WeekCalendar({
  weekDates = [],
  selectedIndex = 0,
  onSelect = () => {},
  habitCounts = [],
}) {
  const containerRef = useRef(null);
  const todayRef = useRef(null);
  const itemRefs = useRef([]);

  /* AUTO SCROLL TO TODAY */
  useEffect(() => {
    if (todayRef.current && containerRef.current) {
      todayRef.current.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [weekDates]);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const handleDateSearch = (e) => {
    const value = e.target.value;
    if (!value) return;

    const target = new Date(value);
    target.setHours(0, 0, 0, 0);

    const index = weekDates.findIndex(
      (d) =>
        d.getFullYear() === target.getFullYear() &&
        d.getMonth() === target.getMonth() &&
        d.getDate() === target.getDate()
    );

    if (index !== -1) {
      onSelect(index);
      itemRefs.current[index]?.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  };

  return (
    <div className="space-y-3 bg-">
      {/* ===== DAYS STRIP ===== */}
      <div
        ref={containerRef}
        className="
          flex gap-2 overflow-x-auto pb-2
          scroll-smooth
        "
      >
        {weekDates.map((date, i) => {
          const isSelected = i === selectedIndex;
          const isToday =
            date.getFullYear() === today.getFullYear() &&
            date.getMonth() === today.getMonth() &&
            date.getDate() === today.getDate();

          const count = habitCounts[i] ?? 0;

          return (
            <button
              key={i}
              ref={(el) => {
                itemRefs.current[i] = el;
                if (isToday) todayRef.current = el;
              }}
              onClick={() => onSelect(i)}
              className={`
                relative min-w-[68px] px-3 py-2 rounded-xl
                backdrop-blur-xl
                border transition-all duration-150

                ${
                  isSelected
                    ? `
                      bg-[#BAFF39]/20
                      border-[#BAFF39]/40
                      text-black dark:text-white
                    `
                    : `
                      bg-white/80 dark:bg-[#0A0A0A]/80
                      border-gray-200 dark:border-gray-800
                      text-[#6E6E6E]
                      hover:text-black dark:hover:text-white
                      hover:bg-white dark:hover:bg-[#0A0A0A]
                    `
                }
              `}
            >
              {/* TODAY INDICATOR */}
              {isToday && !isSelected && (
                <span className="absolute top-1 left-1 w-1.5 h-1.5 bg-[#BAFF39] rounded-full" />
              )}

              <div className="text-[10px] uppercase tracking-wide">
                {DAYS[date.getDay()]}
              </div>

              <div className="text-lg font-semibold">
                {date.getDate()}
              </div>

              {/* COUNT */}
              {count > 0 && (
                <span
                  className={`
                    absolute top-1 right-1 text-[10px]
                    px-1.5 py-0.5 rounded-full
                    transition

                    ${
                      isSelected
                        ? "bg-black text-white"
                        : "bg-[#BAFF39]/20 text-[#BAFF39]"
                    }
                  `}
                >
                  {count}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* ===== DATE SEARCH ===== */}
      <div className="flex items-center gap-2">
        <span className="text-xs text-[#6E6E6E]">
          Jump to date:
        </span>

        <input
          type="date"
          onChange={handleDateSearch}
          className="
            bg-white dark:bg-[#0A0A0A]
            border border-gray-200 dark:border-gray-800
            text-black dark:text-white
            rounded-md px-2 py-1 text-xs
            focus:outline-none focus:ring-2 focus:ring-[#BAFF39]/40
            transition
          "
        />
      </div>
    </div>
  );
}