import React from 'react'
import Link from 'next/link';
import { Typography } from '@mui/material';

type Props = {}

const menu = [
    { title:"ติดต่อโฆษณา", link:"contact" },
    { title:"ดูโปรโมชั่น", link:"promotion" },
]

export default function Promotion({}: Props) {

  return (
    <React.Fragment>
       {menu.map((m, i) => <Link key={i} href={m.link} ><Typography >{m.title}</Typography></Link>  )}
    </React.Fragment>
  )
}