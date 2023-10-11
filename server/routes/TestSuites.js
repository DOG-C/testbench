const express = require('express');
const router = express.Router();
const { TestSuites } = require("../models");

router.get("/suitelist", async (req, res) => {
    const list = await TestSuites.findAll();
    res.json(list);
  });
  
  router.post("/suitelist", async (req, res) => {
    const post = req.body;
    await TestSuites.create(post);
    res.json(post);
  });

module.exports = router;