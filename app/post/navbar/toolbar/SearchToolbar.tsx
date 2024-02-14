'use client'
import { IconButton, Stack,  useMediaQuery } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

type Props = {}

export default function SearchToolbar({}: Props) {
  const matches = useMediaQuery('(min-width:900px)');
  return (
    <Stack  >
        {
            matches &&
            <input 
            className=' text-gray-500 border-2 border-solid border-gray-200 rounded-xl size-3 w-80 px-3 h-7 justify-center bg-gray-800'
            placeholder='search'
        />
        }

        {
            !matches && <IconButton className="text-gray-200" color="inherit" ><SearchIcon/></IconButton> 
        }
        

    </Stack>
  )
}