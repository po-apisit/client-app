import { Divider, Typography } from '@mui/material'
import React from 'react'

type Props = {}

export default function SuggestionPostContent({}: Props) {
  return (
    <React.Fragment>
      <Typography>แนะนำ  </Typography>
      <Divider />
    </React.Fragment>
  )
}