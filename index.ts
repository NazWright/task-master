import { appRouter } from "./app";

function applicationStartHandler() {
  console.log("Listening on PORT: ", appRouter.getPort());
}

appRouter.run(applicationStartHandler);
