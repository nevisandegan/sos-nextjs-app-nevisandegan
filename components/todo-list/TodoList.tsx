"use client";

import { useState, useEffect } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
  Button,
  Fade,
  Typography,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddTodoForm from "./AddTodoForm";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoListProps {
  initialTodos: Todo[] | undefined;
}

export default function TodoList({ initialTodos = [] }: TodoListProps) {
  const [todos, setTodos] = useState<Todo[]>(initialTodos || []);
  const [filter, setFilter] = useState<"all" | "completed" | "incomplete">(
    "all"
  );

  useEffect(() => {
    setTodos(initialTodos || []);
  }, [initialTodos]);

  const handleAddTodo = async (title: string) => {
    if (!title.trim()) return;
    try {
      const response = await fetch("http://localhost:3001/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, completed: false }),
      });
      if (!response.ok) throw new Error("Failed to add todo");
      const newTodo = await response.json();
      setTodos((prev) => [...prev, newTodo]);
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  const handleToggleTodo = async (id: number) => {
    const todoToToggle = todos.find((todo) => todo.id === id);
    if (!todoToToggle) return;
    try {
      const response = await fetch(`http://localhost:3001/todos/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ completed: !todoToToggle.completed }),
      });
      if (!response.ok) throw new Error("Failed to toggle todo");
      const updatedTodo = await response.json();
      setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
    } catch (error) {
      console.error("Error toggling todo:", error);
    }
  };

  const handleDeleteTodo = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:3001/todos/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete todo");
      setTodos((todos) => todos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "completed") return todo.completed;
    if (filter === "incomplete") return !todo.completed;
    return true;
  });

  return (
    <>
      <AddTodoForm onAdd={handleAddTodo} />
      <Box style={{ margin: "10px 0" }}>
        <Button
          variant={filter === "all" ? "contained" : "outlined"}
          onClick={() => setFilter("all")}
          sx={{ marginRight: 1, fontSize: 12 }}
        >
          All
        </Button>
        <Button
          variant={filter === "completed" ? "contained" : "outlined"}
          onClick={() => setFilter("completed")}
          sx={{ marginRight: 1, fontSize: 12 }}
        >
          Completed
        </Button>
        <Button
          variant={filter === "incomplete" ? "contained" : "outlined"}
          onClick={() => setFilter("incomplete")}
          sx={{ marginRight: 1, fontSize: 12 }}
        >
          Incomplete
        </Button>
      </Box>
      <List>
        {filteredTodos.map((todo) => (
          <Fade in={true} timeout={500} key={todo.id}>
            <ListItem
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 4,
                background: todo.completed ? "#f5f5f5" : "white",
                borderRadius: 1,
                boxShadow: 1,
                marginBottom: 1,
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  background: todo.completed ? "#e0e0e0" : "#f0f0f0",
                  transform: "scale(1.02)",
                },
              }}
            >
              <Checkbox
                checked={todo.completed}
                onClick={() => handleToggleTodo(todo.id)}
                sx={{ color: "#4caf50", "&.Mui-checked": { color: "#4caf50" } }}
              />
              <ListItemText
                primary={todo.title}
                sx={{
                  textDecoration: todo.completed ? "line-through" : "none",
                  color: todo.completed ? "#757575" : "#212121",
                  flexGrow: 1,
                  "& .css-tg5auo-MuiTypography-root": {
                    fontSize: 16,
                  },
                }}
              />
              <IconButton
                edge="end"
                color="error"
                onClick={() => handleDeleteTodo(todo.id)}
                sx={{
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": { transform: "scale(1.1)" },
                }}
              >
                <DeleteIcon />
              </IconButton>
            </ListItem>
          </Fade>
        ))}
      </List>
      {filteredTodos.length === 0 && (
        <Typography
          align="center"
          color="text.secondary"
          sx={{ mt: 2, fontSize: 18 }}
        >
          No todos found!
        </Typography>
      )}
    </>
  );
}
