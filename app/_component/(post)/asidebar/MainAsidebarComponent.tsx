import { Grid } from '@mui/material'
import React from 'react'
import ProfileAsidebarComponent from './ProfileAsidebarComponent'
import FavoriteAsidebarComponent from './FavoriteAsidebarComponent'

type Props = {}

export default function MainAsidebarComponent({}: Props) {

  const online = false;

  return (
    <Grid item md={12} lg={2} >
        <ProfileAsidebarComponent online={online} />
        <FavoriteAsidebarComponent online={online} />
    </Grid>
  )
}