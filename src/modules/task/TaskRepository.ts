import { TaskCreated } from "@/types/task.d";
import { prisma } from "@/lib/prisma";

// Função para obter todas as tarefa(
export async function getTasks() {
  try {
    const result = prisma.task.findMany();
    return result;
  } catch (error) {
    throw new Error("Erro ao obeter as tarefas");
  }
}

// Função para obter uma tarefa por ID
export async function getById(id: string) {
  try {
    const result = prisma.task.findUnique({ where: { id } });
    if (!result) {
      throw new Error("Tarefa não encontrada");
    }
    return result;
  } catch (error) {
    throw new Error(`Erro ao obter tarefa com ID ${id}`);
  }
}

// Função  para criar uma nova tarefa
export async function createTasks(task: TaskCreated) {
  try {
    const result = await prisma.task.create({
      data: {
        title: task.title,
        description: task.description,
        status: task.status,
      },
    });

    return result;
  } catch (error) {
    throw new Error("Erro ao criar Tarefa");
  }
}
