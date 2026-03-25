import { useEffect, useState } from "react";
import api from "../api/axios";
import {
  Flame,
  CheckCircle,
  Calendar,
  Shield,
  Eye,
  EyeOff,
} from "lucide-react";
import { useParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProfilePage() {
  const { username } = useParams();
  const { user: me } = useAuth();

  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [profilePublic, setProfilePublic] = useState(false);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  const isOwnProfile = Boolean(me && me.username === username);

  useEffect(() => {
    if (!username) return;

    setLoading(true);
    setError("");

    api
      .get(`/users/${username}`)
      .then((res) => {
        setUser(res.data);
        setName(res.data.name || "");
        setProfilePublic(Boolean(res.data.profilePublic));
      })
      .catch(() => setError("Profile not found"))
      .finally(() => setLoading(false));
  }, [username]);

  useEffect(() => {
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [file]);

  const submit = async () => {
    if (!isOwnProfile || saving) return;

    setSaving(true);
    setMsg("");

    try {
      let res;

      if (!file) {
        res = await api.put("/users/profile", { name, profilePublic });
      } else {
        const fd = new FormData();
        fd.append("name", name);
        fd.append("profilePublic", profilePublic);
        fd.append("avatar", file);
        res = await api.put("/users/profile", fd);
      }

      setUser((prev) => ({ ...prev, ...res.data }));
      setFile(null);
      setPreview(null);
      setMsg("Profile updated successfully");
    } catch {
      setMsg("Update failed");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-[#6E6E6E]">
        Loading profile…
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        {error}
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-[91vh] bg-white dark:bg-black text-black dark:text-white px-6 py-10">

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT */}
        <div className="lg:col-span-2 space-y-6">

          {/* HEADER */}
          <div className="flex gap-6 bg-white/80 dark:bg-white/5 backdrop-blur border border-[#6E6E6E]/20 p-6 rounded-xl">

            {/* AVATAR */}
            <div className="w-24 h-24 rounded-full border border-[#6E6E6E]/30 overflow-hidden flex items-center justify-center bg-[#BAFF39] text-black text-3xl font-semibold">
              {preview || user.avatar ? (
                <img
                  src={preview || user.avatar}
                  alt="avatar"
                  className="w-full h-full object-cover"
                />
              ) : (
                (user.name || user.username || "?")[0].toUpperCase()
              )}
            </div>

            {/* INFO */}
            <div className="flex-1">
              <h1 className="text-2xl font-semibold">{user.name}</h1>
              <p className="text-sm text-[#6E6E6E]">
                @{user.username}
              </p>

              {isOwnProfile && (
                <label className="inline-block mt-3 text-xs text-[#BAFF39] cursor-pointer">
                  Change avatar
                  <input
                    type="file"
                    hidden
                    accept="image/*"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </label>
              )}
            </div>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Stat icon={<Flame />} label="Streak" value={user.currentStreak} />
            <Stat icon={<CheckCircle />} label="Completed" value={user.completedCount} />
            <Stat icon={<Calendar />} label="Active Days" value={user.activeDays} />
            <Stat icon={<Shield />} label="Credibility" value={user.credibilityScore} />
          </div>
        </div>

        {/* RIGHT */}
        <div className="space-y-6">

          {isOwnProfile && (
            <div className="bg-white/80 dark:bg-white/5 backdrop-blur border border-[#6E6E6E]/20 p-6 rounded-xl">
              <button
                onClick={() => setProfilePublic((p) => !p)}
                className="flex items-center gap-2 text-sm text-[#6E6E6E] hover:text-black dark:hover:text-white"
              >
                {profilePublic ? <Eye /> : <EyeOff />}
                {profilePublic ? "Public" : "Private"}
              </button>
            </div>
          )}

          {isOwnProfile && (
            <div className="bg-white/80 dark:bg-white/5 backdrop-blur border border-[#6E6E6E]/20 p-6 rounded-xl">

              <label className="text-xs text-[#6E6E6E]">
                Name
              </label>

              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full mt-1 mb-3 p-2.5 rounded-md bg-white/60 dark:bg-white/5 border border-[#6E6E6E]/30 focus:border-[#BAFF39] outline-none"
              />

              <button
                onClick={submit}
                disabled={saving}
                className="w-full bg-[#BAFF39] text-black py-2.5 rounded-md font-medium hover:opacity-90 transition disabled:opacity-50"
              >
                {saving ? "Saving…" : "Save Changes"}
              </button>

              {msg && (
                <p className="text-xs text-[#6E6E6E] mt-2">
                  {msg}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* STAT */
function Stat({ icon, label, value }) {
  return (
    <div className="bg-white/80 dark:bg-white/5 backdrop-blur border border-[#6E6E6E]/20 p-4 rounded-xl flex gap-3">

      <div className="text-[#BAFF39]">
        {icon}
      </div>

      <div>
        <p className="text-xs text-[#6E6E6E]">{label}</p>
        <p className="text-lg font-semibold">{value ?? "—"}</p>
      </div>

    </div>
  );
}