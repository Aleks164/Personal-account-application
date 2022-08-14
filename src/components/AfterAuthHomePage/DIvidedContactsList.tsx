import { Grid } from "@mui/material";
import React from "react";
import { useTypedSelector } from "../../hooks/redux";

export const DIvidedContactsList = () => {
  const { contacts } = useTypedSelector((state) => state.contactsListManager);

  return <Grid></Grid>;
};
