// src/modules/task/RouteTask.ts
import { FastifyInstance } from "fastify";
import * as TaskService from "./TaskService";

export async function taskRoutes(app: FastifyInstance) {
  app.get("/tasks", async (request, reply) => {
    try {
      const tasks = await TaskService.ListTask();
      return reply.send(tasks);
    } catch (error: any) {
      return reply.code(500).send({ error: error.message });
    }
  });

  app.post("/tasks", async (request, reply) => {
    try {
      const task = await TaskService.CreateTask(request.body as any);
      return reply.code(201).send(task);
    } catch (error: any) {
      return reply.code(400).send({ error: error.message });
    }
  });
}
