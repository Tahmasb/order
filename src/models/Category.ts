import { Schema, model, models } from "mongoose";

const categorySchema = new Schema(
  {
    label: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
      index: {
        unique: true,
        sparse: false,
      },
    },
    description: {
      type: String,
      default: "",
    },
  },
  { timestamps: true, versionKey: false }
);

const Category = models.Category || model("Category", categorySchema);

export default Category;
