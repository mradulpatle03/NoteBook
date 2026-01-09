import mongoose from "mongoose";

const activityLogSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    habit: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Habit",
      required: true,
      index: true,
    },

    habitType: {
      type: String,
      enum: ["habit", "hobby"],
      required: true,
    },

    date: {
      type: Date,
      required: true,
      index: true,
    },

    status: {
      type: String,
      enum: ["done", "missed"],
      required: true,
    },

    confidence: {
      type: Number,
      default: 0,
      min: 0, 
      max: 100,
    },
  },
  { timestamps: true }
);

activityLogSchema.index(
  { user: 1, habit: 1, date: 1 },
  { unique: true }
);

export default mongoose.model("ActivityLog", activityLogSchema);