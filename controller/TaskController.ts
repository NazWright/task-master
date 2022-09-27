import { Controller } from "../models/Controller";
import { appRouter } from "../app";
import { TaskService } from "../service/TaskService";

export class TaskController extends Controller {
  constructor() {
    super(appRouter, "/tasks");
  }

  public registerRoutes(): void {
    this.getTasksRoute();
  }

  public getTasksRoute(): void {
    appRouter.getRouter().get("/task", function (req, res) {
      const response = new TaskService().getTask("1");
      res.status(200).send(response);
    });
  }
}
