import { Stack, Typography } from '@mui/material'
import React from 'react'
import SearchToolbar from './SearchToolbar'

type Props = {}

export default function LeftToolbar({}: Props) {
  return (
    <Stack spacing={5} direction={"row"}  >
        <Typography className=' text-yellow-500' >Thai-camps.com</Typography>
    </Stack>
  )
}