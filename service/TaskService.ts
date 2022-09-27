import { Task } from "../models/Task";

export class TaskService {
  public getTask(taskId: string): Task {
    const task: Task = {
      name: "test task",
      id: taskId,
      author: "Nazere Wright",
      dateCreated: new Date().toLocaleDateString(),
      description: "This is a test task",
      priority: 1,
    };

    return task;
  }
}
