import { TextField } from "@mui/material";
import React from "react";

export interface InputPasswordParamType {
  password: string;
  setPassword: (password: React.SetStateAction<string>) => void;
}

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
