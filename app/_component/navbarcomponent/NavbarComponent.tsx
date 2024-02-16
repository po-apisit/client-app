import { Avatar, Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'
import PromotionComponent from './toobar/PromotionComponent'
import ContactmeComponent from './toobar/ContactmeComponent'
import NotifyComponent from './toobar/NotifyComponent'

type Props = {}

export default function NavbarComponent({}: Props) {
  return (
    <Toolbar className='flex flex-row justify-between items-center bg-slate-900 text-slate-100' >
      <Typography fontFamily={"Themietlorfreeversion-Regular"} variant="h5">Thai-camps</Typography>
        <Stack spacing={3} direction={"row"} justifyContent={"space-between"} alignItems={"center"} >
        <NotifyComponent />
        <PromotionComponent />
        <ContactmeComponent />
      </Stack>
    </Toolbar>
  )
}