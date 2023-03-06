import { useState } from "react";

export const useToken = () => {
  const [token, setInternalToken] = useState(() => {
    return localStorage.getItem("token");
  });

  const setToken = (userToken) => {
    localStorage.setItem("token", userToken);
    setInternalToken(userToken.token);
  };

  return [token, setToken];
};
