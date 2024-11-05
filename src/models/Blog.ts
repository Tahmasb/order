import { Schema, model, models } from "mongoose";
import Category from "./Category";

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
      ref: Category.modelName,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    published: {
      type: Boolean,
      default: true,
    },
    redirect: {
      type: String,
      default: "",
    },
  },
  { timestamps: true, versionKey: false }
);

const Blog = models.Blog || model("Blog", blogSchema);

export default Blog;
