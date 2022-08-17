import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Alert, Box, Snackbar, Typography } from "@mui/material";
import { Header } from "./Header";
import { RoutesName } from "../../utils/routes";
import { useTypedSelector } from "../../hooks/redux";

export type IsAuthType = {
  isAuth: boolean;
};

export const Layout = () => {
  const isLoginPage = useLocation().pathname === RoutesName.LOGIN_ROUTE;
  const isSignUpPage = useLocation().pathname === RoutesName.SIGNUP_ROUTE;
  const { isAuth, currentUser } = useTypedSelector(
    (state) => state.authManager
  );
  const [open, setOpen] = useState(true);

  return (
    <Box sx={{ position: "relative" }}>
      <Header
        isAuth={isAuth}
        isSignUpPage={isSignUpPage}
        isLoginPage={isLoginPage}
      />
      {isAuth && (
        <Typography
          sx={{
            position: "absolute",
            top: "65px",
            right: 0,
            fontFamily: "cursive",
            color: "#edefff",
            textShadow: "#3d3d3e 3px 0px 1px",
            fontWeight: "900",
          }}
          variant="h5"
        >
          {currentUser}
        </Typography>
      )}
      <Outlet />
      {isAuth && (
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => {
            setOpen(false);
          }}
        >
          <Alert severity="success" sx={{ width: "100%" }}>
            {`Welcome ${currentUser}`}
          </Alert>
        </Snackbar>
      )}
    </Box>
  );
};
