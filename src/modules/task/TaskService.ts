import * as TaskRepositoty from "./TaskRepository";
import { TaskCreated } from "@/types/task";

export async function ListTask() {
  return await TaskRepositoty.getTasks();
}

export async function CreateTask(task: TaskCreated) {
  if (!task.title || task.title.trim() === "") {
    throw new Error("Titulo é obrigatorio");
  }

  return await TaskRepositoty.createTasks(task);
}
