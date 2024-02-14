import { Badge, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material'
import React from 'react'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import GroupIcon from '@mui/icons-material/Group';
import ShareIcon from '@mui/icons-material/Share';
import StoreIcon from '@mui/icons-material/Store';
import BookmarksIcon from '@mui/icons-material/Bookmarks';

type Props = {}

export default function FollowerContent({}: Props) {
  return (
    <List
    sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
    component="nav"
    aria-labelledby="nested-list-subheader"
    subheader={
      <ListSubheader component="div" id="nested-list-subheader">
        กิจกรรม
      </ListSubheader>
    }
    >
         <ListItemButton >
            <ListItemIcon  >
                <GroupIcon color="primary"  />
            </ListItemIcon>
            <ListItemText primary="friend" />
            <Badge badgeContent={3} color='primary' ></Badge>
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <BookmarkIcon color="info" />
            </ListItemIcon>
            <ListItemText primary="follower" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <BookmarksIcon color="info" />
            </ListItemIcon>
            <ListItemText primary="following" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <StoreIcon color="info"  />
            </ListItemIcon>
            <ListItemText primary="company" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <ShareIcon color="info" />
            </ListItemIcon>
            <ListItemText primary="share profile" />
        </ListItemButton>
    </List>
  )
}