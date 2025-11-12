
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("API funcionando ✅"));

export default app;

import userRoutes from "./routes/user.Routes.js";

app.use("/users", userRoutes);

import taskRoutes from "./routes/task.Routes.js";

app.use("/tasks", taskRoutes);


