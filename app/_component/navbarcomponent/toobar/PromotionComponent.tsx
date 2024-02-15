import { Button, Tooltip, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

type Props = {}

export default function PromotionComponent({}: Props) {
  return  <Link href={"/promotion"}><Tooltip title="ดูโปรโมชั่น" ><Typography>ดูโปรโมชั่น</Typography></Tooltip></Link> 
  
}