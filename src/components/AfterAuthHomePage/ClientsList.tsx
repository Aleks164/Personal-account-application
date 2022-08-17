import { Grid, IconButton, Paper, Typography } from "@mui/material";
import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import { deleteContact } from "../../store/reducers/contactsListManager";
import { useTypedDispatch } from "../../hooks/redux";
import { deleteContactInFiltredList } from "../../store/reducers/filterManager";
import { ClientsListParamType } from "../../types/types";
import { ContactChangeForm } from "./ContactChangeForm";

export const ClientsList = ({ contacts }: ClientsListParamType) => {
  const dispatch = useTypedDispatch();

  return (
    <Paper elevation={3}>
      {contacts.length ? (
        <>
          {contacts
            .map((contact) => (
              <Paper sx={{ mt: 1, mb: 1, p: 2 }} key={contact.id} elevation={3}>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                >
                  <Grid item xs={9}>
                    <Typography>
                      Name: <b>{contact.name}</b>
                    </Typography>
                    <Typography>
                      Phone number: <b>{contact.phoneNumber}</b>
                    </Typography>
                    <Typography>
                      Email: <b>{contact.email}</b>
                    </Typography>
                  </Grid>
                  <Grid item xs={3} sx={{ textAlign: "end" }}>
                    <IconButton
                      color="error"
                      aria-label="delete"
                      onClick={() => {
                        dispatch(deleteContact(contact.id));
                        dispatch(deleteContactInFiltredList(contact.id));
                      }}
                    >
                      <CancelIcon fontSize="large" />
                    </IconButton>
                    <ContactChangeForm id={contact.id} />
                  </Grid>
                </Grid>
              </Paper>
            ))
            .reverse()}
        </>
      ) : (
        <Typography variant="h6" sx={{ p: 2, textAlign: "center" }}>
          ----Empty list----
        </Typography>
      )}
    </Paper>
  );
};
