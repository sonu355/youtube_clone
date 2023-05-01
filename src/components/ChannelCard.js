import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Box, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { demoProfilePicture } from '../utils/Constant'

const ChannelCard = ({ channelDetail }) => {
  console.log(channelDetail)

  return (
    <Box
      sx={{ 
            boxShadow: 'none', 
            borderRadius: '20px', 
            alignItems:'center', 
            justifyContent: 'center', 
            width:{xs:'270px',md: '270'},
            margin: 'auto',
            display:'flex'
          }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: '#FFF' }}>
          <CardMedia
            image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt={channelDetail?.snippet?.title}
            sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: '2', border: '1px solid #e3e3e3' }}
          />
          <Typography variant="h6" sx={{ mt:'10px'}}>
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{ fontSize: 18, color: 'gray', ml:'5px'}}/>
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography>
              {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString} Subs-cribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard
