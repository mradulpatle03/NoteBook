export default function CreateTeamForm({ state, actions }) {
  const { name, loading, error } = state;
  const { setName, submit } = actions;

  return (
    <div className="space-y-4">
      {/* ERROR */}
      {error && (
        <div
          className="
        text-sm text-red-500
        bg-red-500/10
        border border-red-500/20
        rounded-md px-4 py-2
      "
        >
          {error}
        </div>
      )}

      {/* INPUT */}
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Team name"
        className="
      w-full px-3 py-2.5 text-sm
      rounded-md
      bg-white/70 dark:bg-white/5
      backdrop-blur
      border border-[#6E6E6E]/30
      placeholder:text-[#6E6E6E]
      focus:border-[#BAFF39]
      outline-none transition
    "
      />

      {/* BUTTON */}
      <button
        onClick={submit}
        disabled={loading}
        className="
      w-full py-2.5 text-sm rounded-md
      bg-[#BAFF39] text-black font-medium
      hover:opacity-90 transition
      disabled:opacity-60
    "
      >
        {loading ? "Creating…" : "Create team"}
      </button>
    </div>
  );
}
