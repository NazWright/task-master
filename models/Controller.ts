import { AppRouter } from "./AppRouter";
export abstract class Controller {
  private endpointPrefix?: string;

  private appRouter: AppRouter;

  constructor(appRouter: AppRouter, endpointPrefix?: string) {
    this.endpointPrefix = endpointPrefix;
    this.appRouter = appRouter;
    // calling super() in subclass defines a route prefix for the controller
    this.registerRoutes();
    this.configure();
  }

  public configure() {
    // all api routes will have this prefix if it is defined
    this.endpointPrefix &&
      this.appRouter
        .getApp()
        .use(this.endpointPrefix, this.appRouter.getRouter());
  }

  //   must have a function for adding routes to router
  public abstract registerRoutes(): void;

  public setEndpointPrefix(endpointPrefix: string): void {
    this.endpointPrefix = endpointPrefix;
  }
}
