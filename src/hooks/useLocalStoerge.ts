import React, { useEffect, useState } from 'react'

function useLocalStoerge<T>(key:string,initialValue:T|(()=>T)) {
  const [value,setValue] = useState<T>(()=>{
    // Get data from localStorage by key
    const jsonValue = localStorage.getItem(key);
    // If there us a data store in local storge with that key
    if(jsonValue){ 
      return JSON.parse(jsonValue)
    }
    // If there is no data Return the initial value
    if(typeof initialValue === "function" )
    {
      return(initialValue as ()=>T)
    }
    else {
      return initialValue
    }
  })

  useEffect(()=>{
    localStorage.setItem(key,JSON.stringify(value))
  },[key,value])

  return [value,setValue]as [typeof value,typeof setValue]
}

export default useLocalStoerge