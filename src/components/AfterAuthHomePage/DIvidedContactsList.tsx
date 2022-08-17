import React, { useEffect } from "react";
import { Grid, Paper } from "@mui/material";
import { useTypedDispatch, useTypedSelector } from "../../hooks/redux";
import { setFiltredList} from "../../store/reducers/filterManager";
import { ClientsList } from "./ClientsList";
import { setIsLoading, setIsLoaded } from "../../store/reducers/authManager";

export const DIvidedContactsList = () => { 
   const { contacts } = useTypedSelector((state) => state.contactsListManager);
  const { field,filterValue,filtredContacts } = useTypedSelector((state) => state.filterManager);
  const dispatch = useTypedDispatch();
  
  useEffect(()=>{ 
          dispatch(setIsLoading()); 
    const timeoutDebauncerId = setTimeout(() => {
           dispatch(setIsLoaded());
         const newFiltredContacts = contacts.filter((contact) =>
        contact[field].toLowerCase().includes(filterValue.toLowerCase()));
      dispatch(setFiltredList(newFiltredContacts));
            
    }, 600);
    return ()=>{
         dispatch(setIsLoaded());
        clearTimeout(timeoutDebauncerId);        
    }
  },[filterValue,contacts,field]);

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
