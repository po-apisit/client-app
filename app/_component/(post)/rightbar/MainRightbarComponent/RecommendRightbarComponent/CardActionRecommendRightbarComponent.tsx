import React from 'react'
import { CardActions, IconButton, Stack, Typography } from '@mui/material'
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import ShareIcon from "@mui/icons-material/Share";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import Link from 'next/link';

type Props = {}

export default function CardActionRecommendRightbarComponent({}: Props) {
  return (
    <CardActions className='flex flex-col justify-start items-start' >
        <Stack direction={"row"} spacing={1} sx={{ width: "100" }}>
          <IconButton aria-label="add to favorites">
            <FavoriteBorderIcon color="info" />
          </IconButton>

          <IconButton aria-label="add to favorites">
            <ChatBubbleOutlineIcon color="info" />
          </IconButton>

          <IconButton aria-label="add to favorites">
            <ShareIcon color="info" />
          </IconButton>

        </Stack>
        <Typography variant="caption" color="InfoText" >ถูกใจ 60 คน และความคิดเห็น 30 คอมเม้น</Typography>
      </CardActions>
  )
}