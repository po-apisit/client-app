import { IconButton, Stack,  useMediaQuery } from '@mui/material'
import React from 'react'
import Promotion from './Promotion'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

type Props = {}


export default function RightToolbar({}: Props) {
  const matches = useMediaQuery('(min-width:900px)');

  return (
    <Stack className=' text-gray-200' direction={"row"} spacing={3} justifyContent={"space-between"} alignItems={"center"} >
      {matches && <Promotion />}
      {!matches && <IconButton color="inherit" ><SearchIcon/></IconButton> }
      {!matches &&<IconButton color="inherit" ><MenuIcon /></IconButton>}
    </Stack>
  )
}