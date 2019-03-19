const express = require("express");
const app = express();
const port = 4000;

app.use(express.json())

app.use("/todo", require("./todoRoutes"))

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})