"use client";

import { styled } from '@mui/material/styles';
import Link from 'next/link';

const NavLink = styled(Link)(() => ({
    color: "rgb(17, 88, 167)",
    textDecoration: "none",
    fontSize: "1.4rem",
    fontWeight: 400,
}));

export default NavLink