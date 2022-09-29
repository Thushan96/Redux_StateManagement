import React from 'react'
import { useDispatch } from 'react-redux'; //use to modify value of state
import {login,logout} from "../Features/user"

function Login() {
  const dispatch=useDispatch()
  return (
    <div>
      <button onClick={()=>{
        dispatch(login({name:"Gaara",age:25,email:"gk@gmail.com"}))} //pass payload
        }>Login</button>

        <button onClick={()=>{dispatch(logout())}}>logout</button>
    </div>
  )
}

export default Login;
