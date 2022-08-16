import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { HelpMessageParamType } from "../../types/types";
import { RoutesName } from "../../utils/routes";

export const HelpMessage = ({ processName }: HelpMessageParamType) => (
  <>
    {processName === "Log in" ? (
      <Typography sx={{ textAlign: "center", mt: "5%" }}>
        Do not have an account yet?{" "}
        <Link to={RoutesName.SIGNUP_ROUTE}>Sign up in here.</Link>
      </Typography>
    ) : (
      <Typography sx={{ textAlign: "center", mt: "5%" }}>
        You have an account already?{" "}
        <Link to={RoutesName.LOGIN_ROUTE}>Log in here.</Link>
      </Typography>
    )}
  </>
);
