import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useTypedDispatch, useTypedSelector } from "../../hooks/redux";
import { logInAction } from "../../store/reducers/logInAction";
import { sigInAction } from "../../store/reducers/sigInAction";
import { authentication } from "../../store/reducers/authManager";
import { RoutesName } from "../../utils/routes";
import { HelpMessageParamType } from "./HelpMessage";

export interface AuthButtonParamType extends HelpMessageParamType {
  name: string;
  password: string;
}

export const AuthButton = ({
  processName,
  name,
  password,
}: AuthButtonParamType) => {
  const dispatch = useTypedDispatch();
  const { isLoading } = useTypedSelector((state) => state.authManager);
  const navigate = useNavigate();

  return (
    <Button
      size="large"
      sx={{ mt: "5%" }}
      onClick={() => {
        dispatch(authentication());
        if (processName === "Log in")
          dispatch(logInAction(name, password, navigate));
        else dispatch(sigInAction(name, password, navigate));
      }}
      disabled={isLoading}
      variant="contained"
    >
      {processName}!
    </Button>
  );
};
