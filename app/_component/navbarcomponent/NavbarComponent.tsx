import { Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'
import PromotionComponent from './toobar/PromotionComponent'
import ContactmeComponent from './toobar/ContactmeComponent'

type Props = {}

export default function NavbarComponent({}: Props) {
  return (
    <Toolbar className=' bg-slate-900 text-slate-300 flex flex-row justify-between items-center' >
      <Typography>Thai-camps.com</Typography>
      <Stack spacing={3} direction={"row"} justifyContent={"space-between"} >
        <PromotionComponent />
        <ContactmeComponent />
      </Stack>
    </Toolbar>
  )
}