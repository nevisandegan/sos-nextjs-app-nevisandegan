import { Box } from "@mui/material";
import React from "react";
import NavLink from "./NavLink";
import Image from "next/image";
import sosLogo from "@/public/images/sos-logo..svg";
import navItems from "@/data/nav-items";

import NavButton from "./NavButton";
import SideBarMenu from "./SideBarMenu";

const Header = () => {
  return (
    <Box
      sx={{
        boxShadow: 4,
        paddingX: { xs: "1.6rem", sm: "8rem" },
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "72px",
      }}
    >
      <SideBarMenu />
      <Box
        sx={{
          width: { xs: 125, sm: 171 },
          height: { xs: 40, sm: 56 },
          position: "relative",
        }}
      >
        <Image alt="logo" src={sosLogo} layout="fill" objectFit="contain" />
      </Box>
      {navItems.map((item, index) => (
        <NavLink
          sx={{ display: { xs: "none", sm: "block" } }}
          key={`${index}-${item.href}`}
          href={item.href}
        >
          {item.title}
        </NavLink>
      ))}
      <NavButton />
    </Box>
  );
};

export default Header;
