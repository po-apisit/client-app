'use client'
import { Badge, IconButton, Tooltip, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';


type Props = {}

export default function NotifyComponent({}: Props) {
  const matches = useMediaQuery('(min-width:600px)');
  const [count, setCount] = useState(0);

  return (
    <React.Fragment>
      {
        matches && 
          <Badge badgeContent={count} >
            <Tooltip title="การแจ้งเตือน">
                <IconButton color="inherit" >
                    <NotificationsIcon />
                </IconButton>
            </Tooltip>
        </Badge>
      }
    </React.Fragment>

  )
}