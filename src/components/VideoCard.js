import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelTitle, demoChannelUrl } from '../utils/Constant'

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {

  return (
    <Card>
      <Link to={videoId ? `/video/${videoId}`: demoVideoUrl}>
        <CardMedia 
          image={snippet?.thumbnails?.high?.url} 
          alt={snippet?.title}
          sx={{ width: 358, height: 200}}
        />
      </Link>
    </Card>
  )
}

export default VideoCard
   