import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  FunctionComponent,
} from "react";
import Cookies from "js-cookie";
import Router, { useRouter } from "next/router";

//api here is an axios instance which has the baseURL set according to the env.
import { axios } from "../lib/fetcher";
import { IUser } from "../lib/api.interface";

type authContextType = {
  isAuthenticated: boolean;
  user: IUser | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<authContextType>({
  isAuthenticated: false,
  user: null,
  loading: false,
  login: async () => {},
  logout: () => {},
});

export const AuthProvider: FunctionComponent = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUserFromCookies() {
      const token = Cookies.get("token");
      if (token) {
        console.log("Got a token in the cookies, let's see if it is valid");
        axios.defaults.headers.Authorization = `Bearer ${token}`;
        const { data: user } = await axios.get("users/me");
        if (user) setUser(user);
      }
      setLoading(false);
    }
    loadUserFromCookies();
  }, []);

  const login = async (email: string, password: string) => {
    const { data: userLogin } = await axios.post<IUser>("auth/login", {
      email,
      password,
    });
    if (userLogin) {
      console.log("Got token");
      Cookies.set("token", userLogin.token);
      axios.defaults.headers.Authorization = `Bearer ${userLogin.token}`;
      const { data: user } = await axios.get("users/me");
      setUser(user);
      console.log("Got user", user);
      window.location.pathname = "/";
    }
  };

  const logout = () => {
    Cookies.remove("token");
    setUser(null);
    delete axios.defaults.headers.Authorization;
    window.location.pathname = "/login";
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated: !!user, user, login, loading, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
