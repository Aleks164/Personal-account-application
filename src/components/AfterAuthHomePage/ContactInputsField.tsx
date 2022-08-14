import { Paper, Grid, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { useTypedDispatch } from "../../hooks/redux";
import { setError } from "../../store/reducers/authManager";
import { addContact } from "../../store/reducers/contactsListManager";

export const ContactInputsField = () => {
  const dispatch = useTypedDispatch();
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  function addContactHandler() {
    if (name.length && phoneNumber.length && email.length) {
      const newContact = {
        id: Date.now(),
        name,
        phoneNumber,
        email,
      };
      dispatch(addContact(newContact));
      setName("");
      setPhoneNumber("");
      setEmail("");
    } else dispatch(setError("Please fill in all the empty fields"));
  }

  return (
    <Paper elevation={3} sx={{ m: 2, p: 2, maxWidth: 1150 }}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
      >
        <TextField
          sx={{ width: "35vw" }}
          id="name"
          value={name}
          label="Name"
          variant="standard"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <TextField
          sx={{ width: "35vw" }}
          id="phoneNumber"
          value={phoneNumber}
          label="Phone number"
          variant="standard"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <TextField
          sx={{ width: "35vw" }}
          id="email"
          value={email}
          label="Email"
          variant="standard"
          onChange={(e) => setEmail(e.target.value)}
        />
      </Grid>
      <Grid>
        <Button variant="contained" onClick={addContactHandler}>
          Add contact
        </Button>
      </Grid>
    </Paper>
  );
};
