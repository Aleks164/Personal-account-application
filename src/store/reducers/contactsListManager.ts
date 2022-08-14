import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ContactType {
  id: number;
  name: string;
  phoneNumber: string;
  email: string;
}

export interface ContactsListManagerStateType {
  contacts: ContactType[]
}

const initialState: ContactsListManagerStateType = {
  contacts: []
}

export const contactsListManager = createSlice({
  name: "contactsListManager",
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<ContactType>) => {
      state.contacts.push(action.payload);
    },
    deleteContact: (state, action: PayloadAction<ContactType["id"]>) => {
      state.contacts = state.contacts.filter((contact) => contact.id !== action.payload);
    },
  },
});

export const {
  addContact,
  deleteContact
} = contactsListManager.actions;

export default contactsListManager.reducer;
