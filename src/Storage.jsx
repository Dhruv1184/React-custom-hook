import { useState,useEffect } from "react";

function Storage(key, iniValue = ''){
    const [data,setData] = useState(()=>{
        const storeValue = localStorage.getItem(key)
        return storeValue!==null? storeValue:iniValue
    })

    useEffect(()=>{
        localStorage.setItem(key,data)
        sessionStorage.setItem(key,data)
    },[key,data])
    return [data,setData]
}
export default Storage