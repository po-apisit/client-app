import { Stack, Typography } from '@mui/material'
import React from 'react'
import CardRecommendRightbarComponent from './RecommendRightbarComponent/CardRecommendRightbarComponent'
import { mock_recommend } from '@/app/_asset/mock_recommend'

type Props = {}

export default function RecommendRightbarComponent({}: Props) {
  return (
    <Stack>
      <Typography variant="h6">แนะนำสถานที่</Typography>
      { mock_recommend.map(mock => <CardRecommendRightbarComponent 
                key={mock.id} 
                title={mock.title} 
                urlimg={mock.url_img} 
                subtitle={mock.subtitle}
                rating={mock.rating}
                company_id={mock.company_id}
                company_name={mock.company_name}
                create_at={mock.create_at}
      
                 /> ) }
    </Stack>
  ) 
}