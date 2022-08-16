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
import React, { useState, useRef } from "react";
import { useTypedDispatch, useTypedSelector } from "../../hooks/redux";
import { setIsLoading, setIsLoaded } from "../../store/reducers/authManager";
import {
  changeField,
  FilterType,
  setFiltredList,
} from "../../store/reducers/filterManager";

export const ContactsFilter = () => {
  const [filterValue, setFlterValue] = useState("");
  const { contacts } = useTypedSelector((state) => state.contactsListManager);
  const { field } = useTypedSelector((state) => state.filterManager);
  const { isLoading } = useTypedSelector((state) => state.authManager);
  const timeoutDebauncerId = useRef<NodeJS.Timeout>();
  const dispatch = useTypedDispatch();

  function handleChangeFilter(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFlterValue(e.target.value);
    clearTimeout(timeoutDebauncerId.current);
    dispatch(setIsLoading());
    timeoutDebauncerId.current = setTimeout(() => {
      const filtredContacts = contacts.filter((contact) =>
        contact[field].includes(e.target.value)
      );
      dispatch(setFiltredList(filtredContacts));
      dispatch(setIsLoaded());
    }, 600);
  }

  return (
    <Grid>
      <Paper elevation={3} sx={{ mb: 2, p: 2, pb: 0 }}>
        <TextField
          id="filter"
          value={filterValue}
          label="Filter"
          variant="standard"
          onChange={handleChangeFilter}
        />
        <FormControl sx={{ minWidth: 120, ml: 2 }}>
          <InputLabel id="filter-select">Filter by</InputLabel>
          <Select
            labelId="filter-select"
            id="filter-select"
            value={field}
            label="Filter by"
            onChange={(e) => {
              dispatch(changeField(e.target.value as FilterType["field"]));
              dispatch(setFiltredList([]));
              setFlterValue("");
            }}
          >
            <MenuItem value={"name"}>Name</MenuItem>
            <MenuItem value={"phoneNumber"}>Phone number</MenuItem>
            <MenuItem value={"email"}>Email</MenuItem>
          </Select>
          <FormHelperText>Select the filter field</FormHelperText>
        </FormControl>
      </Paper><Box sx={{height:25,mt:3}}>
        {isLoading ? (
        <LinearProgress  />
      ) : (
        <Divider  />
      )}
      </Box>      
    </Grid>
  );
};
