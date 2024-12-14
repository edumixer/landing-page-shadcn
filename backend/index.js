import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import todoRoutes from "./src/routes/todoRoutes.js";

dotenv.config();

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", todoRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
