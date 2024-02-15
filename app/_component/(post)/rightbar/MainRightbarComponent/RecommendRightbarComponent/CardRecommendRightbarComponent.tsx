import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, IconButton, Rating, Typography } from '@mui/material'
import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

type Props = {
    urlimg:string,
    title:string,
    subtitle:string,
    rating:number,
    create_at:string,
    company_name:string,
    company_id:number
}

export default function CardRecommendRightbarComponent({urlimg, title, subtitle, rating, create_at, company_name, company_id}: Props) {
  return (
    <Card sx={{ padding:2 , margin:1 }}  >
        <CardHeader
        title={company_name}
        subheader={create_at}
        avatar={<Avatar>
            R
        </Avatar>}
        />
        <CardMedia
        sx={{ height: 100, width:"100%" }}
        image={urlimg}
        title={title}
        />
        <CardContent >
        <Typography gutterBottom variant="button" component="div">
          {title}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {subtitle.length > 100 ? subtitle.substring(0,100) + "..." : subtitle}
        </Typography><br />
        <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly size="small" />
        </CardContent>
        <Divider />
        <CardActions>

        <IconButton aria-label="add to favorites">
          <FavoriteBorderIcon color="error" />
        </IconButton>

        <IconButton aria-label="add to favorites">
          <BookmarkBorderIcon color="error" />
        </IconButton>

        <Button variant="outlined" color="primary" size="small" >
          more
        </Button>

        </CardActions>
    </Card>
  )
}