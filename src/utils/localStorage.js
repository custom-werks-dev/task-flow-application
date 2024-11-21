export const addItemToLocalStorage = (item) => {
  let contactList = JSON.parse(localStorage.getItem("contactList")) || [];
  contactList.push(item);
  localStorage.setItem("contactList", JSON.stringify(contactList));
};

export const removeItemFromLocalStorage = (id) => {
  let contactList = JSON.parse(localStorage.getItem("contactList")) || [];
  contactList = contactList.filter((contact) => contact.id !== id);
  localStorage.setItem("contactList", JSON.stringify(contactList));
};

export const updateInLocalStorage = (item) => {
  let contactList = JSON.parse(localStorage.getItem("contactList")) || [];
  contactList = contactList.map((contact) =>
    contact.id === item.id ? item : contact
  );
  localStorage.setItem("contactList", JSON.stringify(contactList));
};

export const getDataFromLocalStorage = () => {
  let contactList = JSON.parse(localStorage.getItem("contactList"));

  return contactList;
};
