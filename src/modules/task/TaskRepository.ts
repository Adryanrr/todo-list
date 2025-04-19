import { TaskCreated } from "./../types/task.d";
import { prisma } from "../lib/prisma";

export function getTasks() {
  const result = prisma.task.findMany();
  return result;
}

export function getById(id: string) {
  const result = prisma.task.findUnique({ where: { id } });
  return result;
}

export function createTasks(task: TaskCreated) {
  const result = prisma.task.create({ data: { task } });
}
