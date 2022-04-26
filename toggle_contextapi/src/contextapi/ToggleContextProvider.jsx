
import { createContext } from "react"
import {useState} from "react"
import {useRef} from "react"

export const ToggleContext = createContext()

export const ToggleContextProvider = ({children})=>{
   let cls="dark"
   let isDarkMode =useRef(true)
     
   const toggleMode = ()=>{
    {isDarkMode.current==true?isDarkMode.current=false:isDarkMode.current=true}
  console.log(isDarkMode.current)
    {isDarkMode.current==true?cls="dark":cls="notdark"}
    console.log(cls)
    return cls
   }
  
    return (<ToggleContext.Provider value={{toggleMode}}>
           {children}
   </ToggleContext.Provider>)
    
}