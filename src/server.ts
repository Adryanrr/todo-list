import Fastify, { fastify } from "fastify";
import { taskRoutes } from "@/modules/task/RouteTask";

const app = fastify({
  logger: true,
});

app.register(taskRoutes);

app.listen({ port: 3333 }, () => {
  console.log("Servidor rodando em http://localhost:3333");
});
