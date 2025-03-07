import { Button, Stack, Typography } from "@mui/material";
import Articles from "@/components/articles/Articles";

export default function Home() {
  return (
    <>
      <Stack flexDirection="row" justifyContent="space-between" paddingX={1}>
        <Typography variant="h1" sx={{ fontSize: "2.4rem", fontWeight: 500 }}>
          مقاله ها
        </Typography>
        <Button
          variant="text"
          color="primary"
          sx={{ fontSize: "1.6rem", display: { xs: "none", sm: "block" } }}
        >
          نمایش همه
        </Button>
      </Stack>
      <Stack
        sx={{
          marginTop: "1rem",
          overflow: "auto",
          paddingX: 1,
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: "1rem",
        }}
      >
        <Articles />
      </Stack>
    </>
  );
}
