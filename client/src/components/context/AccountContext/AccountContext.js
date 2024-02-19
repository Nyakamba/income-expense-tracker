import { createContext, useReducer } from "react";
import axios from "axios";
import {
  ACCOUNT_DETAILS_SUCCESS,
  ACCOUNT_DETAILS_FAIL,
  ACCOUNT_CREATION_SUCCESS,
  ACCOUNT_CREATION_FAIL,
} from "./accountActionTypes";
import { API_URL_ACC } from "../../../utils/apiURL";

export const accountContext = createContext();
//initial state
const INITIAL_STATE = {
  userAuth: JSON.parse(localStorage.getItem("userAuth")),
  account: null,
  accounts: [],
  loading: false,
  error: null,
};

//reducer
const accountReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    //details
    case ACCOUNT_DETAILS_SUCCESS:
      return {
        ...state,
        account: payload,
        error: null,
        loading: false,
      };
    case ACCOUNT_DETAILS_FAIL:
      return {
        ...state,
        account: null,
        error: payload,
        loading: false,
      };
    //create
    case ACCOUNT_CREATION_SUCCESS:
      return {
        ...state,
        account: payload,
        error: null,
        loading: false,
      };
    case ACCOUNT_CREATION_FAIL:
      return {
        ...state,
        account: null,
        error: payload,
        loading: false,
      };

    default:
      return state;
  }
};
//provider

const AccountContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(accountReducer, INITIAL_STATE);

  //get account details action
  const getAccountDetailsAction = async (id) => {
    const config = {
      headers: {
        Authorization: `Bearer ${state?.userAuth?.token}`,
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.get(`${API_URL_ACC}/${id}`, config);

      //dispatch action
      if (res?.data?.status === "success") {
        dispatch({
          type: ACCOUNT_DETAILS_SUCCESS,
          payload: res?.data?.data,
        });
      }
    } catch (error) {
      dispatch({
        type: ACCOUNT_DETAILS_FAIL,
        payload: error?.data?.response?.message,
      });
    }
  };

  //create account details action
  const createAccountAction = async (formData) => {
    const config = {
      headers: {
        Authorization: `Bearer ${state?.userAuth?.token}`,
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(`${API_URL_ACC}`, formData, config);

      //dispatch action
      if (res?.data?.status === "success") {
        dispatch({
          type: ACCOUNT_CREATION_SUCCESS,
          payload: res?.data?.data,
        });
      }
    } catch (error) {
      dispatch({
        type: ACCOUNT_CREATION_FAIL,
        payload: error?.data?.response?.message,
      });
    }
  };
  return (
    <accountContext.Provider
      value={{
        getAccountDetailsAction,
        account: state?.account,
        createAccountAction,
        error: state?.error,
      }}
    >
      {children}
    </accountContext.Provider>
  );
};

export default AccountContextProvider;
