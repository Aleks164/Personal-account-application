import {
  Grid,
  Box,
  Paper,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  Divider,
  LinearProgress,
} from "@mui/material";
import React from "react";
import { useTypedDispatch, useTypedSelector } from "../../hooks/redux";
import {
 setChangeField,setFilterValue
} from "../../store/reducers/filterManager";
import { FilterType } from "../../types/types";

export const ContactsFilter = () => {
  const { field,filterValue } = useTypedSelector((state) => state.filterManager);
  const { isLoading } = useTypedSelector((state) => state.authManager);
  const dispatch = useTypedDispatch();

  return (
    <Grid>
      <Paper elevation={3} sx={{ mb: 2, p: 2, pb: 0 }}>
        <TextField
          id="filter"
          value={filterValue}
          label="Filter"
          variant="standard"
          onChange={((e)=>{dispatch(setFilterValue(e.target.value));})}
        />
        <FormControl sx={{ minWidth: 120, ml: 2 }}>
          <InputLabel id="filter-select">Filter by</InputLabel>
          <Select
            labelId="filter-select"
            id="filter-select"
            value={field}
            label="Filter by"
            onChange={(e) => {
              dispatch(setChangeField(e.target.value as FilterType["field"]));              
            }}
          >
            <MenuItem value={"name"}>Name</MenuItem>
            <MenuItem value={"phoneNumber"}>Phone number</MenuItem>
            <MenuItem value={"email"}>Email</MenuItem>
          </Select>
          <FormHelperText>Select the filter field</FormHelperText>
        </FormControl>
      </Paper>
      <Box sx={{ height: 25, mt: 3 }}>
        {isLoading ? <LinearProgress /> : <Divider />}
      </Box>
    </Grid>
  );
};
