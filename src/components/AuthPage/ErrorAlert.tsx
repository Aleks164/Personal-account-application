import React from "react";
import { Alert } from "@mui/material";

export type ErrorAlertParamType = {
  error: string;
};

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
