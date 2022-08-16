import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useTypedDispatch, useTypedSelector } from "../../hooks/redux";
import { logInAction } from "../../store/actions/logInAction";
import { sigInAction } from "../../store/actions/sigInAction";
import { logInError, setIsLoading } from "../../store/reducers/authManager";
import { AuthButtonParamType } from "../../types/types";

export const AuthButton = ({
  processName,
  name,
  password,
}: AuthButtonParamType) => {
  const dispatch = useTypedDispatch();
  const { isLoading } = useTypedSelector((state) => state.authManager);
  const navigate = useNavigate();

  function handleClickAuthButton() {
    if (!name || !password) {
      dispatch(logInError("Login and password should not be empty"));
      return;
    }
    dispatch(setIsLoading());
    if (processName === "Log in")
      dispatch(logInAction(name, password, navigate));
    else dispatch(sigInAction(name, password, navigate));
  }

  return (
    <Button
      size="large"
      sx={{ mt: "5%" }}
      onClick={handleClickAuthButton}
      disabled={isLoading}
      variant="contained"
    >
      {processName}!
    </Button>
  );
};
