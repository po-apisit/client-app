import { api_province } from '@/app/_asset/province'
import { Button, Dialog, DialogContent, DialogTitle, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import React from 'react'

type Props = {
    open: boolean,
    setOpen: (vol:boolean) => void,
}


export default function DialogSearchRightbarComponent({open, setOpen}: Props) {

  const route = useRouter()

  const handlerRoute = (name_en:string) => route.push(name_en)

  return (
    <Dialog
        open={open}
        onClose={() =>setOpen(false)}
        maxWidth="xl"
        fullWidth
        >
        <DialogTitle >
            <Typography variant='h6' >ค้นหา</Typography>
        </DialogTitle>
        <DialogContent dividers>
            
        </DialogContent>
    </Dialog>
  )
}