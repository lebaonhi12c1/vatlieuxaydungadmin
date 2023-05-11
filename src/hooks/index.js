import { useEffect } from "react";


const useCloseNotification = (value,handler)=>{
    useEffect(()=>{
        const notificationTimeOut= setTimeout(()=>{
            value.notification && handler({...value,notification: false})
        },2500)
        return ()=>clearTimeout(notificationTimeOut)
    },[value])
}

export{useCloseNotification}