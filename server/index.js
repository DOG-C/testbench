const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = require("./models");

// Routers
const resultsRouter = require("./routes/Results");
app.use("/results", resultsRouter);
const casesRouter = require("./routes/TestCases");
app.use("/caselist", casesRouter);
const suitesRouter = require("./routes/TestSuites");
app.use("/suitelist", suitesRouter);
const campaignsRouter = require("./routes/TestCampaigns");
app.use("/campaignlist", campaignsRouter);

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("Server running on port 3001");
    });
});


