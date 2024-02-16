import React from 'react'
import { List, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import GroupsIcon from '@mui/icons-material/Groups';

type Props = {
    online:boolean
}

export default function FavoriteAsidebarComponent({online}: Props) {
  return (
    <React.Fragment>
        <Typography>สถานะ</Typography>
        <List>
            <ListItemButton disabled={!online} >
                <ListItemIcon>
                    <FavoriteIcon />
                </ListItemIcon>
                <ListItemText primary={"Like"} />
            </ListItemButton>
            <ListItemButton disabled={!online} >
                <ListItemIcon>
                    <BookmarkIcon />
                </ListItemIcon>
                <ListItemText primary={"Favorite"} />
            </ListItemButton>
            <ListItemButton disabled={!online} >
                <ListItemIcon>
                    <PeopleAltIcon />
                </ListItemIcon>
                <ListItemText primary={"Friend"} />
            </ListItemButton>
            <ListItemButton disabled={!online} >
                <ListItemIcon>
                    <AddBusinessIcon />
                </ListItemIcon>
                <ListItemText primary={"Company"} />
            </ListItemButton>
            <ListItemButton disabled={!online} >
                <ListItemIcon>
                    <GroupsIcon />
                </ListItemIcon>
                <ListItemText primary={"Group campping"} />
            </ListItemButton>
        </List>
    </React.Fragment>

  )
}