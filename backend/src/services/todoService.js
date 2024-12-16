import bcrypt from "bcrypt";
import prisma from "../db/index.js";

export async function getAllTodos() {
  return await prisma.todo.findMany();
}

export async function createTodo(desc) {
  return await prisma.todo.create({
    data: {
      desc,
      completed: false,
    },
  });
}

export async function updateTodo(id, newDesc) {
  return await prisma.todo.update({
    where: {
      id,
    },
    data: {
      desc: newDesc,
    },
  });
}

export async function completeTodo(id) {
  const todo = await prisma.todo.findUnique({
    where: { id },
  });

  const updatedTodo = await prisma.todo.update({
    where: { id },
    data: {
      completed: !todo.completed,
    },
  });

  return updatedTodo;
}

export async function deleteTodo(id) {
  return await prisma.todo.delete({
    where: {
      id,
    },
  });
}

export async function deleteAllTodos() {
  return await prisma.todo.deleteMany({
    where: {
      completed: false,
    },
  });
}

export async function eraseCompleted() {
  return await prisma.todo.deleteMany({
    where: {
      completed: true,
    },
  });
}

// ---- USER ----

export async function registerUser(username, password) {
  const existingUser = await prisma.user.findUnique({
    where: { username },
  });

  if (existingUser) {
    throw new Error("Nome de usuário já existe.");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  return await prisma.user.create({
    data: {
      username,
      password: hashedPassword,
    },
  });
}

export async function loginUser(username, password) {
  const user = await prisma.user.findUnique({
    where: { username },
  });

  if (!user) {
    throw new Error("Usuário não encontrado.");
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    throw new Error("Senha incorreta.");
  }

  return user;
}
