import {useEffect, useContext} from 'react';
import apiUser from '../api/apiUser';
import { CancelToken } from 'apisauce';
import { AppContext } from '../context/AppContext'


export default function useEditUser(userInfo){
    const {user, setAlert}= useContext(AppContext)
    const data = {
        "email":userInfo.email,
        "first_name":userInfo.firstName,
        "last_name":userInfo.lastName,
        "password":userInfo.password
    }

    useEffect(
        ()=>{ 
            let response
            const source=CancelToken.source();
            const editUser=async()=>{
                if(userInfo.password){
                response = await apiUser.put(user.token, data, source.token)
                if(response){
                    setAlert({msg:`User: ${user.first_name} Editted`,'cat':'success'})
                    console.log("edited")
                }else{
                    setAlert({msg:`Please reauthorize you account`,'cat':'warning'})
                    console.log("error")
                }
            }
            }
            editUser()
            return ()=>{source.cancel()}
        },  [userInfo, user.token]
    )
}