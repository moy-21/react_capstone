import React, {useContext, useState} from 'react'
import RegisterForm from '../forms/RegisterForm'
import {Paper, Typography, Box} from '@mui/material'
import { AppContext } from '../context/AppContext'
import Button from '../components/Button'




export default function Register() {
    const {user} = useContext(AppContext)
  return (
  
    <Paper sx={{m:5, p:5, justifyContent:"center"}}>
    
    {user.token?
        <Typography variant="h4">Edit User</Typography>
    :
        <Typography variant="h4">Register</Typography>
    }
    
    <RegisterForm/>
    <br/>
    
    {user.token?
            <Box>
                <Typography variant ="h4">Upgrade To Premium</Typography>
                <Typography variant ="h5">Starting at $25</Typography>
                <Typography variant ="h5" sx={{color: 'rgba(255, 255, 255, 0.44)'}}>
                    <ul>
                        <li>Vin Decode Plus</li>
                        <li>OBD Port Search</li>
                        <li>2 Vehicle History Reports</li>
                        <li>Maintance List</li>
                        <li>Salvage Check</li>
                        <li>Dealer Listings</li>
                        <li>Car Valuation</li>

                    </ul>
                </Typography>
                <br/>
                <Button>Upgrade</Button>
            </Box>
        :
        <></>
    }
    </Paper>
  )
}