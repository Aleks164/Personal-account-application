import React from "react";
import { Button, Grid, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { RoutesName } from "../utils/routes";

export const UnfoundPage = () => (
  <Paper
    elevation={3}
    sx={{ width: 600, height: 180, ml: "auto", mr: "auto", mt: "15%" }}
  >
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="h4" sx={{ m: 2 }}>
        Sorry, but this page doesn't exist
      </Typography>
      <Button
        variant="contained"
        size="small"
        sx={{ p: 2, m: 2 }}
        component={Link}
        to={RoutesName.LOGIN_ROUTE}
      >
        {"Back to log in page"}
      </Button>
    </Grid>
  </Paper>
);
