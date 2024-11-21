import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { SquarePen } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import { updateContact } from "./contactSlice";
import { Label } from "@/components/ui/label";

export function UpdateContact({ contact }) {
  const dispatch = useDispatch();

  const [contactDetails, setContactDetails] = useState({
    id: contact?.id,
    name: contact?.name,
    hyperLink: contact?.hyperLink,
    embedLink: contact?.embedLink,
  });

  const updateContactHandler = (e) => {
    e.preventDefault();

    if (
      contact.name === contactDetails.name &&
      contact.hyperLink === contactDetails.hyperLink &&
      contact.embedLink === contactDetails.embedLink
    ) {
      toast.info("No changes were made!");
    } else {
      dispatch(updateContact(contactDetails));
      toast.success("Contact updated successfully!");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <SquarePen size={19} className="cursor-pointer text-gray-700" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={updateContactHandler} className="flex flex-col gap-4">
          <DialogHeader>
            <DialogTitle>Update Task</DialogTitle>
          </DialogHeader>

          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Name"
              required
              type="text"
              name="name"
              value={contactDetails.name}
              onChange={handleInputChange}
              maxLength="15"
            />
          </div>

          <div>
            <Label htmlFor="hyperLink">URL</Label>
            <Input
              id="hyperLink"
              placeholder="Task Link"
              required
              type="url"
              name="hyperLink"
              value={contactDetails.hyperLink}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <Label htmlFor="embedLink">Youtube Embed URL</Label>
            <Input
              id="embedLink"
              placeholder="Enter Youtube embed link"
              type="text"
              name="embedLink"
              value={contactDetails.embedLink}
              onChange={handleInputChange}
              maxLength="30"
            />
          </div>

          <DialogFooter>
            <Button type="submit">Update</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
