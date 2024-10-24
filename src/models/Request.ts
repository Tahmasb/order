import { Schema, model, models } from "mongoose";

const requestSchema = new Schema(
  {
    phone: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    description: {
      type: String,
    },
    type: {
      type: Object,
      required: true,
    },
    fullName: {
      type: String,
    },
    costAmount: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

const Request = models.Request || model("Request", requestSchema);

export default Request;
