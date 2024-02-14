'use client'
import { Toolbar } from '@mui/material'
import React from 'react'
import LeftToolbar from './toolbar/LeftToolbar'
import RightToolbar from './toolbar/RightToolbar'

type Props = {}

export default function HeaderPost({}: Props) {
  return (
    <Toolbar sx={{ width:"100%", direction:"row", justifyContent:"space-between" }} className='bg-gray-800 ' >
            <LeftToolbar />
            <RightToolbar />
    </Toolbar>
  )
}