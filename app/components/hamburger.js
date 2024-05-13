"use client"
import React, { useState } from "react";
const Button = () => {
    const [open, setOpen] = useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    return (
      <button onClick={handleOpen}>Open Drawer</button>
    );
  };
  
  export default Button;