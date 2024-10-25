import { Schema, model, models } from "mongoose";

const schema = new Schema(
  {
    phone: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    expire_time: {
      type: Date,
      default: Date.now,
      expires: 110,
    },
  },
  { versionKey: false }
);

const OTP = models.OTP || model("OTP", schema);

export default OTP;
