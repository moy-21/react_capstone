import {useEffect, useContext} from 'react';
import apiUser from '../api/apiUser';
import { CancelToken } from 'apisauce';
import { AppContext } from '../context/AppContext'


export default function useDeleteUser(){
    const user = useContext(AppContext)

    useEffect(
        ()=>{ 
            let response
            const source=CancelToken.source();
            const deleteUser=async()=>{
                response = await apiUser.del(user.token, source.token)
                if (response){
                    // setAlert({msg:`User: Deleted`,'cat':'success'})
                    console.log("deleted")
                }else{
                    // setAlert({msg:`Please reauthorize you account`,'cat':'warning'})
                    console.log("error")
                }
            }
            return ()=>{source.cancel()}
        },  [user.token]
    )
}