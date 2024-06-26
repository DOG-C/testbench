const express = require('express');
const router = express.Router();
const { Results } = require("../models");

router.get("/", async (req, res) => {
    const list = await Results.findAll();
    res.json(list);
  });
  
  router.post("/", async (req, res) => {
    const post = req.body;
    await Results.create(post);
    res.json(post);
  });

// A example for post request
// router.post("/", async (req, res) => {
//     const post = req.body;
//     await Results.create(post);
//     res.json(post);
// });


module.exports = router;