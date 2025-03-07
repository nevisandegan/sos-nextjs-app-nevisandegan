import articlesData from "@/data/articles-data";
import { Box, Grid2 as Grid, Typography } from "@mui/material";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return articlesData.map((article) => ({
    id: String(article.id),
  }));
}

export default async function Article({ params }: { params: { id: string } }) {
  const article = articlesData.find((item) => item.id === Number(params.id));

  if (!article) {
    notFound();
  }

  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, sm: 6 }}>
        <Box
          sx={{
            border: "1px solid #9f9f9f",
            height: "40rem",
            borderRadius: "1.6rem",
            boxShadow: 2,
            padding: 3,
          }}
        >
          <Typography sx={{ fontSize: "2.4rem", fontWeight: 600 }} variant="h2">
            {article.title}
          </Typography>
          <Box component="p" sx={{ fontSize: "1.8rem", marginTop: 2 }}>
            {article.description}
          </Box>
        </Box>
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <Box
          sx={{
            width: "100%",
            height: 400,
            position: "relative",
            boxShadow: 2,
          }}
        >
          <Image
            src={article.imageSrc}
            alt="article-image"
            layout="fill"
            objectFit="cover"
            style={{ borderRadius: "1.6rem" }}
          />
        </Box>
      </Grid>
    </Grid>
  );
}
