'use client'
import { Tooltip, Typography, useMediaQuery } from '@mui/material'
import Link from 'next/link'
import React from 'react'

type Props = {}

export default function ContactmeComponent({}: Props) {

  const matches = useMediaQuery('(min-width:600px)');


  return (
    <React.Fragment>
      {
        matches && 
          <Link href={"/contect"} >
          <Tooltip title="ติดต่อฉัน">
            <Typography>ติดต่อฉัน</Typography>
          </Tooltip>
        </Link>
      }
      
    </React.Fragment>
  )
  
}