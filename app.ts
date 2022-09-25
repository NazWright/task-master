// application instance
import { AppRouter } from "./models/AppRouter";
import { TaskController } from "./controller/TaskController";

const PORT: number = 5004;

const appRouter = new AppRouter(PORT);

new TaskController();

export { appRouter };
