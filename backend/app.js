const express = require("express");
const app = express();
const port = 3000;
const home = require("./routes/home");
const login = require("./routes/login");

app.use("/", login);
app.use("/home", home);

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
