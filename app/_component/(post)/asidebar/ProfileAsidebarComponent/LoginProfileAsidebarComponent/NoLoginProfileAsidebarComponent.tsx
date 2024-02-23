'use client'
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useRouter } from 'next/navigation';
import LoginIcon from '@mui/icons-material/Login';

type Props = {}

export default function NoLoginProfileAsidebarComponent({}: Props) {
  const router = useRouter();

  return (
    <ListItemButton onClick={() => router.push("/api/auth/login")  } >
              <ListItemIcon>
                <LoginIcon />
              </ListItemIcon>
              <ListItemText primary="login" />
   </ListItemButton>
  )
}