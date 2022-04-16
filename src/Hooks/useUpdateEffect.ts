import React, { useEffect, useRef } from 'react';

export default function useUpdateEffect(callback:Function,deps:Array<any>) {
    const runOnce=useRef(false);
    useEffect(()=>{
        if(!runOnce.current)
        {
            runOnce.current=true;
            return;
        }
        callback();
    },[...deps])
}
