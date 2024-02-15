import { api_province } from '@/app/_asset/province'
import { api_travel } from '@/app/_asset/travel'
import { Button, Dialog, DialogContent, DialogTitle, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import React from 'react'

type Props = {
    open: boolean,
    setOpen: (vol:boolean) => void,
}


export default function DialogCategorySearchMainRightbarComponent({open, setOpen}: Props) {

  const route = useRouter()

  const handlerRoute = (name_en:string) => route.push(name_en)

  return (
    <Dialog
        open={open}
        onClose={() =>setOpen(false)}
        maxWidth="md"
        fullWidth
        >
        <DialogTitle >
            <Typography variant='h6' >ประเภทกิจกรรม</Typography>
        </DialogTitle>
        <DialogContent dividers>
            {api_travel.map((pro, index) => <Button key={index} onClick={() => handlerRoute(pro.name_en) } >{pro.name_th}</Button> )}
        </DialogContent>
    </Dialog>
  )
}