import { Grid } from '@mui/material'
import React from 'react'
import ProfileAsidebarComponent from './ProfileAsidebarComponent'
import FavoriteAsidebarComponent from './FavoriteAsidebarComponent'

type Props = {}

export default function MainAsidebarComponent({}: Props) {

  const online = false;

  return (
    <Grid item md={3} lg={3} xs={12} >
        <ProfileAsidebarComponent online={online} />
        <FavoriteAsidebarComponent online={online} />
    </Grid>
  )
}