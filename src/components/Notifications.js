import React,{useContext} from 'react'
import { Store } from "../Store";

const Notifications = ({message})=>{
  const { state, dispatch } = useContext(Store);
   return (
       <div className="push-notification">
       {state.notifications.map((item,i)=><Notification  msg={item}/>)}
       </div>
   ) 
}

const Notification = ({msg})=> <div className="notification">{msg}</div>

export default Notifications;