import React from 'react'
import WarrantyForm from '../forms/WarrantyForm'
import {Paper, Typography} from '@mui/material'


export default function Diagnostics() {
  return (
    <Paper sx={{m:5, p:5, justifyContent:"center"}}>
    <Typography variant="h4">Warranty Search</Typography>
    <WarrantyForm/>
    </Paper>
  )
}