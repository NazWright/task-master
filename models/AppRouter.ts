import { Application } from "express";
import { TaskManagementRoute } from "./TaskManagementRoute";
import express, { Router } from "express";

export class AppRouter {
  private PORT: number;

  private app: Application = express();

  private router: Router = express.Router();

  constructor(PORT?: number) {
    this.PORT = PORT || 5003;
    this.configure();
  }

  public configure(): void {
    this.app.get("/", function ({ req, res }: TaskManagementRoute) {
      res.send("Hello");
    });
  }

  public run(callBackFunction?: any): void {
    this.app.listen(this.PORT, callBackFunction);
  }

  public getApp(): Application {
    return this.app;
  }

  public getPort(): number {
    return this.PORT;
  }

  public getRouter(): Router {
    return this.router;
  }
}
