import { Grid, Stack } from '@mui/material'
import React from 'react'
import PostContentComponent from './PostContentComponent'

type Props = {}

export default function MainContentComponent({}: Props) {
  return (
    <Grid item md={5} lg={5} xs={12} >
      <Stack direction={"column"} justifyContent={"flex-start"} alignItems={"center"} spacing={2} sx={{ width:"100%" }} >
        <PostContentComponent />
      </Stack>
    </Grid>
  )
}