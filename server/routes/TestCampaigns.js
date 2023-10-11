const express = require('express');
const router = express.Router();
const { TestCampaigns } = require("../models");

router.get("/campaignlist", async (req, res) => {
    const list = await TestCampaigns.findAll();
    res.json(list);
  });
  
  router.post("/campaignlist", async (req, res) => {
    const post = req.body;
    await Results.create(post);
    res.json(post);
  });

module.exports = router;