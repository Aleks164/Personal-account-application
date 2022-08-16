import React from "react";
import { Alert } from "@mui/material";
import { ErrorAlertParamType } from "../../types/types";

export const ErrorAlert = ({ error }: ErrorAlertParamType) => (
  <Alert
    sx={{
      maxWidth: 350,
      ml: "auto",
      mr: "auto",
      p: 2,
      fontSize: "16px",
    }}
    severity="error"
  >
    {error}
  </Alert>
);
