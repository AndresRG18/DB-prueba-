import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", userRoutes);
app.use("/tasks", taskRoutes);

app.get("/", (req, res) => res.send("API funcionando correctamente"));

export default app;
