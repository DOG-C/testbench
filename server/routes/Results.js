const express = require('express');
const router = express.Router();
const { Results } = require("../models");

router.get("/", (req, res) => {
    res.send("Hello World!")
});

// A example for post request
// router.post("/", async (req, res) => {
//     const post = req.body;
//     await Results.create(post);
//     res.json(post);
// });


module.exports = router;