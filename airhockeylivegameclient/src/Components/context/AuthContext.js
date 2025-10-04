import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("authToken"));

  const [isAuthenticated, setIsAuthenticated] = useState(!!token);
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    if (storedToken) {
      setToken(storedToken);
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (username, password) => {
    let res;
    try {
      res = await axios.post("http://localhost:5000/api/auth/login", {
        username,
        password,
      });
      if (res.data.token) {
        const new_token = res.data.token;
        localStorage.setItem("authToken", new_token);
        setToken(new_token);
        setIsAuthenticated(true);
        navigate("/dashboard");
        return { success: true };
      } else {
        return { message: res.data.message, success: false };
      }
    } catch (err) {
      console.error("Login failed:", err.response?.data?.message);
      setIsAuthenticated(false);
      return {
        success: false,
        message: res.data.message,
      };
    }
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    setToken(null);
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ token, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
