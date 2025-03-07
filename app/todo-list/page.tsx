import TodoList from "@/components/todo-list/TodoList";
import { Container, Typography } from "@mui/material";

async function getTodos() {
  try {
    const res = await fetch("http://localhost:3001/todos", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error(`Failed to fetch todos: ${res.status} ${res.statusText}`);
    }
    const data = await res.json();

    return data || [];
  } catch (error) {
    console.error("Error in getTodos:", error);
    return [];
  }
}

export default async function TodosPage() {
  const initialTodos = await getTodos();

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Todo List
      </Typography>
      <TodoList initialTodos={initialTodos} />
    </Container>
  );
}
