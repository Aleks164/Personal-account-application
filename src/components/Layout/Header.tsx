import React from "react";
import {
  AppBar,
  IconButton,
  Link,
  Toolbar,
  Typography,
  Grid,
} from "@mui/material";
import { Home, Info } from "@mui/icons-material";
import { RoutesName } from "../../utils/routes";
import { LogOutLink } from "./LogOutLink/LogOutLink";
import { AuthLink } from "./AuthLink/AuthLink";

export type HeaderParamType = { [headerParam: string]: boolean };

export const Header = ({
  isAuth,
  isSignUpPage,
  isLoginPage,
}: HeaderParamType) => (
  <Grid
    sx={{ flexGrow: 1 }}
    container
    direction="row"
    justifyContent="center"
    alignItems="center"
  >
    <AppBar position="sticky">
      <Toolbar>
        <Grid item xs={10}>
          <Typography
            variant="h4"
            sx={{
              ml: 2,
              fontFamily: "cursive",
              color: "#edefff",
              textShadow: "#3d3d3e 3px 0px 1px",
              fontWeight: "900",
            }}
          >
            {"Personal account application"}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
          >
            {!isAuth ? (
              <>
                {!isLoginPage && (
                  <AuthLink to={RoutesName.LOGIN_ROUTE} type="Log In" />
                )}
                {!isSignUpPage && (
                  <AuthLink to={RoutesName.SIGNUP_ROUTE} type="Sign Up" />
                )}
              </>
            ) : (
              <LogOutLink />
            )}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  </Grid>
);
