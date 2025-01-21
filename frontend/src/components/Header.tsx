import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Logo from "./shared/Logo.tsx";
import { useAuth } from "../context/AuthContext.tsx";
import NavigationLink from "./shared/NavigationLink.tsx";

const Header = () => {
  const auth = useAuth();
  return (
    <AppBar
      sx={{ bgcolor: "#2f3640", position: "static", boxShadow: "none" }}
    >
      <Toolbar sx={{ display: "flex" }}>
        <Logo />
        <div>
          {auth?.isLoggedIn ? (
            <>
              <NavigationLink
                bg="#66ff66"
                to="/chat"
                text="Chats"
                textColor="black"
              />
              <NavigationLink
                bg="#51538f"
                textColor="white"
                to="/"
                text="Sign Out"
                onClick={auth.signout}
              />
            </>
          ) : (
            <>
              <NavigationLink
                bg="#66ff66"
                to="/signin"
                text="Sign In"
                textColor="black"
              />
              <NavigationLink
                bg="#51538f"
                textColor="white"
                to="/signup"
                text="Sign Up"
              />
            </>
          )}
        </div>
       
      </Toolbar>
    </AppBar>
  );
};

export default Header;