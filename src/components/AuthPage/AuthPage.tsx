import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Paper,
  Typography,
  Box,
  Grid,
  LinearProgress,
  Divider,
} from "@mui/material";
import { logInError } from "../../store/reducers/authManager";
import { useTypedDispatch, useTypedSelector } from "../../hooks/redux";
import { RoutesName } from "../../utils/routes";
import { ErrorAlert } from "./ErrorAlert";
import { HelpMessage } from "./HelpMessage";
import { AuthButton } from "./AuthButton";
import { InputPasswordField } from "./InputPasswordField";
import { InputNameField } from "./InputNameField";

export const AuthPage = () => {
  const location = useLocation();
  const processName =
    location.pathname === RoutesName.LOGIN_ROUTE ? "Log in" : "Sign up";
  const { error, isLoading } = useTypedSelector((state) => state.authManager);
  const dispatch = useTypedDispatch();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (error.length > 0) {
      setTimeout(() => {
        dispatch(logInError(""));
      }, 5000);
    }
  });

  return (
    <Box>
      <Paper
        sx={{
          maxWidth: 350,
          ml: "auto",
          mr: "auto",
          mt: "5%",
          p: "3%",
        }}
        elevation={3}
      >
        <Typography sx={{ textAlign: "center" }} variant="h5">
          {processName === "Log in" ? "Welcome back, Log in" : "Sign up"}
        </Typography>
        <Divider sx={{ mt: "3%" }} />
        <Box
          component="form"
          sx={{
            ml: "auto",
            mr: "auto",
            mt: "5%",
            width: "25ch",
          }}
          noValidate
        >
          <Grid
            container
            gap={1}
            alignItems="center"
            direction="column"
            justifyContent="space-evenly"
          >
            <InputNameField name={name} setName={setName} />
            <InputPasswordField password={password} setPassword={setPassword} />

            <AuthButton
              name={name}
              password={password}
              processName={processName}
            />
          </Grid>
        </Box>
        <Box sx={{height:35,mt:2,mb:2}}>
        {isLoading ? (
          <LinearProgress sx={{ mt: "5%" }} />
        ) : (
          <Divider sx={{ mt: "5%" }} />
        )}
        <HelpMessage processName={processName} />
        </Box>
      </Paper>
      {error.length > 0 && <ErrorAlert error={error} />}
    </Box>
  );
};
