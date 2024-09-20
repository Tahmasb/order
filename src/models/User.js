import { Schema, model, models } from "mongoose";

const userSchema = new Schema(
  {
    role: {
      type: String,
      default: "USER",
      enum: ["USER", "ADMIN"],
    },
    fullName: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    state: {
      type: String,
    },
    city: {
      type: String,
    },
  },
  { timestamps: true }
);

// add index
userSchema.index({ phone: 1 });

const User = models.User || model("User", userSchema);

export default User;
