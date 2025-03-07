"use client";

import { Drawer, IconButton } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import NavLink from "./NavLink";
import navItems from "@/data/nav-items";

const SideBarMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <IconButton
        onClick={() => setOpen(true)}
        sx={{
          width: "4rem",
          height: "4rem",
          display: { xs: "block", sm: "none" },
        }}
      >
        <MenuIcon
          color="primary"
          sx={{
            width: "2.4rem",
            height: "2.4rem",
          }}
        />
      </IconButton>
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: "50vw",
            padding: "1rem",
          },
        }}
      >
        {navItems.map((item, index) => (
          <NavLink
            sx={{ marginTop: 1 }}
            key={`${index}-${item.href}`}
            href={item.href}
          >
            {item.title}
          </NavLink>
        ))}
      </Drawer>
    </>
  );
};

export default SideBarMenu;
