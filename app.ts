// application instance

import express = require("express");
import { AppRouter } from "./models/AppRouter";
import { TaskController } from "./controller/TaskController";

const app = express();

const PORT: number = 5004;

export const appRouter = new AppRouter(app, PORT);

new TaskController();
