import { api_province } from '@/app/_asset/province'
import { Button, Divider, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import ProvincePostContent from './CenterPostContent/ProvincePostContent'
import SuggestionPostContent from './CenterPostContent/SuggestionPostContent'

type Props = {}

export default function CenterPostContent({}: Props) {
  return (
    <Grid item md={6} lg={6} sm={12} >
            <SuggestionPostContent />
            <ProvincePostContent />
  </Grid>
  )
}