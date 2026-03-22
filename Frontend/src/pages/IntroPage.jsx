import { Link } from "react-router-dom";
import { Flame, Shield, Calendar, ArrowRight } from "lucide-react";

export default function IntroPage() {
  return (
    <div className="relative overflow-hidden bg-white text-[#6E6E6E] dark:bg-[#0f0f0f] dark:text-white">
      {/* BACKGROUND ACCENTS */}
      <div className="absolute inset-0 pointer-events-none">
        {/* LIGHT */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#BAFF39]/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-gray-300/30 blur-3xl" />

        {/* DARK */}
        <div className="hidden dark:block absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#BAFF39]/10 blur-3xl" />
        <div className="hidden dark:block absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-gray-700/20 blur-3xl" />
      </div>

      {/* HERO */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-36 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* LEFT */}
        <div>
          <span className="inline-flex items-center gap-2 mb-5 text-xs tracking-widest uppercase text-[#6E6E6E] dark:text-gray-400">
            <span className="w-1.5 h-1.5 rounded-full bg-[#BAFF39]" />
            Habit discipline system
          </span>

          <h1 className="text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight text-black dark:text-white">
            Build habits that
            <br />
            <span className="text-[#BAFF39]">prove consistency.</span>
          </h1>

          <p className="mt-6 text-lg text-[#6E6E6E] dark:text-gray-400 max-w-xl leading-relaxed">
            HabTrack is not about motivation. It’s about showing up daily,
            tracking proof, and earning credibility through consistency.
          </p>

          {/* CTA */}
          <div className="mt-12 flex flex-wrap gap-5">
            <Link
              to="/register"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#BAFF39] text-black shadow-lg hover:scale-[1.03] transition font-medium"
            >
              Start Tracking
              <ArrowRight
                size={16}
                className="transition group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/login"
              className="inline-flex items-center px-7 py-3.5 rounded-xl border border-gray-300 dark:border-gray-700 text-[#6E6E6E] dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10 transition"
            >
              Login
            </Link>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hidden lg:block">
          <div className="rounded-3xl p-7 bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-gray-800 shadow-xl">
            <div className="text-sm text-[#6E6E6E] dark:text-gray-400 mb-5 text-center">
              ~Tracker
            </div>

            <div className="flex justify-center items-center">
              <img
                className="h-96 w-96 object-contain drop-shadow-lg"
                src="/meditating.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="relative z-10 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-28">
          <h2 className="text-3xl font-semibold mb-14 text-black dark:text-white">
            Designed for long-term discipline
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <Feature
              icon={<Flame />}
              title="Streak-Driven Habits"
              desc="Miss a day and the streak breaks. No excuses. Just truth."
            />

            <Feature
              icon={<Calendar />}
              title="Daily Proof System"
              desc="Every habit is logged day by day. Consistency is visible."
            />

            <Feature
              icon={<Shield />}
              title="Credibility Score"
              desc="Your discipline compounds into a public credibility signal."
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-12 text-xs text-[#6E6E6E] dark:text-gray-500 border-t border-gray-200 dark:border-gray-800">
        Built for people who value discipline over motivation.
      </footer>
    </div>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <div className="rounded-2xl p-7 bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-gray-800 hover:scale-[1.02] transition">
      <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#BAFF39] text-black mb-5 shadow-md">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">
        {title}
      </h3>
      <p className="text-sm text-[#6E6E6E] dark:text-gray-400 leading-relaxed">
        {desc}
      </p>
    </div>
  );
}

function MockHabit({ title, streak }) {
  return (
    <div className="flex items-center justify-between rounded-xl px-5 py-3 bg-white/70 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-gray-800">
      <span className="text-sm text-black dark:text-white">{title}</span>
      <span className="text-xs font-medium text-[#BAFF39]">
        {streak} day streak
      </span>
    </div>
  );
}
