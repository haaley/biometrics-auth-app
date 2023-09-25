import {
  FirebaseAuthentication,
  User,
} from "@capacitor-firebase/authentication";
import React, { createContext, useEffect, useState } from "react";
import { BiometricAuth } from "@aparajita/capacitor-biometric-auth";

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

interface Props {
  children: React.ReactNode;
}

interface AuthContextData {
  loggedIn: boolean;
  user: User | undefined;
  signInWithGoogle(): Promise<User | null | undefined>;
  handleSignOut(): Promise<void>;
  unlocked: boolean;
  validateBiometric: () => void;
}
export const AuthProvider = ({ children }: Props) => {
  const [loggedIn, setLoggedin] = useState(false);
  const [user, setUser] = useState<User | undefined>();
  const [unlocked, setUnlocked] = useState(false);

  const validateBiometric = async () => {
    const result = await BiometricAuth.checkBiometry();
    if (result.isAvailable) {
      try {
        await BiometricAuth.authenticate();
        setUnlocked(true);
      } catch (error) {
        setUnlocked(false);
        console.log(error);
      }
    }
  };

  const getCurrentUser = async () => {
    const result = await FirebaseAuthentication.getCurrentUser();
    if (result.user) {
      setUser(result.user);
      setLoggedin(true);
    } else {
      setLoggedin(false);
    }
  };
  useEffect(() => {
    getCurrentUser();
  }, [loggedIn]);

  const signInWithGoogle = async () => {
    try {
      const result = await FirebaseAuthentication.signInWithGoogle();
      if (result.user) {
        setLoggedin(true);
        setUser(user);
        setUnlocked(true);
      }
      return result.user;
    } catch (e) {
      console.log(e);
    }
  };

  const handleSignOut = async () => {
    await FirebaseAuthentication.signOut();
    setLoggedin(false);
    setUser(undefined);
    setUnlocked(false);
  };
  return (
    <AuthContext.Provider
      value={{
        loggedIn,
        user,
        signInWithGoogle,
        handleSignOut,
        unlocked,
        validateBiometric,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
