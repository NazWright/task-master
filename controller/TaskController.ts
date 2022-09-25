import { Controller } from "../models/Controller";
import { appRouter } from "../app";

export class TaskController extends Controller {
  constructor() {
    super(appRouter, "/tasks");
  }

  public registerRoutes(): void {
    this.getTasksRoute();
  }

  public getTasksRoute(): void {
    appRouter.getRouter().get("/task", function (req, res) {
      res.send("Hello");
    });
  }
}
