'use client'
import { Grid, useMediaQuery } from '@mui/material'
import React from 'react'
import AccountNonAuthenContent from './LeftPostContent/AccountNonAuthenContent'
import FollowerContent from './LeftPostContent/FollowerContent'

type Props = {}

export default function LeftPostContent({}: Props) {
  const matches = useMediaQuery('(min-width:900px)');
  return (
    <Grid item   md={3} lg={3} sm={12}>
      { matches && <AccountNonAuthenContent /> }
      { matches && <FollowerContent /> }
      
    </Grid>
  )
}