import { Badge, IconButton, Tooltip } from '@mui/material'
import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';

type Props = {}

export default function NotifyComponent({}: Props) {
  return (
    <Badge>
        <Tooltip title="การแจ้งเตือน">
            <IconButton color="inherit" >
                <NotificationsIcon />
            </IconButton>
        </Tooltip>
    </Badge>
  )
}