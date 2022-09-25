import express = require("express");
import { AppRouter } from "./AppRouter";

const app = express();

const PORT: number = 5004;

const appRouter = new AppRouter(app, PORT);

function applicationStartHandler() {
  console.log("Listening on PORT: ", appRouter.getPort());
}

appRouter.run(applicationStartHandler);
