import { List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material'
import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

type Props = {}

export default function AccountNonAuthenContent({}: Props) {
  return (
    <List
    sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Profile
        </ListSubheader>
      }
    >
        <ListItemButton >
            <ListItemIcon>
                <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Login" />
        </ListItemButton>
    </List>
  )
}