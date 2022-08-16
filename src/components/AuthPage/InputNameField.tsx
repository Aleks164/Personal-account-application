import { TextField } from "@mui/material";
import React from "react";

export interface InputNameParamType {
  name: string;
  setName: (name: React.SetStateAction<string>) => void;
}

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
