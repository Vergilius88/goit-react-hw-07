import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  fetchContactSuccess,
  fetchContactRequest,
  fetchContactError,
  addContactError,
  addContactRequest,
  addContactSuccess,
  removeContactSuccess,
  removeContactRequest,
  removeContactError,
  findContact,
} from "./phoneBook-actions";

const contacts = createReducer([], {
  [fetchContactSuccess]: (_state, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [removeContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer("", {
  [findContact]: (_state, { payload }) => payload,
});

const loading = createReducer(false, {
  [fetchContactRequest]: () => true,
  [fetchContactSuccess]: () => false,
  [fetchContactError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [removeContactRequest]: () => true,
  [removeContactSuccess]: () => false,
  [removeContactError]: () => false,
});
export default combineReducers({
  contacts,
  filter,
  loading,
});
