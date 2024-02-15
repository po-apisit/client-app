import { api_province } from '@/app/_asset/province'
import { Button, Dialog, DialogContent, DialogTitle, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import React from 'react'

type Props = {
    open: boolean,
    setOpen: (vol:boolean) => void,
}


export default function DialogProvinceSearchMainRightbarComponent({open, setOpen}: Props) {

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
            <Typography variant='h6' >จังหวัด</Typography>
        </DialogTitle>
        <DialogContent dividers>
            {api_province.map(pro => <Button key={pro.id} onClick={() => handlerRoute(pro.name_en) } >{pro.name_th}</Button> )}
        </DialogContent>
    </Dialog>
  )
}