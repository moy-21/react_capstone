import {useEffect, useContext, useState} from 'react';
import apiUser from '../api/apiUser';
import { CancelToken } from 'apisauce';
import { AppContext } from '../context/AppContext'


export default function useCreateUser(createUser){

    const {setAlert} = useContext(AppContext)
    const data = {
        "email":createUser.email,
        "first_name":createUser.firstName,
        "last_name":createUser.lastName,
        "password":createUser.password
    }
    
    
    useEffect(
        ()=>{ 
           
            let response;
            const source=CancelToken.source();
            const createUserr=async()=>{
                if(createUser.firstName){
                
                response = await apiUser.post(data, source.token)
                if(response){
                    setAlert({msg:`${createUser.firstName + ' ' + createUser.lastName} Registered`,'cat':'success'})
                    console.log("User Created")
                    
                }else{
                    setAlert({msg:`Please reauthorize your account`,'cat':'warning'})
                    console.log("error")
                }
                }
                
            }
            createUserr()
            return ()=>{source.cancel()}
        },  [createUser]
    )
}