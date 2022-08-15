import { Paper, Typography } from "@mui/material";
import React, {useRef} from "react";
import { ContactType } from "../../store/reducers/contactsListManager";

export type ClientsListParamType = {
  contacts: ContactType[];
};

export const ClientsList = ({ contacts }: ClientsListParamType) => {
    
    function useDebouncer(func, delay) {
  const ref = useRef<NodeJS.Timeout>(0);

  return (...args) => {
    clearTimeout(ref.current);
    ref.current = setTimeout(() => func(...args), delay);
  };
  
  const debouncedValueLogging = useDebouncer(valueLogging, 300);
  
  
  
}
    
    return(
  <Paper        
        elevation={3}> 
    {contacts.length?<>{contacts.map((contact) => (
      <Paper
        sx={{  mt: 1, mb: 1,p:2 }}
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
    )).reverse()}</>:<Typography variant="h6" sx={{p:2, textAlign:"center"}}>----Empty list----</Typography>}
  </Paper>
);}
