import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Obtener todas las tareas
export const getTasks = async (req, res) => {
  try {
    const tasks = await prisma.task.findMany({
      include: { user: true },
    });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las tareas" });
  }
};

// Crear una nueva tarea
export const createTask = async (req, res) => {
  try {
    const { title, description, userId } = req.body;
    const task = await prisma.task.create({
      data: { title, description, userId },
    });
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: "Error al crear la tarea" });
  }
};
