import {
    Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Typography,
} from "@mui/material";
import React from "react";
import LoginProfileAsidebarComponent from "./ProfileAsidebarComponent/LoginProfileAsidebarComponent";


type Props = {
  online:boolean
};

export default function ProfileAsidebarComponent({online}: Props) {

  return (
    <React.Fragment>
        <Typography color="inherit" >Profile</Typography>
      <List>
        {online ? (
          <ListItemButton>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="login" />
          </ListItemButton>
        ) : <LoginProfileAsidebarComponent />
        }
      </List>
      <Divider />
    </React.Fragment>
  );
}
