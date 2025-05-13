const express = require("express");
const URLModel = require("../models/url");
const {
  handleGet,
  handleGenerateShortUrl,
} = require("../controllers/controller");
const Router = express.Router();
Router.get("/", (req, res) => {
  res.send("welcome to url shortener project");
});
Router.get("/:id", async (req, res) => {
  const short_id = req.params.id;
  const entry = await URLModel.findOneAndUpdate({ short_id },
    { $push: { visit_History: { timestamp: Date.now() } } }
  );
  if (!entry) return res.status(404).json({ msg: "not found" });
  // return res.json({ redirectURL: redirectURL.redirect_URL });
  return res.redirect(entry.redirect_URL);
});
Router.post("/generate", handleGenerateShortUrl);

module.exports = Router;
