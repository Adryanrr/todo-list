import fastify, { FastifyInstance } from "fastify";

export function TaskRoutes(fastify: FastifyInstance) {
  fastify.get("/", async (request, reply) => {});
}
