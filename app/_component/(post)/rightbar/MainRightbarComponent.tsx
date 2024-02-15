import { Divider, Grid } from '@mui/material'
import React from 'react'
import SearchMainRightbarComponent from './MainRightbarComponent/SearchMainRightbarComponent'
import RecommendRightbarComponent from './MainRightbarComponent/RecommendRightbarComponent'

type Props = {}

export default function MainRightbarComponent({}: Props) {
  return (
    <Grid item md={12} lg={3} >
        <SearchMainRightbarComponent />
        <RecommendRightbarComponent />
    </Grid>
  )
}