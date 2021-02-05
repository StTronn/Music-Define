import React, { useReducer } from "react";

export const Store = React.createContext();

const initialState = {
  notifications: [],
};

function reducer(state, action) {
  console.log("reducer", state);
  switch (action.type) {
    case "ADD_NOTIFICATION": {
      const newList = [...state.notifications, action.payload.msg];
      return { ...state, notifications: newList };
    }
    case "DELETE_NOTIFICATION": {
      const newList = state.notifications.shift() || [];
      return { ...state, newList };
    }
    case "SHOW_NOTIFICATION":
      const newList = [...state.notifications, action.payload.item];
      return { ...state, newList };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
