import React from 'react'
import CarLookupForm from '../forms/CarLookupForm'
import {Paper, Typography} from '@mui/material'


export default function CarDecoder() {
  return (
    <Paper sx={{m:5, p:5, justifyContent:"center"}}>
    <Typography variant="h4">Vehicle Search</Typography>
    <CarLookupForm/>
    </Paper>
  )
}