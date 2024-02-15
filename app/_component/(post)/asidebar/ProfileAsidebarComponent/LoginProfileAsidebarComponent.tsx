'use client'
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DialogLoginProfileAsidebarComponent from "./LoginProfileAsidebarComponent/DialogLoginProfileAsidebarComponent";

type Props = {};

export default function LoginProfileAsidebarComponent({}: Props) {

  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <ListItemButton onClick={() => setOpen(!open) } >
        <ListItemIcon>
          <AccountCircleIcon />
        </ListItemIcon>
        <ListItemText primary="login" />
      </ListItemButton>
      <DialogLoginProfileAsidebarComponent open={open} setOpen={setOpen} />
    </React.Fragment>
  );
}
