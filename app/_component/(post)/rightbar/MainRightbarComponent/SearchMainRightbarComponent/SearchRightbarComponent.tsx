'use client'
import { ListItemIcon, ListItemText, MenuItem } from '@mui/material'
import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import DialogSearchRightbarComponent from './SearchRightbarComponent/DialogSearchRightbarComponent';

type Props = {}

export default function SearchRightbarComponent({}: Props) {
  const [open, setOpen] = useState(false);
  return (
    <React.Fragment>
    <MenuItem onClick={() => setOpen(!open) } >
      <ListItemIcon>
        <SearchIcon />
      </ListItemIcon>
      <ListItemText primary={"ค้นหาด้วยการพิมพ์"} />
    </MenuItem>
    <DialogSearchRightbarComponent open={open} setOpen={setOpen} />
  </React.Fragment>
  )
}