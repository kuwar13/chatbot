import {
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useState,
  } from "react";
import { checkAuthStatus, signInUser, signOutUser, signupUser } from "../helpers/api-cooomunicator";


  type User = {
    name: string;
    email: string;
  };

  type UserAuth = {
    isLoggedIn: boolean;
    user: User | null;
    signin: (email: string, password: string) => Promise<void>;
    signup: (name: string, email: string, password: string) => Promise<void>;
    signout: () => Promise<void>;
  };

  const AuthContext = createContext<UserAuth | null>(null);

  export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    useEffect(() => {

        // fetch if the user's cookies are valid then skip login

        async function checkStatus() {
          const data = await checkAuthStatus();
          if (data) {
            setUser({ email: data.email, name: data.name });
            setIsLoggedIn(true);
          }
        }
        checkStatus();
    
      }, []);
      const signin = async (email: string, password: string) => {
        const data = await signInUser(email, password);
    if (data) {
      setUser({ email: data.email, name: data.name });
      setIsLoggedIn(true);
    }
      };
      const signup = async (name: string, email: string, password: string) => {
      const data = await signupUser(name, email, password);
    //   if (data) {
    //   setUser({ email: data.email, name: data.name });
    //   setIsLoggedIn(false);//change
    // }
      if (data) {
      setUser(null);
      setIsLoggedIn(false);
    }

      };
      const signout = async () => {
      await signOutUser();
      setIsLoggedIn(false);
      setUser(null);
    window.location.reload();
      };
    
      const value = {
        user,
        isLoggedIn,
        signin,
        signout,
        signup,
      };
      return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
    };
    
    export const useAuth = () => useContext(AuthContext);