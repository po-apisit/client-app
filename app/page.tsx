import { Grid, Stack } from '@mui/material'
import React from 'react'
import MainAsidebarComponent from './_component/(post)/asidebar/MainAsidebarComponent'
import MainContentComponent from './_component/(post)/content/MainContentComponent'
import MainRightbarComponent from './_component/(post)/rightbar/MainRightbarComponent'

type Props = {}

export default function page({}: Props) {
  return (
    <Stack p={3} >
      <Grid container spacing={4} >
        <MainAsidebarComponent />
        <MainContentComponent />
        <MainRightbarComponent />
      </Grid>
    </Stack>
  )
}