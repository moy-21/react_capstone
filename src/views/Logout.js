import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import {Navigate} from 'react-router-dom'

export default function Logout() {
    const {setUser, carList} = useContext(AppContext)

    useEffect(
        ()=>{
            setUser({})
        },[setUser]
    )

  return (
    <>
        <Navigate to="/login"/>
    </>
  )
}