import { Tooltip, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

type Props = {}

export default function ContactmeComponent({}: Props) {
  return <Link href={"/contect"} ><Tooltip title="ติดต่อฉัน"><Typography>ติดต่อฉัน</Typography></Tooltip></Link>
  
}