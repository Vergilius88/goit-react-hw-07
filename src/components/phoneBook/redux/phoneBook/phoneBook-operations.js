import axios from "axios";
import {
  addContactError,
  addContactRequest,
  addContactSuccess,
  removeContactError,
  removeContactSuccess,
  removeContactRequest,
  fetchContactSuccess,
  fetchContactRequest,
  fetchContactError,
} from "./phoneBook-actions";

axios.defaults.baseURL = "http://localhost:3000";

const fetchContacts = () => async (dispatch) => {
  dispatch(fetchContactRequest());

  try {
    const { data } = await axios.get("/contacts");
    dispatch(fetchContactSuccess(data));
  } catch (error) {
    dispatch(fetchContactError(error));
  }
};

const addContact = (value) => async (dispatch) => {
  const contacts = { value, completed: false };

  dispatch(addContactRequest());
  try {
    const { data } = await axios.post("/contacts", contacts);
    dispatch(addContactSuccess(data));
  } catch (error) {
    dispatch(addContactError(error));
  }
};

const removeContact = (id) => async (dispatch) => {
  dispatch(removeContactRequest());

  try {
    const {} = await axios.delete(`/contacts/${id}`);
    dispatch(removeContactSuccess(id));
  } catch (error) {
    dispatch(removeContactError(error));
  }
};

export default { fetchContacts, addContact, removeContact };
