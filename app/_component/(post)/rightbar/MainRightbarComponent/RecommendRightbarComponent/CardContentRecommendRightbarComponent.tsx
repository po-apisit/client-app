import React from 'react'
import { Button, CardContent, CardMedia, Rating, Stack, Typography } from '@mui/material'
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { ICardRecommend } from '@/app/(interface)/ICardrecommend';



type Props = {
    card: ICardRecommend
}

export default function CardContentRecommendRightbarComponent({card }: Props) {
  return (
    <CardContent>
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      spacing={1}
    >
      <CardMedia
        sx={{ height: 125, width: 150 }}
        image={card.urlimg}
        title={card.title}
      />
      <Stack direction={"column"}>
        <Typography gutterBottom variant="button" component="div">
          {card.title}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {card.subtitle.length > 100
            ? card.subtitle.substring(0, 100) + "..."
            : card.subtitle}
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          size="small"
          sx={{ width: 30 }}
        >
          more
        </Button>
        <Stack direction={"row"} spacing={1}>
        <BookmarkBorderIcon color="info" />
        <Rating
          name="half-rating-read"
          defaultValue={card.rating}
          precision={0.5}
          readOnly
          size="small"
        />

        </Stack>

      </Stack>
    </Stack>
  </CardContent>
  )
}