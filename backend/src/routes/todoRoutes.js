import express from "express";
import {
  handleCompletedTodo,
  handleCreateTodo,
  handleDeleteAllTodos,
  handleDeleteTodo,
  handleEraseAllCompleted,
  handleGetTodos,
  handleUpdateTodo,
} from "../controllers/todoController.js";

const router = express.Router();

router.post("/createTodo", handleCreateTodo);

router.patch("/completed", handleCompletedTodo);
router.patch("/updateTodo", handleUpdateTodo);

router.get("/todos", handleGetTodos);

router.delete("/deleteTodo", handleDeleteTodo);
router.delete("/deleteAllTodos", handleDeleteAllTodos);
router.delete("/eraseCompleted", handleEraseAllCompleted);

export default router;
