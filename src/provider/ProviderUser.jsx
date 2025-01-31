import React, {
  createContext,
  useContext,
  useLayoutEffect,
  useState,
} from "react";
import { handleTryCatch, urlApi } from "../utils/urlApi";
import { logout } from "../utils/athu";
const ProviderUserState = createContext(undefined);
export default function ProviderUser({ children }) {
  const [user, setUser] = useState({});
  const getUser = () => {
    handleTryCatch(async () => {
      const response = await fetch(urlApi.user.getUser, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await response.json();
      console.log(data);
      if (response.status > 300 && !response.ok) {
        
        logout();
      }
      if (response.status < 300 && response.ok) {
        setUser(data);
      }
    });
  };

  useLayoutEffect(() => {
    if (localStorage.getItem("token")) {
      getUser();
    }
  }, []);

  return (
    <ProviderUserState.Provider value={{ user, setUser }}>
      {children}
    </ProviderUserState.Provider>
  );
}

export const useUser = () => useContext(ProviderUserState);
