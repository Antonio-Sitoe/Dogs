import React from "react";
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from "../services/Api";
import { IData } from "../Types/interfaces";
import { useNavigate } from "react-router-dom";

interface IUserContext {
  data: IData | null;
  userLogin: (username: string, password: string) => void;
  error: string | null;
  loading: boolean;
  login: boolean;
  userLogout: () => void;
}
interface IUserStorage {
  children: JSX.Element;
}

export const UserContext = React.createContext({} as IUserContext);

export function UserStorage({ children }: IUserStorage) {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const navigate = useNavigate();
  const tokenName = "token";

  const userLogout = React.useCallback(async () => {
    setData(null);
    setLogin(false);
    setLoading(false);
    setError(null);
    window.localStorage.removeItem(tokenName);
    navigate("/login");
  }, [navigate]);

  const getUser = async (token: string) => {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true);
  };

  const userLogin = async (username: string, password: string) => {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = TOKEN_POST({ username, password });
      const tokenResponse = await fetch(url, options);
      if (!tokenResponse.ok) throw new Error(`Usuario invalido.`);
      const { token } = await tokenResponse.json();
      window.localStorage.setItem(tokenName, token);
      await getUser(token);
      navigate("/conta");
    } catch (err) {
      setError(`${err}`);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    const token = window.localStorage.getItem(tokenName);
    if (token) getUser(token);
  }, []);

  React.useEffect(() => {
    async function AutoLogin() {
      const token = window.localStorage.getItem(tokenName);
      if (token) {
        try {
          setError(null);
          setLoading(true);
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);
          if (!response.ok) throw new Error("Token invalido");
          await getUser(token);
        } catch (err) {
          userLogout();
        } finally {
          setLoading(false);
        }
      } else {
        setLogin(false);
      }
    }
    AutoLogin();
  }, [userLogout]);

  const value = { data, userLogin, login, error, loading, userLogout };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserContext;
