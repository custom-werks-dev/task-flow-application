import { AddContact } from "@/features/AddContact";
import { useDispatch, useSelector } from "react-redux";
import { ContactCard } from "./ContactCard";
import { Button } from "./ui/button";
import { useEffect } from "react";

export default function ContactList({ type }) {
  const dispatch = useDispatch();
  const contactListData = useSelector((state) => state.contact.contactList);

  const filteredContacts = contactListData.filter((contact) => contact);

  const urls = [...filteredContacts]?.reverse().map((data) => data.hyperLink);

  // Function to simulate clicking on a link

  const isOpen = useSelector((state) => state.contact.isOpen);

  console.log(isOpen);
  return (
    <div className="pl-[calc(100vw-100%)]">
      <div>
        <h2 className="text-[16px] md:text-[18px] font-semibold my-4]">
          Total {type} ({filteredContacts?.length})
        </h2>
        <div className="flex justify-center items-center gap-5 w-full">
          {" "}
          <AddContact />
        </div>
      </div>

      <div className="flex justify-center">
        {filteredContacts?.length >= 1 ? (
          <div className="flex flex-col mx-5">
            {filteredContacts?.reverse()?.map((contact) => (
              <ContactCard key={contact.id} contact={contact} />
            ))}
          </div>
        ) : (
          <p className="mt-5 bg-gray-100 p-3 rounded-md font-semibold">
            No Tasks!
          </p>
        )}
      </div>
    </div>
  );
}
