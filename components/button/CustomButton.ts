import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const CustomButton = styled(Button)(({ theme }) => ({
    width: "12.5rem",
    height: "4rem",
    fontWeight: 400,
    fontSize: "1.4rem",
    borderRadius: "0.8rem",
    alignSelf: "end",
    padding: "8px 16px",
    boxShadow: theme.shadows[2],
    border: `1px solid ${theme.palette.primary.main}`,
}));

export default CustomButton;