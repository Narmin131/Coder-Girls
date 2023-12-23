// state management anlayis  - Redux, Context

import { createContext, useEffect, useState } from "react";
import axios from 'axios'
// 1. createContext import etmeli 
// 2. Contextimizi yaradiriq

export const GlobalState = createContext()

// 3.Provider yaratmali

export const GlobalProvider = ({children})=>{
    const [data, setData] = useState([])

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products') 
        .then(res =>{
            console.log(res.data)
            setData(res.data)
            
        })
    }, [])
    return(
        <GlobalState.Provider value={{data}}>
            {children}
        </GlobalState.Provider>
    )
}
