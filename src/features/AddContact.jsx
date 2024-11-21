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
import { Label } from "@/components/ui/label";
import { CirclePlus } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import { v4 as uuidv4 } from "uuid";
import { addContact, setIsOpen } from "./contactSlice";

export function AddContact() {
  const dispatch = useDispatch();

  const [contactDetails, setContactDetails] = useState({
    id: uuidv4(),
    name: "",
    hyperLink: "",
    embedLink: "",
  });

  const addContactHandler = (e) => {
    e.preventDefault();

    if (contactDetails.name === "" || contactDetails.hyperLink === "") {
      toast.info("Fill all required fields!");
    } else {
      dispatch(addContact(contactDetails));

      toast.success(`New Contact Added!`);

      setContactDetails({
        id: uuidv4(),
        name: "",
        hyperLink: "",
        embedLink: "",
      });
    }
    setIsOpen(false);
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
        <div className="flex justify-center my-3">
          <Button className="flex items-center">
            <span>
              <CirclePlus className="mx-1" />
            </span>
            <span> Add Task</span>
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={addContactHandler} className="flex flex-col gap-4">
          <DialogHeader>
            <DialogTitle>Enter Details</DialogTitle>
          </DialogHeader>

          <div>
            <Label htmlFor="name">
              Name <span className="text-red-500">*</span>
            </Label>
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
            <Label htmlFor="hyperLink">
              Enter URL <span className="text-red-500">*</span>
            </Label>
            <Input
              id="hyperLink"
              placeholder="Enter URL"
              required
              type="url"
              name="hyperLink"
              value={contactDetails.hyperLink}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <Label htmlFor="embedLink">Enter Youtube Link</Label>
            <Input
              id="embedLink"
              placeholder="Enter Youtube Link"
              type="text"
              name="embedLink"
              value={contactDetails.embedLink}
              onChange={handleInputChange}
            />
          </div>

          <DialogFooter>
            <Button type="submit">Save</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
