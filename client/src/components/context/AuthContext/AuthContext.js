import { createContext, useReducer } from "react";
import axios from "axios";
import { LOGIN_FAILED, LOGIN_SUCCESS } from "./authActionTypes";
import { API_URL_USER } from "../../../utils/apiURL";

//auth context
export const authContext = createContext();

//initial state
const INITIAL_STATE = {
  userAuth: JSON.parse(localStorage.getItem("userAuth")),
  error: null,
  loading: false,
  profile: null,
};

//Auth reducer

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_SUCCESS:
      //Add user to localstorage
      localStorage.setItem("userAuth", JSON.stringify(payload));
      return {
        ...state,
        loading: false,
        error: null,
        userAuth: payload,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        error: payload,
        loading: false,
        userAuth: null,
      };
    default:
      break;
  }
};

//provider

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  console.log(state.userAuth.token);
  //login action
  const loginUserAction = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(`${API_URL_USER}/login`, formData, config);

      if (res?.data?.status === "success") {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data,
        });
      }
    } catch (error) {
      dispatch({
        type: LOGIN_FAILED,
        payload: error?.response?.data?.message,
      });
    }
  };

  //profile action

  const fetchProfileAction = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${state.userAuth.token}`,
      },
    };
    try {
      await axios.get(`${API_URL_USER}/profile`, config);
    } catch (error) {}
  };

  return (
    <authContext.Provider
      value={{
        loginUserAction,
        userAuth: state,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
