import React from 'react'
import DiagnosticsForm from '../forms/DiagnosticsForm'
import {Paper, Typography} from '@mui/material'


export default function Diagnostics() {
  return (
    <Paper sx={{m:5, p:5, justifyContent:"center"}}>
    <Typography variant="h4">Diagnostics Search</Typography>
    <DiagnosticsForm/>
    </Paper>
  )
}