import { Grid, Stack } from '@mui/material'
import React from 'react'
import LeftPostContent from './postcontent/LeftPostContent'
import CenterPostContent from './postcontent/CenterPostContent'

type Props = {}

export default function post({}: Props) {
  return (
    <Stack sx={{ padding:2 }} className=' text-gray-900 font-bold' >
      <Grid container spacing={2} >
      <LeftPostContent />
      <CenterPostContent />
      </Grid>
      
    </Stack>
  )
}