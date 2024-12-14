import {
  completeTodo,
  createTodo,
  deleteAllTodos,
  deleteTodo,
  eraseCompleted,
  getAllTodos,
  updateTodo,
} from "../services/todoService.js";

export async function handleGetTodos(req, res) {
  try {
    const todos = await getAllTodos();
    res.status(200).json(todos);
  } catch (err) {
    console.error("Erro ao buscar todos:", err);
    res.status(500).json({ error: "Erro ao buscar todos" });
  }
}

export async function handleDeleteAllTodos(req, res) {
  try {
    const deletedAllTodos = await deleteAllTodos();
    res
      .status(200)
      .json({ message: "Tarefas apagadas com sucesso", deletedAllTodos });
  } catch (err) {
    console.error("Erro ao deletar todas as tarefas:", err);
    res.status(500).json({ error: "Erro ao deletar todas as tarefas" });
  }
}

export async function handleCreateTodo(req, res) {
  try {
    const { desc } = req.body;

    if (!desc) {
      return res
        .status(400)
        .json({ error: "Descrição da tarefa é necessária" });
    }

    const newTodo = await createTodo(desc);

    res.status(201).json(newTodo);
  } catch (err) {
    console.error("Erro ao criar tarefa:", err);
    res.status(500).json({ error: "Erro ao criar tarefa" });
  }
}

export async function handleCompletedTodo(req, res) {
  try {
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({ error: "ID da tarefa não fornecido" });
    }

    const completedTodo = await completeTodo(id);
    res
      .status(200)
      .json({ message: "Tarefa concluída com sucesso", completedTodo });
  } catch (err) {
    console.error("Erro ao concluir tarefa:", err.message);
    res
      .status(500)
      .json({ error: "Erro ao concluir tarefa", message: err.message });
  }
}

export async function handleUpdateTodo(req, res) {
  try {
    const { id } = req.query;
    const { desc } = req.body;

    if (!id) {
      return res.status(400).json({ error: "ID da tarefa é necessário" });
    }

    if (!desc) {
      return res
        .status(400)
        .json({ error: "Descrição da tarefa é necessária" });
    }

    const updatedTodo = await updateTodo(id, desc);
    res
      .status(200)
      .json({
        message: "Nome da tarefa foi alterada com sucesso",
        updatedTodo,
      });
  } catch (err) {
    console.error("Erro ao atualizar o nome da tarefa:", err.message);
    res.status(500).json({
      error: "Erro ao atualizar o nome da tarefa",
      message: err.message,
    });
  }
}

export async function handleDeleteTodo(req, res) {
  try {
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({ error: "ID da tarefa é necessário" });
    }

    const deletedTodo = await deleteTodo(id);
    res
      .status(200)
      .json({ message: "Tarefa deletada com sucesso", deletedTodo });
  } catch (err) {
    console.error("Erro ao deletar tarefa:", err.message);
    res
      .status(500)
      .json({ error: "Erro ao deletar tarefa", message: err.message });
  }
}

export async function handleEraseAllCompleted(req, res) {
  try {
    const errasedCompleted = await eraseCompleted();
    res.status(200).json({
      message: "Tarefas concluídas deletadas com sucesso",
      errasedCompleted,
    });
  } catch (err) {
    console.error("Erro ao deletar tarefas concluídas:", err.message);
    res.status(500).json({
      error: "Erro ao deletar tarefas concluídas",
      message: err.message,
    });
  }
}
