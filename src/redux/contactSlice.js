import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";


export const contactAdaptor = createEntityAdapter();
/* const localContacts = JSON.parse(localStorage.getItem("storageContacts")) */
const initialState = contactAdaptor.getInitialState()

export const contactSelectors = contactAdaptor
    .getSelectors(state => state.contacts)

const contactSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        addContact: contactAdaptor.addOne,
        deleteContact: contactAdaptor.removeOne,
        removeAllContact: contactAdaptor.removeAll,
        updateContact: contactAdaptor.updateOne,
    },
});

export const { addContact, deleteContact, removeAllContact, updateContact } = contactSlice.actions;
export default contactSlice.reducer;