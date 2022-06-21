import {useEffect, useContext} from 'react';
import apiUser from '../api/apiUser';
import { CancelToken } from 'apisauce';
import { AppContext } from '../context/AppContext'


export default function useEditUser(userInfo){
    const user= useContext(AppContext)

    useEffect(
        ()=>{ 
            let response
            const source=CancelToken.source();
            const editUser=async()=>{
                response = await apiUser.put(user.token, userInfo, source.token)
                if (response){
                    // setAlert({msg:`User: ${user.name} Editted`,'cat':'success'})
                    console.log("edited")
                }else{
                    // setAlert({msg:`Please reauthorize you account`,'cat':'warning'})
                    console.log("error")
                }
            }
            return ()=>{source.cancel()}
        },  [userInfo, user.token]
    )
}