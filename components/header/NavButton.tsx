"use client";

import theme from "@/theme/theme";
import { Button } from "@mui/material";

const NavButton = () => {
  return (
    <Button
      variant="contained"
      sx={{
        paddingY: { xs: 1, sm: 2 },
        paddingX: { xs: 2, sm: 4 },
        fontSize: { xs: "1.4rem", sm: "1.6rem" },
        bgcolor: theme.palette.primary.main,
        width: { xs: "12.5rem", sm: "17.1rem" },
        borderRadius: "0.8rem",
      }}
    >
      ورود و فعالسازی
    </Button>
  );
};

export default NavButton;
