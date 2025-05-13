const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema(
  {
    short_id: { type: String, required: true, unique: true },
    redirect_URL: {
      type: String,
      required: true,
    },
    visit_History: [{ timestamp: { type: Number } }],
  },
  { timestamp: true }
);
const URLModel = mongoose.model("url", urlSchema);
module.exports = URLModel;
