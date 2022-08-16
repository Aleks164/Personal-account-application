import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export type AuthLinkParamType = { to: string; type: string };

export const AuthLink = ({ to, type }: AuthLinkParamType) => (
  <Button
    variant="outlined"
    size="small"
    color="inherit"
    sx={{ m: 1, textAlign:"center" }}
    component={Link}
    to={to}
  >
    {type}
  </Button>
);
