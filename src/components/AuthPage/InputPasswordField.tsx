import React from "react";
import { TextField } from "@mui/material";
import { InputPasswordParamType } from "../../types/types";

export const InputPasswordField = ({
  password,
  setPassword,
}: InputPasswordParamType) => (
  <TextField
    onChange={(e) => {
      setPassword(e.target.value);
    }}
    type="password"
    name="userPassword"
    autoComplete="current-password"
    id="password field"
    value={password}
    label="Password"
    variant="outlined"
  />
);
