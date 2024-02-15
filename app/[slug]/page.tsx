import { Stack } from '@mui/material';
import { Metadata } from 'next';
import React from 'react'

type Props = {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props,
): Promise<Metadata> {
  // read route params
 

  return {
    title: "Thai-camps : "+params.slug ,
    keywords:"thaicamp, แคมปิ้้ง,"

  }
}

export default function page({params}: Props) {

  return (
    <Stack p={3}>{params.slug}</Stack>
  )
}