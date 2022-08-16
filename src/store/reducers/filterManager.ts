import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ContactType, FilterType } from "../../types/types";

const initialState: FilterType = {
    field: "name",
    filtredContacts: [],
}

export const filterManager = createSlice({
    name: "filterManager",
    initialState,
    reducers: {
        changeField: (state, action: PayloadAction<FilterType["field"]>) => {
            state.field = action.payload;
        },
        setFiltredList: (state, action: PayloadAction<FilterType["filtredContacts"]>) => {
            state.filtredContacts = action.payload;
        },
        deleteContactInFiltredList: (state, action: PayloadAction<ContactType["id"]>) => {
            state.filtredContacts = state.filtredContacts.filter((filtredContact) => filtredContact.id !== action.payload);
        },
        addContactInFiltredList: (state, action: PayloadAction<ContactType>) => {
            state.filtredContacts.push(action.payload);
        },
    },
});

export const {
    changeField,
    setFiltredList,
    deleteContactInFiltredList,
    addContactInFiltredList
} = filterManager.actions;

export default filterManager.reducer;
