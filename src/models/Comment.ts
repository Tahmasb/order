import { Schema, model, models } from "mongoose";

const replySchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    published: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const commentSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    replays: {
      type: [replySchema],
    },
    blogId: {
      type: Schema.Types.ObjectId,
      ref: "Blog",
    },
    published: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true, versionKey: false }
);

const Comment = models.Comment || model("Comment", commentSchema);

export default Comment;
