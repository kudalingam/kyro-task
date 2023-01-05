const express = require("express");
var cors = require("cors");
const app = express();
const user = require("./src/Routes/user");

require("dotenv").config();
app.use(cors());

app.use(express.json());

app.use("/user", user);

app.listen(process.env.PORT || 3000, function () {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});
