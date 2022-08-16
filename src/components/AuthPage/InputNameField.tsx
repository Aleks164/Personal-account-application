import { TextField } from "@mui/material";
import React from "react";
import { InputNameParamType } from "../../types/types";

export const InputNameField = ({ name, setName }: InputNameParamType) => (
  <TextField
    onChange={(e) => {
      setName(e.target.value);
    }}
    name="User name"
    autoComplete="User name"
    id="username field"
    value={name}
    label="User name"
    variant="outlined"
  />
);
