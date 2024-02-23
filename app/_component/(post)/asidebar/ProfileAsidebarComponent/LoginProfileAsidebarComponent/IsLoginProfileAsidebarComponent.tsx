'use client'
import { useUser } from '@auth0/nextjs-auth0/client';
import { Avatar, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import LogoutIcon from '@mui/icons-material/Logout';
import { useRouter } from 'next/navigation';


type Props = {}

export default function IsLoginProfileAsidebarComponent({}: Props) {
    const { user, error, isLoading }:any = useUser();
    const router = useRouter();




    return (
        <List>
            <ListItemButton>
                <ListItemIcon>
                    <Avatar src={user.picture} alt={user.name} />
                </ListItemIcon>
                <ListItemText primary={user.name} />
            </ListItemButton>
            <ListItemButton onClick={() => router.push("api/auth/logout") } >
                <ListItemIcon>
                    <LogoutIcon  />
                </ListItemIcon>
                <ListItemText primary={"LOG OUT"} />
            </ListItemButton>
        </List>
    )
}
