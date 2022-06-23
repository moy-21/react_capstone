import React from 'react'
import LoginForm from '../forms/LoginForm'
import {Paper, Typography} from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';



export default function Login() {
  return (
    <Paper sx={{m:5, p:5, justifyContent:"center"}}>
    <Typography variant="h4">Login</Typography>
    <LoginForm/>
    </Paper>
  )
}
