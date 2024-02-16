import { Stack, Typography } from '@mui/material'
import React from 'react'
import CardRecommendRightbarComponent from './RecommendRightbarComponent/CardRecommendRightbarComponent'
import { mock_recommend } from '@/app/_asset/mock_recommend'
import { CardRecommend } from '@/app/(interface)/ICardrecommend'

type Props = {}

export default function RecommendRightbarComponent({}: Props) {
  return (
    <Stack>
      <Typography variant="h6">แนะนำสถานที่</Typography>
      { mock_recommend.map(mock => {

        var card:CardRecommend = {
          urlimg : mock.url_img,
          title : mock.title,
          subtitle : mock.subtitle,
          rating : mock.rating,
          create_at : mock.create_at,
          company_name : mock.company_name,
          company_id : mock.company_id
        };

        return <CardRecommendRightbarComponent card={card} />

      }) }
    </Stack>
  ) 
}