import { Link } from "react-router-dom";
import { Flame, Shield, Calendar, ArrowRight } from "lucide-react";

export default function IntroPage() {
  return (
    <div className="relative overflow-hidden bg-white text-[#6E6E6E] dark:bg-[#0f0f0f] dark:text-white">
      {/* BACKGROUND ACCENTS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#BAFF39]/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-gray-300/30 blur-3xl" />

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
            <span className="text-[#BAFF39] drop-shadow-[0_0_10px_rgba(186,255,57,0.4)]">
              prove consistency.
            </span>
          </h1>

          <p className="mt-6 text-lg text-[#6E6E6E] dark:text-gray-400 max-w-xl leading-relaxed">
            HabTrack is not about motivation. It’s about showing up daily,
            tracking proof, and earning credibility through consistency.
          </p>

          {/* CTA */}
          <div className="mt-12 flex flex-wrap gap-5">
            <Link
              to="/register"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#BAFF39] text-black shadow-lg font-medium hover:scale-[1.04] active:scale-[0.98] transition-transform duration-200"
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

        {/* RIGHT (IMPROVED CARD) */}
        <div className="hidden lg:flex justify-center">
          <div className="relative w-[420px] h-[520px]">
            {/* GLOW */}
            <div className="absolute inset-0 rounded-[2.5rem] bg-[#BAFF39]/20 blur-3xl opacity-60" />

            {/* CARD */}
            <div className="relative h-full rounded-[2.5rem] p-6 bg-white/70 dark:bg-white/5 backdrop-blur-2xl border border-gray-200 dark:border-gray-800 shadow-2xl flex flex-col justify-between">
              {/* HEADER */}
              <div className="flex items-center justify-between text-sm text-[#6E6E6E] dark:text-gray-400">
                <span>~Tracker</span>
                <span className="text-[#BAFF39] text-xs font-medium">LIVE</span>
              </div>

              {/* IMAGE */}
              <div className="flex justify-center items-center -mt-4">
                <img
                  className="h-64 object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.25)]"
                  src="/meditating.webp"
                  alt=""
                />
              </div>

              {/* MOCK DATA */}
              <div className="space-y-3 mt-4">
                <MockHabit title="Morning Workout" streak={12} />
                <MockHabit title="Deep Work" streak={8} />
                <MockHabit title="Reading" streak={21} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="relative z-10 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          {/* HEADER */}
          <div className="max-w-2xl mb-14 md:mb-20">
            <span className="text-xs tracking-widest uppercase text-[#6E6E6E] dark:text-gray-400">
              System over motivation
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 text-black dark:text-white leading-tight">
              Built for people who
              <span className="text-[#BAFF39]"> show up daily.</span>
            </h2>

            <p className="mt-4 md:mt-6 text-base md:text-lg text-[#6E6E6E] dark:text-gray-400 leading-relaxed">
              Motivation fades. Systems don’t. HabTrack makes discipline
              visible, measurable, and impossible to ignore.
            </p>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">
            {/* LEFT - FEATURES */}
            <div className="space-y-5 md:space-y-6">
              <Feature
                icon={<Flame />}
                title="Streak-Driven Habits"
                desc="Break the chain, lose the streak. It forces honesty."
              />
              <Feature
                icon={<Calendar />}
                title="Daily Proof System"
                desc="Every action is logged. Your effort becomes visible."
              />
              <Feature
                icon={<Shield />}
                title="Credibility Score"
                desc="Consistency builds trust — with yourself."
              />
            </div>

            {/* RIGHT - CARD */}
            <div className="relative w-full">
              {/* glow (scaled down on mobile) */}
              <div className="absolute inset-0 bg-[#BAFF39]/10 blur-2xl md:blur-3xl rounded-2xl md:rounded-3xl" />

              <div className="relative rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-gray-800 shadow-lg md:shadow-xl">
                <h3 className="text-lg md:text-xl font-semibold text-black dark:text-white mb-3 md:mb-4">
                  Why this works
                </h3>

                <div className="space-y-3 md:space-y-5 text-sm md:text-base text-[#6E6E6E] dark:text-gray-400 leading-relaxed">
                  <p>
                    Most habit apps rely on motivation. That’s why they fail.
                  </p>
                  <p>
                    HabTrack forces accountability through visible proof and
                    streak pressure.
                  </p>
                  <p className="text-black dark:text-white font-medium">
                    You don’t feel disciplined — you become disciplined.
                  </p>
                </div>

                {/* STATS */}
                <div className="mt-6 md:mt-8 grid grid-cols-3 gap-3 md:gap-4">
                  <Stat label="Routine" value="100%" />
                  <Stat label="Excuses" value="0%" />
                  <Stat label="Proof" value="Daily" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-12 text-xs text-[#6E6E6E] dark:text-gray-500">
        Built for people who value discipline over motivation.
      </footer>
    </div>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <div className="flex gap-4 items-start rounded-xl md:rounded-2xl p-4 md:p-5 bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-gray-800 hover:scale-[1.02] transition">
      <div className="min-w-[40px] h-10 flex items-center justify-center rounded-lg bg-[#BAFF39] text-black shadow-sm">
        {icon}
      </div>

      <div>
        <h3 className="text-sm md:text-base font-semibold text-black dark:text-white">
          {title}
        </h3>
        <p className="text-xs md:text-sm text-[#6E6E6E] dark:text-gray-400 mt-1 leading-relaxed">
          {desc}
        </p>
      </div>
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

function Stat({ label, value }) {
  return (
    <div className="rounded-lg md:rounded-xl p-3 md:p-4 text-center bg-white/70 dark:bg-white/5 border border-gray-200 dark:border-gray-800">
      <div className="text-sm md:text-lg font-semibold text-black dark:text-white">
        {value}
      </div>
      <div className="text-[10px] md:text-xs text-[#6E6E6E] dark:text-gray-400 mt-1">
        {label}
      </div>
    </div>
  );
}
