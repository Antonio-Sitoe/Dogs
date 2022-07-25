import React from "react";
import { TOKEN_POST, USER_GET } from "../services/Api";
import { IData } from "../Types/interfaces";

interface IUserContext {
  data: IData | null;
  userLogin: (username: string, password: string) => void;
}
interface IUserStorage {
  children: JSX.Element;
}

export const UserContext = React.createContext({} as IUserContext);

export function UserStorage({ children }: IUserStorage) {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const getUser = async (token: string) => {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true);
    console.log(json)
  };

  const userLogin = async (username: string, password: string) => {
    const { url, options } = TOKEN_POST({ username, password });
    const tokenResponse = await fetch(url, options);
    const { token } = await tokenResponse.json();
    window.localStorage.setItem("token", token);
    getUser(token);
  };

  React.useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) getUser(token);
  }, []);

  const value = { data, userLogin };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserContext;
