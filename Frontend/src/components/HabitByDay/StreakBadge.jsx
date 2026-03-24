import { useEffect, useState } from "react";
import api from "../../api/axios";

export default function StreakBadge({ habitId }) {
  const [streak, setStreak] = useState(null);

  const fetchStreak = async () => {
    if (!habitId) return;

    try {
      const res = await api.get(`/streak/${habitId}`);
      setStreak(res.data.streak);
    } catch {
      setStreak(0);
    }
  };

  useEffect(() => {
    fetchStreak();
  }, [habitId]);

  // 🔥 REAL-TIME UPDATE
  useEffect(() => {
    const handler = () => fetchStreak();
    window.addEventListener("habits-updated", handler);
    return () => window.removeEventListener("habits-updated", handler);
  }, [habitId]);

  if (streak === null) {
    return <span className="text-xs text-zinc-600 dark:text-zinc-500">…</span>;
  }

  return (
    <span
      className="
    text-xs px-2.5 py-0.5 rounded-full
    font-medium
    border
    bg-[#BAFF39]/15 text-[#BAFF39] border-[#BAFF39]/30
    dark:bg-[#BAFF39]/10 dark:text-[#BAFF39] dark:border-[#BAFF39]/20
    backdrop-blur-sm
  "
    >
      🔥 {streak}
    </span>
  );
}
