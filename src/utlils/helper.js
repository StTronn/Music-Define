import { useContext } from "react";

import { Store } from "../Store";

export const useShowNotification = () => {
  const { state, dispatch } = useContext(Store);
  const ret = (msg,time=4000) => {
    dispatch({ type: "ADD_NOTIFICATION",payload: {msg} });
    setTimeout(() => {
      dispatch({ type: "DELETE_NOTIFICATION" });
    }, time);
  };
  return ret;
};
