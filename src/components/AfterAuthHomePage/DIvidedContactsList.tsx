import { Grid, Paper } from "@mui/material";
import React from "react";
import { useTypedSelector } from "../../hooks/redux";
import { ClientsList } from "./ClientsList";

export const DIvidedContactsList = () => {
  const { contacts } = useTypedSelector((state) => state.contactsListManager);
  const { filtredContacts } = useTypedSelector((state) => state.filterManager);

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-evenly"
      alignItems="flex-start"
      sx={{ mt: 1 }}
    >
      <Grid item xs={5}>
        <Paper elevation={3} sx={{ mb: 0, p: 1, textAlign: "center" }}>
          Full list
        </Paper>
        <ClientsList isFilterlist={false} contacts={contacts} />
      </Grid>
      <Grid item xs={5}>
        <Paper elevation={3} sx={{ mb: 0, p: 1, textAlign: "center" }}>
          Filtred list
        </Paper>
        <ClientsList isFilterlist={true} contacts={filtredContacts} />
      </Grid>
    </Grid>
  );
};
