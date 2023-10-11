const express = require('express');
const router = express.Router();
const { TestCampaigns } = require("../models");

router.get("/", async (req, res) => {
    const list = await TestCampaigns.findAll();
    res.json(list);
  });
  
  router.post("/", async (req, res) => {
    const post = req.body;
    await TestCampaigns.create(post);
    res.json(post);
  });

module.exports = router;