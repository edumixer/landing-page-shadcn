import {
  addTodo,
  deleteTodo,
  eraseAllIncompleteTodos,
  eraseCompletedTodos,
  fetchTodos,
  toggleTodo,
  updateTodo,
} from "@/services/todoService";
import { useEffect, useMemo, useState } from "react";
import { CardRotate } from "./CardRotate";
import { TodoCard } from "./composition/CardToDo";

interface Todo {
  id: string;
  desc: string;
  completed: boolean;
}

export const ToDoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const loadTodos = async () => {
      try {
        const todos = await fetchTodos();
        setTodos(todos);
      } catch (error) {
        console.error("Erro ao carregar tarefas:", error);
      }
    };

    loadTodos();
  }, []);

  const completedTodos = useMemo(
    () => todos.filter((todo) => todo.completed),
    [todos]
  );
  const incompleteTodos = useMemo(
    () => todos.filter((todo) => !todo.completed),
    [todos]
  );

  const handleToggleTodo = async (id: string) => {
    try {
      const updatedTodo = await toggleTodo(id);
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id ? { ...todo, completed: updatedTodo.completed } : todo
        )
      );
    } catch (error) {
      console.error("Erro ao atualizar a tarefa:", error);
    }
  };

  const handleDeleteTodo = async (id: string) => {
    try {
      await deleteTodo(id);
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error("Erro ao deletar a tarefa:", error);
    }
  };

  const handleAddTodo = async (desc: string) => {
    try {
      const newTodo = await addTodo(desc);
      setTodos((prevTodos) => [newTodo, ...prevTodos]);
    } catch (error) {
      console.error("Erro ao adicionar a tarefa:", error);
    }
  };

  const handleEraseCompleted = async () => {
    try {
      await eraseCompletedTodos();
      setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
    } catch (error) {
      console.error("Erro ao apagar tarefas concluídas:", error);
    }
  };

  const handleEraseAll = async () => {
    try {
      await eraseAllIncompleteTodos();
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.completed));
    } catch (error) {
      console.error("Erro ao apagar todas as tarefas incompletas:", error);
    }
  };

  const handleUpdateTodo = async (id: string, newDesc: string) => {
    try {
      await updateTodo(id, newDesc);

      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id ? { ...todo, desc: newDesc } : todo
        )
      );
    } catch (error) {
      console.error("Erro ao atualizar a tarefa", error);
    }
  };

  return (
    <>
      {/* Card Rotacionado */}
      <CardRotate />

      <section className="flex gap-6 p-4 max-w-4xl mx-auto">
        <TodoCard
          title="To-do"
          description="Take a breath. Start doing."
          headerColor="bg-orange-400"
          tasks={incompleteTodos}
          onTaskToggle={handleToggleTodo}
          onDeleteTask={handleDeleteTodo}
          onAddTask={handleAddTodo}
          onErase={handleEraseAll}
          isEditable
          onUpdateTask={handleUpdateTodo}
        />
        <TodoCard
          title="Done"
          description={`Congratulations! You have done ${completedTodos.length} tasks.`}
          headerColor="bg-green-400"
          tasks={completedTodos}
          onTaskToggle={handleToggleTodo}
          onDeleteTask={handleDeleteTodo}
          onErase={handleEraseCompleted}
        />
      </section>
    </>
  );
};
