import React, { useState } from "react";
import { Paper, Grid, TextField, Button } from "@mui/material";
import { useTypedDispatch } from "../../hooks/redux";
import { setError } from "../../store/reducers/authManager";
import { addContact } from "../../store/reducers/contactsListManager";

export const ContactInputsField = () => {
  const dispatch = useTypedDispatch();
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  function addContactHandler() {
    if (name && phoneNumber && email) {
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
    <Paper elevation={3} sx={{ m: 2, mt: 0, p: 2 }}>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          item
          xs={8}
        >
          <TextField
            sx={{ width: "100%" }}
            id="name"
            value={name}
            label="Name"
            variant="standard"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <TextField
            sx={{ width: "100%" }}
            id="phoneNumber"
            value={phoneNumber}
            label="Phone number"
            variant="standard"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <TextField
            sx={{ width: "100%" }}
            id="email"
            value={email}
            label="Email"
            variant="standard"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid item xs={3}>
          <Button
            sx={{ mr: 3, ml: 1, p: "6px 10px" }}
            variant="contained"
            onClick={addContactHandler}
          >
            Add contact
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};
