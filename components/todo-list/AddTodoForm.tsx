"use client";

import { useState } from "react";
import { TextField, Button, Fade, Box } from "@mui/material";

interface AddTodoFormProps {
  onAdd: (title: string) => void;
}

export default function AddTodoForm({ onAdd }: AddTodoFormProps) {
  const [title, setTitle] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = () => {
    if (title.trim()) {
      onAdd(title);
      setTitle("");
    }
  };

  return (
    <Fade in={true} timeout={500}>
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
        <Button
          variant="contained"
          onClick={handleSubmit}
          disabled={!title.trim()}
          sx={{
            borderRadius: "0 8px 8px 0",
            paddingY: 1,
            fontSize: "1.35rem",
            backgroundColor: "#4caf50",
            "&:hover": { backgroundColor: "#45a049" },
            transition: "all 0.3s ease-in-out",
          }}
        >
          Add
        </Button>
        <TextField
          label="New Todo"
          value={title}
          dir="ltr"
          onChange={(e) => setTitle(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSubmit();
            }
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          fullWidth
          variant="outlined"
          size="small"
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: isFocused ? "8px 0 0 8px" : "4px",
              transition: "all 0.3s ease-in-out",
            },
            "& .MuiOutlinedInput-input": {
              fontSize: 16,
            },

            flexGrow: 1,
            marginRight: 0.5,
          }}
        />
      </Box>
    </Fade>
  );
}
