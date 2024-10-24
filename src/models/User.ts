import { Schema, model, models } from "mongoose";

const userSchema = new Schema(
  {
    role: {
      type: String,
      default: "USER",
      enum: ["USER", "ADMIN"],
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
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
      type: Object,
    },
    city: {
      type: Object,
    },
  },
  { timestamps: true, versionKey: false }
);

// add index
userSchema.index({ phone: 1 });

const User = models.User || model("User", userSchema);

export default User;
