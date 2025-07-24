const express = require("express");

const app = express();

app.get("/test", (req, res) => {
  res.send("okay now live");
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server running on port ${port}`));
