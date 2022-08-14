import React, { useEffect } from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";
import { useTypedSelector, useTypedDispatch } from "../../hooks/redux";
import { ClientsList } from "./ClientsList";
import { ContactsFilter } from "./ContactsFilter";
import { setError } from "../../store/reducers/authManager";
import { ContactInputsField } from "./ContactInputsField";
import { ContactErrorField } from "./ContactErrorField";

export const AfterAuthHomePage = () => (
  <Box>
    <Paper elevation={3} sx={{ maxWidth: 1150, mt: 3, ml: "auto", mr: "auto" }}>
      <Typography variant="h4" textAlign={"center"} sx={{ p: 2 }}>
        Contact list
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

    <ContactErrorField />
  </Box>
);
