import mongoose from "mongoose";

const habitSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    type: {
      type: String,
      enum: ["habit", "hobby"],
      default: "habit",
    },

    frequency: {
      type: String,
      enum: ["daily", "weekly", "interval"],
      required: true,
    },

    days: [
      {
        type: String,
        enum: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
      },
    ],

    intervalDays: {
      type: Number,
      min: 1,
      validate: {
        validator: function (v) {
          return this.frequency !== "interval" || v >= 1;
        },
        message: "Interval habits require intervalDays >= 1",
      },
    },

    
    startDate: {
      type: Date,
      default: () => new Date(),
    },

    endDate: {
      type: Date,
      default: null,
    },

    isArchived: {
      type: Boolean,
      default: false,
    },

    // 🔐 VERIFICATION
    verificationRule: {
      type: String,
      enum: ["manual", "github", "link"],
      default: "manual",
      required: true,
    },

    githubRepo: {
      type: String,
      validate: {
        validator: function (v) {
          return this.verificationRule !== "github" || !!v;
        },
        message: "GitHub repo required for github verification",
      },
    },
  },
  { timestamps: true }
);

export default mongoose.model("Habit", habitSchema);