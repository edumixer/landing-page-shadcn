import axiosInstance from "@/lib/axiosInstance";

export const fetchTodos = async () => {
  const response = await axiosInstance.get("/todos");
  return response.data;
};

export const addTodo = async (desc: string) => {
  const response = await axiosInstance.post("/createTodo", { desc });
  return response.data;
};

export const updateTodo = async (id: string, newDesc: string) => {
  await axiosInstance.patch(`/updateTodo?id=${id}`, { desc: newDesc });
};

export const toggleTodo = async (id: string) => {
  const response = await axiosInstance.patch(`/completed?id=${id}`);
  return response.data.completedTodo;
};

export const deleteTodo = async (id: string) => {
  await axiosInstance.delete(`/deleteTodo?id=${id}`);
};

export const eraseCompletedTodos = async () => {
  await axiosInstance.delete("/eraseCompleted");
};

export const eraseAllIncompleteTodos = async () => {
  await axiosInstance.delete("/deleteAllTodos");
};
