import express = require("express");

export interface TaskManagementRoute {
  req: express.Request;
  res: express.Response;
}
