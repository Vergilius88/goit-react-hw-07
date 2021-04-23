import { createAction } from "@reduxjs/toolkit";

export const fetchContactRequest = createAction(
  "phoneBook/fetchContactsRequest"
);
export const fetchContactSuccess = createAction(
  "phoneBook/fetchContactSuccess"
);
export const fetchContactError = createAction("phoneBook/fetchContactError");

export const addContactRequest = createAction("phoneBook/addContactsRequest");
export const addContactSuccess = createAction("phoneBook/addContactSuccess");
export const addContactError = createAction("phoneBook/addContactError");

export const removeContactRequest = createAction(
  "phoneBook/removeContactsRequest"
);
export const removeContactSuccess = createAction(
  "phoneBook/removeContactSuccess"
);
export const removeContactError = createAction("phoneBook/removeContactError");

export const findContact = createAction("phoneBook/findContact");
