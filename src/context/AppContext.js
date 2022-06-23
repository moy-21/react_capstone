import {createContext, useState, useReducer, useEffect} from "react";
import { carReducer, carListActions } from "../reducers/carReducer"


export const AppContext = createContext();

const AppContextProvider=({children})=>{
    
    const getUserFromLS = ()=>{
        let user = localStorage.getItem('user')
        if (user){
            return JSON.parse(user)
        }
    }

    const getCarListFromLS = ()=> {
        let carList = localStorage.getItem('carList')
        if (carList) {
            return JSON.parse(carList)
        }
    }

    const [user, _setUser] = useState(getUserFromLS()??{})
    const [alert,setAlert] =useState({})
    const [carList, dispatch] = useReducer(carReducer, getCarListFromLS()??[])


    const setUser = (user)=>{
        localStorage.setItem('user', JSON.stringify(user))
        _setUser(user)
    }

    useEffect(
        ()=>{
          
                localStorage.setItem('carList', JSON.stringify(carList))
            

        },[carList]
    )

    const values = {
        user,
        setUser,
        alert, 
        setAlert,
        carList,
        addFavorite:(car)=>{
            dispatch({type: carListActions.addFavorite, car})
        },
        addBulkToFavorite:(car)=>{
            dispatch({type: carListActions.addBulkToFavorite, car})
        },
        removeFavorite:(car)=>{
            dispatch({type: carListActions.removeFavorite, car})
        },
        removeAllFavorite:(car)=>{
            dispatch({type:carListActions.removeAllFavorite, car})
        },
        emptyFavorite:()=>{dispatch({type:carListActions.emptyFavorite})}

    }

    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider