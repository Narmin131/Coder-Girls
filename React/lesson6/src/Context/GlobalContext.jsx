// state management anlayis  - Redux, Context

import { createContext, useState } from "react";

// 1. createContext import etmeli 
// 2. Contextimizi yaradiriq

export const GlobalState = createContext()

// 3.Provider yaratmali

export const GlobalProvider = ({children})=>{
    const [text, setText] = useState('Nermin')
    return(
        <GlobalState.Provider value={{text}}>
            {children}
        </GlobalState.Provider>
    )
}
