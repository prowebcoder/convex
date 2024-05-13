"use client"
import React, { useState } from "react";
import { Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <>
    <div onClick={handleDrawerToggle} className="headermenu">
<div class="bar1"></div>
  <div class="bar2"></div>
  <div class="bar3"></div>
  </div>
    <Drawer anchor="left" open={open} onClose={handleDrawerToggle}>
      <List>
        <ListItemButton component="a" href="/">
          <ListItemText primary="Home" />
        </ListItemButton>
        <ListItemButton component="a" href="/about">
          <ListItemText primary="About" />
        </ListItemButton>
        <ListItemButton component="a" href="/contact">
          <ListItemText primary="Contact" />
        </ListItemButton>
      </List>
    </Drawer>
    </>
  );
};

export default Sidebar;