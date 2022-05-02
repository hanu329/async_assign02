import {useState} from "react"
import axios from "axios"
import { NewOrder } from "./NewOrder.jsx";
import { Orders } from "./Orders.jsx";
import {Link} from "react-router-dom"

export const Login = () => {

  const [nme, setnme] = useState({
    username:"",
    pass:""
  })
  const [psd, setpsd] = useState("")

  const handleChange = (e) =>{
      const {id, value} = e.target

      setnme({...nme, [id]:value})

  }

  const handleUser= (e) =>{
   e.preventDefault()
  
  axios.get("http://localhost:8080/users").then((res)=>{
    let usr= res.data;
    
    usr.map((e)=>{
       if(e.username==nme.username && e.pass==nme.pass){
       if(e.role=="client"){
         //{console.log(e.role)}
        return (<NewOrder name={e.username} />)
      }
        
       else if(e.role=="admin"){
        return <Orders />
       }
      }
    })
    
  })
}
  return (
    <div>
      <input
        id="username"
        onChange={handleChange}
        className="username"
        type="text"
        name="username"
        placeholder="Enter Username"
      />
      <input
        id="pass"
        onChange={handleChange}
        className="password"
        type="password"
        name="password"
        placeholder="Enter password"
      />
      {/* On this button click make network req to find user with same username and password */}
      {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
      <button className="submit" onClick={()=>{handleUser(event)}}>Login</button>
    </div>
  );
};
