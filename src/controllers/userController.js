import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// ✅ Crear usuario
export const createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = await prisma.user.create({
      data: { name, email },
    });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el usuario" });
  }
};

// ✅ Obtener todos los usuarios
export const getUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      include: { tasks: true },
    });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener usuarios" });
  }
};

// ✅ Actualizar usuario
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;

    const user = await prisma.user.update({
      where: { id: Number(id) },
      data: { name, email },
    });

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar usuario" });
  }
};

// ✅ Eliminar usuario
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.user.delete({
      where: { id: Number(id) },
    });

    res.json({ message: "Usuario eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar usuario" });
  }
};
