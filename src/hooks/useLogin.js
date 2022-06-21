import React, {useEffect, useContext} from 'react'
import {getUser} from '../api/apiBasicAuth';
import { CancelToken } from 'apisauce';
import { AppContext } from '../context/AppContext'

// import {useNavigate} from 'react-router-dom';

export default function useLogin(loginCreds, setLoginCreds, setError, setUser) {

    const {setAlert} = useContext(AppContext)
    
    // const navigate = useNavigate()
    useEffect(
        

        ()=>{
            const source = CancelToken.source()
            if (loginCreds.email && loginCreds.password){
                const login = async (cancelToken)=>{
                    const response = await getUser(loginCreds.email, loginCreds.password,cancelToken)
                    console.log(response)
                    if(response.user?.token){
                        console.log('logged in');
                        setUser(response.user);
                        setAlert({msg:`Wcome ${response.user.first_name + ' ' + response.user.last_name}`,'cat':'success'})
                        setLoginCreds({})
                        // navigate('/')
                    }
                    setError(response.error);
                }
                login(source.token)
            }
            return ()=>{source.cancel()}
        },                                      //,navigate
        [loginCreds,  setLoginCreds, setError, setUser]
    )
    
}