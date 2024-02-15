import { Dialog, DialogContent, DialogTitle, Stack, Typography } from '@mui/material'
import React from 'react'
import FormDialogLoginProfileAsidebarComponent from './DialogLoginProfileAsidebarComponent/FormDialogLoginProfileAsidebarComponent'

type Props = {
    open:boolean,
    setOpen:(val:boolean) => void
}

export default function DialogLoginProfileAsidebarComponent({open, setOpen}: Props) {
  return (
    <Dialog
    open={open}
    onClose={() => setOpen(false) }
    maxWidth="xs"
    fullWidth
    >
        <DialogTitle>
            <Typography variant="button" >Login</Typography>
        </DialogTitle>
        <DialogContent dividers>
           <FormDialogLoginProfileAsidebarComponent />
        </DialogContent>
    </Dialog>
  )
}