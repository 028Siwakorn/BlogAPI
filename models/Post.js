const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const PostSchema = new Schema(
  {
    title: { type: String, require: true },
    summary: { type: String, require: true },
    Content: { type: String, require: true },
    Cover: { type: String, require: true },
    author: { type: Schema.Types.ObjectId, ref: "User", require: true },
  },
  {
    timestamps: true,
  }
);

const PostModel = new Model("Post", PostSchema);
module.exports = PostModel;
