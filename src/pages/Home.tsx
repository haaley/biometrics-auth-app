import React, { useContext } from "react";
import LockedContent from "../components/LockedContent";
import { UnlockedContent } from "../components/UnlockedContent";
import AuthContext from "../context/auth.context";

const Home: React.FC = () => {
  const { user, handleSignOut, unlocked, validateBiometric } =
    useContext(AuthContext);

  return unlocked && user ? (
    <UnlockedContent user={user} handleSignOut={handleSignOut} />
  ) : (
    <LockedContent validateBiometric={validateBiometric}/>
  );
};

export default Home;
