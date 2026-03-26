import { Check, X, Mail } from "lucide-react";

export default function TeamInvitesSection({ invites, onAccept, onReject }) {
  return (
    <section
      className="
    bg-white/80 dark:bg-white/5
    backdrop-blur
    border border-[#6E6E6E]/20
    rounded-xl
    px-5 py-4
    space-y-4
  "
    >
      {/* HEADER */}
      <div className="flex items-center gap-3">
        <div
          className="
        w-9 h-9 rounded-lg
        flex items-center justify-center
        bg-[#BAFF39]/10
        text-[#BAFF39]
      "
        >
          <Mail size={18} />
        </div>

        <div>
          <h2 className="text-sm font-semibold text-black dark:text-white">
            Team invitations
          </h2>
          <p className="text-xs text-[#6E6E6E]">
            Pending requests to join teams
          </p>
        </div>
      </div>

      {/* EMPTY STATE */}
      {invites.length === 0 ? (
        <div
          className="
        flex items-center justify-center
        min-h-[120px]
        rounded-lg
        border border-dashed border-[#6E6E6E]/30
        text-sm text-[#6E6E6E]
        bg-white/50 dark:bg-white/5
      "
        >
          No pending invitations
        </div>
      ) : (
        <div className="space-y-3">
          {invites.map((invite) => (
            <div
              key={invite._id}
              className="
            flex items-center justify-between
            rounded-lg
            border border-[#6E6E6E]/20
            px-4 py-3
            bg-white/60 dark:bg-white/5
            hover:border-[#BAFF39]/40
            transition
          "
            >
              {/* INFO */}
              <div className="min-w-0">
                <p className="text-sm font-medium text-black dark:text-white truncate">
                  {invite.team?.name || "Unknown team"}
                </p>
                <p className="text-xs text-[#6E6E6E]">
                  You’ve been invited to join this team
                </p>
              </div>

              {/* ACTIONS */}
              <div className="flex items-center gap-2 shrink-0">
                {/* ACCEPT */}
                <button
                  onClick={() => onAccept(invite._id)}
                  className="
                inline-flex items-center gap-1.5
                px-3 py-1.5 rounded-md
                text-xs font-medium
                bg-[#BAFF39] text-black
                hover:opacity-90 transition
              "
                >
                  <Check size={14} />
                  Accept
                </button>

                {/* REJECT */}
                <button
                  onClick={() => onReject(invite._id)}
                  className="
                inline-flex items-center gap-1.5
                px-3 py-1.5 rounded-md
                text-xs font-medium
                border border-[#6E6E6E]/30
                text-[#6E6E6E]
                hover:bg-black/5 dark:hover:bg-white/10
                transition
              "
                >
                  <X size={14} />
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
