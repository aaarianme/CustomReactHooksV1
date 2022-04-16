import React, { useEffect, useState } from "react";
import useTimeout from "./useTimeout";
/**
 * Will fire callback after the delay once the dependencies change. To disable, set delay to zero.
 * @param callback the callback function will be called after the debounce delay
 * @param delay in miliseconds. delay updates wont trigger callback.
 * @param deps dependencies that will make the debounce set back to zero
 *
 */
export default function useDebounce(
  callback: Function,
  delay: number,
  deps: Array<any>
): void {
  const { clear, reset } = useTimeout(callback, delay);
  useEffect(reset, [...deps, reset]);
  useEffect(() => {
    clear();
  }, [delay]);
  useEffect(() => {
    clear();
  }, []);
}
