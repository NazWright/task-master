import { Application } from "express";
import { TaskManagementRoute } from "./models/TaskManagementRoute";

export class AppRouter {
  private PORT: number;

  private app: Application;

  constructor(app: Application, PORT?: number) {
    this.app = app;
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
}
