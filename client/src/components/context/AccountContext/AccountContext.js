import { createContext } from "react";

export const accountContext = createContext();
//initial state
const INITIAL_STATE = {
  account: null,
  accounts: [],
  loading: false,
  error: null,
};

//reducer
const accountReducer = (state, action) => {
  const { type, payload } = action;
};
//provider

const AccountContextProvider = ({ children }) => {
  return <accountContext.Provider>{children}</accountContext.Provider>;
};

export default AccountContextProvider;
