'use client'
import React, { useState } from "react";
import CategoryIcon from "@mui/icons-material/Category";
import { ListItemIcon, ListItemText, MenuItem } from "@mui/material";
import DialogCategorySearchMainRightbarComponent from "./CategorySearchMainRightbarComponent/DialogCategorySearchMainRightbarComponent";

type Props = {};

export default function CategorySearchMainRightbarComponent({}: Props) {
  const [open, setOpen] = useState(false)
  return (
    <React.Fragment>
      <MenuItem onClick={() =>setOpen(!open) } >
        <ListItemIcon>
          <CategoryIcon />
        </ListItemIcon>
        <ListItemText primary={"ประเภทกิจกรรม"} />
      </MenuItem>
      <DialogCategorySearchMainRightbarComponent open={open} setOpen={setOpen} />
    </React.Fragment>
  );
}
