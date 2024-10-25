import { Schema, model, models } from "mongoose";

const requestSchema = new Schema(
  {
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
    costAmount: {
      type: Number,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true, versionKey: false }
);

const Request = models.Request || model("Request", requestSchema);

export default Request;
