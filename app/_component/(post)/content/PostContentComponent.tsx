import { Avatar, Button, Divider, Paper, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import ImageIcon from '@mui/icons-material/Image';
import VideocamIcon from '@mui/icons-material/Videocam';

type Props = {}

export default function PostContentComponent({}: Props) {
  return (
    <Paper elevation={2} sx={{ width:"100%", padding:2 }}   >
        <Typography>สร้างโพสด์ตัวเอง ในพื้นที่ส่วนตัว</Typography>
        <Divider />
        <Stack direction={"column"} justifyContent={"flex-start"} alignItems={"center"} sx={{ width:"100%" }}   >
            <Stack direction={"row"} justifyContent={"space-between"} alignItems={"flex-start"} sx={{ width:"100%", padding:2 }} spacing={3} >
                <Avatar>
                    AP
                </Avatar>
                <TextField
                label="โพสต์ ข้อความ"
                focused
                size="small"
                multiline
                minRows={1}
                fullWidth
                />
            </Stack>

            <Divider />

            <Stack direction={"row"} justifyContent={"space-around"} alignItems={"center"} spacing={3}  sx={{ width:"100%" }} >
  
                <Button startIcon={<ImageIcon color="secondary" />} variant="outlined" >
                    เพิ่มรูปภาพ
                </Button>
                <Button startIcon={<VideocamIcon color="info" />} variant="outlined" >
                เพิ่ม วีดีโอ
                </Button>
             
            </Stack>
        </Stack>
    </Paper>
  )
}