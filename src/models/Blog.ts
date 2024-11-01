import { Schema, model, models } from "mongoose";

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: true,
      index: {
        unique: true,
        sparse: false,
      },
    },
    metaDescription: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    main: {
      type: String,
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    published: {
      type: Boolean,
      default: false,
    },
    redirect: {
      type: Boolean,
      default: false,
    },
    redirectPath: {
      type: String,
      default: "",
    },
  },
  { timestamps: true, versionKey: false }
);

const Post = models.Post || model("Post", blogSchema);

export default Post;
