import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { RoutesName } from "../../../utils/routes";
import { useTypedDispatch } from "../../../hooks/redux";
import { logOut } from "../../../store/reducers/authManager";

export const LogOutLink = () => {
  const dispatch = useTypedDispatch();
  const navigate = useNavigate();
  const to = RoutesName.HOME_PAGE_ROUTE;

  const signOutClick = () => {
    dispatch(logOut());
    navigate(to, { replace: true });
  };

  return (
    <Button
      onClick={signOutClick}
      variant="outlined"
      size="small"
      color="inherit"
    >
      Log Out
    </Button>
  );
};
