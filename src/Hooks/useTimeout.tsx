import React, { useState, useEffect, useRef, useCallback } from "react";

export default function useTimeout(callback: Function, delay: number) {
  const callbackRef = useRef<Function>(callback);
  const timeoutRef = useRef<any>();
  const [ticked, setTicked] = useState<boolean>(false);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const forceFire = useCallback(() => {
    clear();
    callbackRef.current();
    setTicked(true);
  }, [callback]);

  const clear = useCallback(() => {
    clearTimeout(timeoutRef.current);
  }, []);

  const set = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      setTicked(true);
      callbackRef.current();
    }, delay);
  }, [delay]);

  const reset = useCallback(() => {
    setTicked(false);
    clear();
    set();
  }, [set, clear]);

  useEffect(() => {
    set();
    return () => {
      clear();
    };
  }, [delay, set, clear]);

  return { clear, reset, ticked, forceFire };
}
