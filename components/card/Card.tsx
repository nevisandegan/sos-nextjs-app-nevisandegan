import theme from "@/theme/theme";
import { Box, Stack, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CustomButton from "../button/CustomButton";
import { useRouter } from "next/navigation";

interface Props {
  id: number;
  title: string;
  description: string;
  readingTime: string;
  imageSrc: StaticImageData;
}

const Card = ({ title, description, readingTime, imageSrc, id }: Props) => {
  const router = useRouter();

  return (
    <Box
      sx={{
        width: { xs: "32.8rem", sm: "34.8rem" },
        border: `1px solid ${theme.palette.primary.main}`,
        borderRadius: "1.6rem",
        padding: "1.6rem",
        display: "flex",
        flexDirection: "column",
        gap: 1.5,
        boxShadow: 2,
      }}
    >
      <Box
        sx={{
          width: { xs: 296, sm: 316 },
          height: { xs: 158, sm: 158 },
          position: "relative",
        }}
      >
        <Image
          src={imageSrc}
          alt="article-image"
          layout="fill"
          objectFit="cover"
          style={{ borderRadius: "1.6rem" }}
        />
      </Box>

      <Stack flexDirection="column" gap={"0.3rem"}>
        <Typography variant="h2" sx={{ fontWeight: 600, fontSize: "1.6rem" }}>
          {title}
        </Typography>
        <Stack flexDirection="row" gap={"0.4rem"} alignItems="center">
          <AccessTimeIcon
            sx={{
              color: theme.palette.grey[500],
              width: "1.5rem",
              height: "1.5rem",
            }}
          />

          <Box
            component="span"
            sx={{
              color: theme.palette.grey[500],
              fontWeight: 400,
              fontSize: "1.4rem",
            }}
          >
            {readingTime} دقیقه
          </Box>
        </Stack>
        <Box
          component="p"
          sx={{
            fontSize: "1.4rem",
            color: theme.palette.grey[600],
            fontWeight: 400,
          }}
        >
          {description}
        </Box>
      </Stack>
      <CustomButton
        onClick={() => {
          router.push(`/articles/${id}`);
        }}
      >
        ادامه
      </CustomButton>
    </Box>
  );
};

export default Card;
