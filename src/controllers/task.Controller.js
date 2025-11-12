import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getTasks = async (req, res) => {
  const tasks = await prisma.task.findMany({ include: { user: true } });
  res.json(tasks);
};

export const createTask = async (req, res) => {
  const { title, userId } = req.body;
  const task = await prisma.task.create({ data: { title, userId } });
  res.json(task);
};
