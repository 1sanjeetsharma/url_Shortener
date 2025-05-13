const express = require("express");
const URLModel = require("../models/url");
const { nanoid } = require("nanoid");

async function handleGet(req, res) {
  console.log("get req recieved for id:", req.params.id);
  const short_id = req.params.id;
  if (!short_id) {
    return res.status(404).send("id is required");
  }
  const redirectURL = await URLModel.findOneAndUpdate(
    { short_id },
    { $push: { visit_History: { timestamp: Date.now() } } }
  );
  // if (!redirectURL) return res.status(404).json({ msg: "not found" });
  // return res.json({ redirectURL: redirectURL.redirect_URL });
  return res.redirect(redirectURL.redirect_URL);
}

async function handleGenerateShortUrl(req, res) {
  const body = req.body;
  console.log("req recieved in body is ", req.body);
  if (!body.url) {
    console.log("url is not sent");
    return res.status(404).json({ msg: "url is required" });
  }
  const short_id = nanoid(8);
  try {
    await URLModel.create({
      short_id: short_id,
      redirect_URL: body.url,
      visit_History: [],
    });
    return res.json({ id: short_id });
  } catch (err) {
    console.log("error saving to db", err);
    return res.status(500).json({ msg: "internal server err" });
  }
}
module.exports = { handleGenerateShortUrl, handleGet };
