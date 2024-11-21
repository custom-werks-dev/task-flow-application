import { createSlice } from "@reduxjs/toolkit";
import {
  addItemToLocalStorage,
  getDataFromLocalStorage,
  removeItemFromLocalStorage,
  updateInLocalStorage,
} from "@/utils/localStorage";

const localStorageData = getDataFromLocalStorage();

const initialState = {
  contactList: localStorageData.length > 0 ? localStorageData : [],
  isOpen: false,
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contactList.push(action.payload);
      addItemToLocalStorage(action.payload);
    },
    deleteContact: (state, action) => {
      state.contactList = state.contactList.filter(
        (contact) => contact.id !== action.payload
      );
      removeItemFromLocalStorage(action.payload);
    },
    updateContact: (state, action) => {
      state.contactList = state.contactList.map((contact) =>
        String(contact.id) === String(action.payload.id)
          ? action.payload
          : contact
      );
      updateInLocalStorage(action.payload);
    },
    setIsOpen: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

export const { addContact, deleteContact, updateContact, setIsOpen } =
  contactSlice.actions;
export default contactSlice.reducer;
