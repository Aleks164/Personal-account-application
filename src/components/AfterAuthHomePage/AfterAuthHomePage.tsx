import React from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";
import { ContactsFilter } from "./ContactsFilter";
import { ContactInputsField } from "./ContactInputsField";
import { ContactErrorField } from "./ContactErrorField";
import { DIvidedContactsList } from "./DIvidedContactsList";

export const AfterAuthHomePage = () => (
  <Box>
    <Paper elevation={3} sx={{ maxWidth: 1150, mt: 3, ml: "auto", mr: "auto" }}>
      <Typography variant="h4" textAlign={"center"} sx={{ p: 2 }}>
        Contacts list
      </Typography>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <ContactInputsField />
        <ContactsFilter />
      </Grid>
    </Paper>
<DIvidedContactsList/>
    <ContactErrorField/>
  </Box>
);
