import { Request, Response, Application } from "express";
export interface Endpoint {
  (req: Request, res: Response): Application;
}
