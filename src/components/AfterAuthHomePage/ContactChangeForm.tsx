import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import CreateIcon from "@mui/icons-material/Create";
import { IconButton } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useTypedDispatch, useTypedSelector } from "../../hooks/redux";
import { ContactChangeFormParamType } from "../../types/types";
import {
  addContact,
  deleteContact,
} from "../../store/reducers/contactsListManager";
import {
  addContactInFiltredList,
  deleteContactInFiltredList,
} from "../../store/reducers/filterManager";
import { setError } from "../../store/reducers/authManager";

export const ContactChangeForm = ({ id }: ContactChangeFormParamType) => {
  const [open, setOpen] = useState(false);
  const dispatch = useTypedDispatch();
  const { contacts } = useTypedSelector((state) => state.contactsListManager);
  const changingContact = contacts.filter((contact) => contact.id === id);
  const { name, phoneNumber, email } = changingContact[0];
  const [changingName, setChangingName] = useState(name);
  const [changingPhoneNumber, setChangingPhoneNumber] = useState(phoneNumber);
  const [changingEmail, setChangingEmail] = useState(email);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const acceptChangeHandler = () => {
    if (!changingName || !changingPhoneNumber || !changingEmail) {
      dispatch(setError("Please fill in all the empty fields"));
    } else {
      setOpen(false);
      const changedContact = {
        id: changingContact[0].id,
        name: changingName,
        phoneNumber: changingPhoneNumber,
        email: changingEmail,
      };
      dispatch(deleteContact(id));
      dispatch(addContact(changedContact));
      dispatch(deleteContactInFiltredList(id));
      dispatch(addContactInFiltredList(changedContact));
    }
  };

  return (
    <div>
      <IconButton aria-label="Example" onClick={handleClickOpen}>
        <CreateIcon fontSize="large" color="success" />
      </IconButton>
      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <DialogTitle>Change contact?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Rewrite the field you want to change.
          </DialogContentText>
          <TextField
            fullWidth
            id="name"
            value={changingName}
            label="Name"
            variant="standard"
            onChange={(e) => {
              setChangingName(e.target.value);
            }}
          />
          <TextField
            fullWidth
            id="phoneNumber"
            value={changingPhoneNumber}
            label="Phone number"
            variant="standard"
            onChange={(e) => setChangingPhoneNumber(e.target.value)}
          />
          <TextField
            fullWidth
            id="email"
            value={changingEmail}
            label="Email"
            variant="standard"
            onChange={(e) => setChangingEmail(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={acceptChangeHandler}>Ok</Button>
          <Button
            onClick={() => {
              setOpen(false);
            }}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
