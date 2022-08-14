import {
  Grid,
  Paper,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import React, { useState } from "react";

export const ContactsFilter = () => {
  const [selectedFilter, setSelectedFilter] = useState("name");
  const [filterValue, setFilterValue] = useState("");

  return (
    <Grid>
      <Paper elevation={3} sx={{ mt: 1, mb: 1, p: 2, pb: 0, maxWidth: 1150 }}>
        <TextField
          sx={{ width: "33vw" }}
          id="filter"
          value={filterValue}
          label="Filter"
          variant="standard"
          onChange={(e) => {
            setFilterValue(e.target.value);
          }}
        />
        <FormControl sx={{ minWidth: 120, ml: 3 }}>
          <InputLabel id="filter-select">Filter by</InputLabel>
          <Select
            labelId="filter-select"
            id="filter-select"
            value={selectedFilter}
            label="Filter by"
            onChange={(e) => {
              setSelectedFilter(e.target.value);
            }}
          >
            <MenuItem value={"name"}>Name</MenuItem>
            <MenuItem value={"phoneNumber"}>Phone number</MenuItem>
            <MenuItem value={"email"}>Email</MenuItem>
          </Select>
          <FormHelperText>Select the filter field</FormHelperText>
        </FormControl>
      </Paper>
    </Grid>
  );
};
