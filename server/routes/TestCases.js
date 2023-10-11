const express = require('express');
const router = express.Router();
const { TestCases } = require("../models");

router.get("/", async (req, res) => {
    const list = await TestCases.findAll();
    res.json(list);
  });
  
  router.post("/", async (req, res) => {
    const post = req.body;
    await TestCases.create(post);
    res.json(post);
  });

module.exports = router;