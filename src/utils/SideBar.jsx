import React from "react";
import { Drawer } from "@mui/material";
import "../styles/SideBar.css";

export default function SideBar({ open }) {
  return (
    <Drawer variant="persistent" open={open}></Drawer>
  );
}
