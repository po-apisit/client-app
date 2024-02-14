import { Stack } from '@mui/material'
import React from 'react'

type Props = {
  params:{ province:string }
}

export async function generateMetadata({ params }:Props) {
  return {
    title: `Thai-camps.com : ${params.province} : การตั้งแคมป์ปิ้งและสถานที่ท่องเที่ยวในไทย`,
    description : "เว็บไซต์เกี่ยวกับการตั้งแคมป์ปิ้ง และสถานที่ท่องเที่ยวในไทย",
    keywords: `${params.province},thai-camps.com , camping ${params.province}, ตั้งแคม${params.province}, camping, เที่ยวไทย, สถานที่ท่องเที่ยว, แคมป์ปิ้ง`,
    author:"thai-camps.com"
  }
}

export default function page({params}: Props) {
  return (
    <Stack sx={{ padding:3 }} >{params.province}</Stack>
  )
}
