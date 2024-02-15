'use client'
import { ListItemIcon, ListItemText, MenuItem } from "@mui/material";
import React, { useState } from "react";
import WhereToVoteIcon from "@mui/icons-material/WhereToVote";
import DialogProvinceSearchMainRightbarComponent from "./ProvinceSearchMainRightbarComponent/DialogProvinceSearchMainRightbarComponent";
type Props = {};

export default function ProvinceSearchMainRightbarComponent({}: Props) {

  const [open, setOpen] = useState(false)

  return (
    <React.Fragment>
      <MenuItem onClick={() => setOpen(!open) } >
        <ListItemIcon>
          <WhereToVoteIcon />
        </ListItemIcon>
        <ListItemText primary={"จังหวัด"} />
      </MenuItem>
      <DialogProvinceSearchMainRightbarComponent open={open} setOpen={setOpen} />
    </React.Fragment>
  );
}

