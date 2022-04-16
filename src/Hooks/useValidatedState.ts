import React, { useEffect, useState } from 'react';


export default function useValidatedState<t>(initialVal:t,isValidFunction:(currentState:t)=>boolean)
       :[t,React.Dispatch<React.SetStateAction<t>>,boolean] 
{
    const [state,setState]=useState<t>(initialVal);
    const [valid,setValid]=useState<boolean>(false);
    useEffect(()=>{
        setValid(isValidFunction(state));
    },[state])
    return[state,setState,valid];
  
}
