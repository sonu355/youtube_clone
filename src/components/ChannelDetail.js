import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import Videos from './Videos'
import ChannelCard from './ChannelCard'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const ChannelDetail = () => {
  const { id } = useParams()

  useEffect(() => {
    fetchFromAPI(`channels?part="snippet&id=${id}`)
    .then((data)  => )
  },[])
  return (
    <div>
      {id}
    </div>
  )
}

export default ChannelDetail
