import { Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { useTypedSelector } from "../../hooks/redux";
import { ContactType } from "../../store/reducers/contactsListManager";

export type ClientsListParamType = {
  contacts: ContactType[];
};

export const ClientsList = ({ contacts }: ClientsListParamType) => (
  <Stack>
    {contacts.map((contact) => (
      <Paper
        sx={{ width: "35vw", mt: 2, mb: 2 }}
        key={contact.id}
        elevation={3}
      >
        <Typography>
          Name: <b>{contact.name}</b>
        </Typography>
        <Typography>
          Phone number: <b>{contact.phoneNumber}</b>
        </Typography>
        <Typography>
          Email: <b>{contact.email}</b>
        </Typography>
      </Paper>
    ))}
  </Stack>
);
