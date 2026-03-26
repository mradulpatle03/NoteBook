import { useState } from "react";
import { Plus } from "lucide-react";

import { useTeamsDashboard } from "../components/Team/useTeamsDashboard";
import { useCreateTeam } from "../components/Team/useCreateTeam";

import TeamInvitesSection from "../components/Team/TeamInvitesSection";
import MyTeamsSection from "../components/Team/MyTeamsSection";
import CreateTeamForm from "../components/Team/CreateTeamForm";

export default function TeamsPage() {
  const { state, actions } = useTeamsDashboard();
  const { teams, invites, loading } = state;
  const { acceptInvite, rejectInvite } = actions;

  const create = useCreateTeam();

  const [query, setQuery] = useState("");
  const [showCreate, setShowCreate] = useState(false);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-6 text-sm text-[#6E6E6E]">
        Loading teams…
      </div>
    );
  }

  const filteredTeams = teams.filter((t) =>
    t.name.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="max-w-9xl mx-auto px-6 py-8 space-y-6 bg-white dark:bg-black text-black dark:text-white">
      {/* ===== SEARCH ===== */}
      <div>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search teams…"
          className="
            w-full max-w-md
            px-4 py-2.5 text-sm
            rounded-md
            bg-white/70 dark:bg-white/5
            backdrop-blur
            border border-[#6E6E6E]/30
            placeholder:text-[#6E6E6E]
            focus:border-[#BAFF39]
            outline-none transition
          "
        />
      </div>

      {/* ===== GRID ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* LEFT */}
        <aside className="lg:col-span-1">
          <MyTeamsSection teams={filteredTeams} />
        </aside>

        {/* RIGHT */}
        <main className="lg:col-span-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* INVITES */}
            <section
              className="
              min-h-[260px]
              bg-white/80 dark:bg-white/5
              backdrop-blur
              border border-[#6E6E6E]/20
              rounded-xl
              px-6 py-5
            "
            >
              <TeamInvitesSection
                invites={invites}
                onAccept={acceptInvite}
                onReject={rejectInvite}
              />
            </section>

            {/* CREATE TEAM */}
            <section
              className="
              min-h-[260px]
              bg-white/80 dark:bg-white/5
              backdrop-blur
              border border-[#6E6E6E]/20
              rounded-xl
              px-6 py-5
              flex flex-col
            "
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-lg font-semibold">Create a team</h2>
                  <p className="text-sm text-[#6E6E6E]">
                    Start collaborating with others.
                  </p>
                </div>

                <button
                  onClick={() => setShowCreate((v) => !v)}
                  className="
                    flex items-center gap-2
                    px-3 py-2 rounded-md
                    text-sm font-medium
                    bg-[#BAFF39] text-black
                    hover:opacity-90 transition
                  "
                >
                  <Plus size={16} />
                  New
                </button>
              </div>

              {showCreate ? (
                <CreateTeamForm state={create.state} actions={create.actions} />
              ) : (
                <div className="flex-1 flex items-center justify-center text-sm text-[#6E6E6E]">
                  Create a new team to get started
                </div>
              )}
            </section>

            {/* FUTURE CARD */}
            <section
              className="
              min-h-[260px]
              bg-white/50 dark:bg-white/5
              backdrop-blur
              border border-dashed border-[#6E6E6E]/30
              rounded-xl
              flex items-center justify-center
              text-sm text-[#6E6E6E]
            "
            >
              Team workspace overview
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
