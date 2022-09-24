import express = require("express");
import { TaskManagementRoute } from "./models/TaskManagementRoute";

const app = express();

app.get("/", function ({ req, res }: TaskManagementRoute) {
  res.send("Hello");
});

const PORT: number = 5003;

app.listen(PORT);
