const express = require('express');
const router = express.Router();
const { TestCases } = require("../models");

router.get("/caselist", async (req, res) => {
    const list = await TestCases.findAll();
    res.json(list);
  });
  
  router.post("/caselist", async (req, res) => {
    const post = req.body;
    await Results.create(post);
    res.json(post);
  });

module.exports = router;