import { getContactsApi, createContactsApi, deleteContactsApi } from "service/fetchContacts";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { filterContacts } from "./actions";


export const getContactsThunk = createAsyncThunk('contacts/getContacts', () => {
    return getContactsApi()
})

export const createContactsThunk = createAsyncThunk('contacts/createContacts', (conatct) => {
    return createContactsApi(conatct)
})

export const deleteContactsThunk = createAsyncThunk('contacts/deleteContacts', (id) => {
    return deleteContactsApi(id)
})


export const filterContactsThunk = createAsyncThunk('contacts/filterContacts', (e) => {
    return filterContacts(e)


})

