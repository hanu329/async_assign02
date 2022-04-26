import {ToggleContext} from "../contextapi/ToggleContextProvider"
import {useState, useContext } from "react";
import "../App.css"


export const Toggler = () =>{
   const {toggleMode}= useContext(ToggleContext)
   const [clss, setclss] = useState("dark")

    return <div className={clss} id="dv">
      value of value is: 
      <button onClick={()=>{setclss(toggleMode())}}>toggle</button>
    </div>
}