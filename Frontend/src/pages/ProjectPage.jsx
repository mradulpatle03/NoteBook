import { Hammer, Rocket } from "lucide-react";

export default function ProjectPage() {
  return (
    <div
      className="
        min-h-[calc(100vh-64px)]
        flex items-center justify-center
        px-6
        bg-gradient-to-br 
        from-white via-[#f9f9f9] to-[#f3f3f3]
        dark:from-[#0a0a0a] dark:via-[#111] dark:to-[#0a0a0a]
        text-black dark:text-white
      "
    >
      {/* GLOW */}
      <div className="absolute w-72 h-72 bg-[#BAFF39]/20 blur-3xl rounded-full -z-10" />

      <div
        className="
          max-w-md w-full
          text-center
          bg-white/80 dark:bg-white/5
          backdrop-blur-xl
          border border-[#6E6E6E]/20
          rounded-2xl
          p-8
          shadow-[0_10px_40px_rgba(0,0,0,0.08)] 
          dark:shadow-[0_10px_40px_rgba(0,0,0,0.6)]
        "
      >
        {/* ICON */}
        <div
          className="
            mx-auto mb-5
            w-12 h-12
            flex items-center justify-center
            rounded-xl
            bg-[#BAFF39]/10
            text-[#BAFF39]
          "
        >
          <Hammer size={22} />
        </div>

        {/* TITLE */}
        <h1 className="text-2xl font-semibold mb-2">
          Projects — Coming Soon
        </h1>

        {/* DESC */}
        <p className="text-sm text-[#6E6E6E] leading-relaxed">
          Team projects and shared tasks are currently under development.
          You’ll be able to create projects, assign group tasks, and track
          progress together.
        </p>

        {/* FOOTNOTE */}
        <div
          className="
            mt-6
            flex items-center justify-center gap-2
            text-xs text-[#6E6E6E]
          "
        >
          <Rocket size={14} className="text-[#BAFF39]" />
          Launching soon
        </div>
      </div>
    </div>
  );
}