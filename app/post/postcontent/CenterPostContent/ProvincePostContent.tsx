'use client'
import { api_province } from '@/app/_asset/province'
import { Button, Divider, Grid, Stack, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function ProvincePostContent() {

  const router = useRouter();

  const handlePronince = (name_en:string) => {
    router.push(`post/${name_en}`)
  }

  return (
        <React.Fragment>
          <Typography >จังหวัด</Typography>
            <Divider />
          {api_province.map(pro =><Button onClick={()=>handlePronince(pro.name_en) } color="inherit" key={pro.id}>{pro.name_th}</Button> )}
        </React.Fragment>
  )
}
