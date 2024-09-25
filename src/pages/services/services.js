import { createContext, useEffect, useState } from "react";

export const TokenContext = createContext();

export const TokenProvider = (props) => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    const fetchUser = async () => {
      const requestOptions = {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
      };
      const url = "http://10.170.129.197:8080/register";
      const response = await fetch(url, requestOptions);

      if (!response.ok) {
        console.log(response);
        setToken(null);
      }

      localStorage.setItem("token", token);
    };

    fetchUser();
  }, [token]);

  return (
    <TokenContext.Provider value={[token, setToken]}>
      {props.children}
    </TokenContext.Provider>
  );
};
