import express from "express";
import {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/", getUsers);
router.post("/", createUser);
router.put("/:id", updateUser);   // ✅ actualizar usuario
router.delete("/:id", deleteUser); // ✅ eliminar usuario

export default router;
