import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ContactType } from "./contactsListManager";


export interface FilterType {
    field: "name" | "phoneNumber" | "email";
    filtredContacts: ContactType[];
}

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
    },
});

export const {
    changeField,
    setFiltredList
} = filterManager.actions;

export default filterManager.reducer;
