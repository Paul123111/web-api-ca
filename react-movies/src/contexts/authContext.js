import React, { useState, createContext, Navigate } from "react";
import { login, signup } from "../api/tmdb-api";
import { useNavigate } from "react-router-dom";
import { newUserFavorites } from "../api/tmdb-api";

export const AuthContext2 = createContext(null);

const AuthContext2Provider = (props) => {
  const existingToken = localStorage.getItem("token");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authToken, setAuthToken] = useState(existingToken);
  const [userName, setUserName] = useState("");

  //Function to put JWT token in local storage.
  const setToken = (data) => {
    localStorage.setItem("token", data);
    setAuthToken(data);
  }

  const authenticate = async (username, password) => {
    const result = await login(username, password);
    if (result.token) {
      setToken(result.token)
      setIsAuthenticated(true);
      setUserName(username);
    }
  };

  const register = async (username, password) => {
    const result = await signup(username, password);
    console.log(result.code);
    return (result.code == 201) ? true : false;
  };

  const navigate = useNavigate();
  const signout = () => {
    setTimeout(() => {setIsAuthenticated(false); navigate("/login")}, 100);
  }

  return (
    <AuthContext2.Provider
      value={{
        isAuthenticated,
        authenticate,
        register,
        signout,
        userName
      }}
    >
      {props.children}
    </AuthContext2.Provider>
  );
};

export default AuthContext2Provider;
