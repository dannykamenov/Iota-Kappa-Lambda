import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Label } from "@/components/ui/label";
import * as React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { getEvent, editEvent } from "@/components/api/eventApi";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { storage } from "@/firebase";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { useNavigate } from "react-router-dom";
import uploadFiles from "@/components/middleware/uploadFiles";

const EditComponent = () => {
  const { id } = useParams<{ id: string | undefined }>();
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = React.useState<string | undefined>(
    ""
  );
  const [title, setTitle] = React.useState<string>("");
  const [summary, setSummary] = React.useState<string>("");
  const [description, setDescription] = React.useState<string>("");
  const [originalTitle, setOriginalTitle] = React.useState<string>("");
  const [location, setLocation] = React.useState<string>("");
  const { isAuthenticated } = useKindeAuth();
  const [files, setFiles] = React.useState<File[] | null>(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }

    const getEventById = async () => {
      const res = await getEvent(id);
      const event = res.data.event;
      setTitle(event.title);
      setSummary(event.summary);
      setDate(new Date(event.date));
      setSelectedTime(event.time);
      setDescription(event.description);
      setOriginalTitle(event.title);
      setLocation(event.location);
    };
    getEventById();
  }, []);

  const moveFile = async (oldFileRef, newFileRef) => {
    const blob = await oldFileRef
      .getDownloadURL()
      .then((url) => fetch(url).then((res) => res.blob()));
    await newFileRef.put(blob);
    await oldFileRef.delete();
  };

  const deleteFilesInFolder = async (folderPath, storageRef) => {
    const folderContents = await storageRef.child(folderPath).listAll();
    for (const item of folderContents.items) {
      await item.delete();
    }
  };

  const handleForm = async (e: any) => {
    e.preventDefault();
    let imageUrls = [];

    const formDataEvent = {
      title,
      summary,
      location,
      date: date?.toISOString().split("T")[0] || "", // Format date as YYYY-MM-DD
      time: selectedTime || "",
      description,
      mainImg: "",
      images: [] as string[],
    };

    const year = date?.getFullYear();

    if (title !== originalTitle) {
      const storageRef = storage.ref();
      const oldFolderPath = `${year}/${originalTitle}`;
      const newFolderPath = `${year}/${title}`;
      const oldLibraryFolderPath = `${oldFolderPath}/library`;
      const newLibraryFolderPath = `${newFolderPath}/library`;

      try {
        const mainFolderContents = await storageRef
          .child(oldFolderPath)
          .listAll();
        for (const item of mainFolderContents.items) {
          if (!item.fullPath.includes("/library/")) {
            await moveFile(
              item,
              storageRef.child(
                item.fullPath.replace(oldFolderPath, newFolderPath)
              )
            );
            formDataEvent.mainImg = await storageRef
              .child(item.fullPath.replace(oldFolderPath, newFolderPath))
              .getDownloadURL();
          }
        }

        const libraryFolderContents = await storageRef
          .child(oldLibraryFolderPath)
          .listAll();
        for (const item of libraryFolderContents.items) {
          await moveFile(
            item,
            storageRef.child(
              item.fullPath.replace(oldFolderPath, newFolderPath)
            )
          );
        }

        const newLibraryFolderContents = await storageRef
          .child(newLibraryFolderPath)
          .listAll();
        formDataEvent.images = await Promise.all(
          newLibraryFolderContents.items.map((item) => item.getDownloadURL())
        );

        await deleteFilesInFolder(oldFolderPath, storageRef);
        await deleteFilesInFolder(oldLibraryFolderPath, storageRef);

        console.log("Event folder updated successfully");
      } catch (error) {
        console.error("Error updating event folder:", error);
      }
    } else {
      const eventFolderRef = storage.ref(`${year}/${title}`);
      const libraryFolderRef = storage.ref(`${year}/${title}/library`);

      try {
        const mainImgRef = await eventFolderRef.listAll();
        const mainImg = mainImgRef.items[0];
        formDataEvent.mainImg = await mainImg.getDownloadURL();

        const libraryFiles = await libraryFolderRef.listAll();
        formDataEvent.images = await Promise.all(
          libraryFiles.items.map(async (fileRef) => {
            return await fileRef.getDownloadURL();
          })
        );
      } catch (error) {
        console.error("Error updating event folder:", error);
      }
    }

    if (files) {
      imageUrls = (await uploadFiles(files, title, year || 0)) || [];
      for(const image of imageUrls) {
        formDataEvent.images.push(image)
      }
    }

    try {
      await editEvent(formDataEvent, id);
      toast.success("Event updated successfully");
    } catch (error) {
      console.error("Error updating event:", error);
      toast.error("Failed to update the event. Please try again.");
    }
  };

  return (
    <>
      <h1 className="w-1/4 my-5 mx-auto p-10 text-4xl text-center font-bold small:w-full medium:w-3/4 xl:w-1/2 ">
        Edit Event
      </h1>
      <div className=" w-1/3 my-5 mx-auto small:w-full medium:w-3/4 xl:w-1/2">
        <form onSubmit={handleForm} className="rounded-md border">
          <div className="p-5 px-5 pb-2">
            <Label>Title</Label>
            <Input
              placeholder="Title"
              type="text"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              value={title}
            />
          </div>
          <div className="p-2 px-5">
            <Label>Summary</Label>
            <Input
              placeholder="Quick Summary"
              type="text"
              onChange={(e) => {
                setSummary(e.target.value);
              }}
              value={summary}
            />
          </div>
          <div className="p-2 px-5">
            <Label>Location</Label>
            <Input
              placeholder="Update Location"
              type="text"
              onChange={(e) => {
                setLocation(e.target.value);
              }}
              value={location}
            />
          </div>
          <div className="p-2 px-5 mx-auto block">
            <Label>Event Date</Label>
            <Popover>
              <PopoverTrigger asChild className="w-full">
                <Button
                  variant="outline"
                  className="pl-3 text-left font-normal"
                >
                  <CalendarIcon />
                  <span className="pl-2">Toggle calendar</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <Calendar mode="single" selected={date} onSelect={setDate} />
              </PopoverContent>
            </Popover>
          </div>
          <div className="p-2 px-5">
            <Label>Event Start Time</Label>
            <Select onValueChange={setSelectedTime} value={selectedTime}>
              <SelectTrigger className="">
                <SelectValue
                  placeholder="Pick a time"
                  className="time-select"
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1 AM">1:00 AM</SelectItem>
                <SelectItem value="2 AM">2:00 AM</SelectItem>
                <SelectItem value="3 AM">3:00 AM</SelectItem>
                <SelectItem value="4 AM">4:00 AM</SelectItem>
                <SelectItem value="5 AM">5:00 AM</SelectItem>
                <SelectItem value="6 AM">6:00 AM</SelectItem>
                <SelectItem value="7 AM">7:00 AM</SelectItem>
                <SelectItem value="8 AM">8:00 AM</SelectItem>
                <SelectItem value="9 AM">9:00 AM</SelectItem>
                <SelectItem value="10 AM">10:00 AM</SelectItem>
                <SelectItem value="11 AM">11:00 AM</SelectItem>
                <SelectItem value="12 PM">12:00 PM</SelectItem>
                <SelectItem value="1 PM">1:00 PM</SelectItem>
                <SelectItem value="2 PM">2:00 PM</SelectItem>
                <SelectItem value="3 PM">3:00 PM</SelectItem>
                <SelectItem value="4 PM">4:00 PM</SelectItem>
                <SelectItem value="5 PM">5:00 PM</SelectItem>
                <SelectItem value="6 PM">6:00 PM</SelectItem>
                <SelectItem value="7 PM">7:00 PM</SelectItem>
                <SelectItem value="8 PM">8:00 PM</SelectItem>
                <SelectItem value="9 PM">9:00 PM</SelectItem>
                <SelectItem value="10 PM">10:00 PM</SelectItem>
                <SelectItem value="11 PM">11:00 PM</SelectItem>
                <SelectItem value="12 AM">12:00 AM</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="p-2 px-5">
            <Label>Event Description</Label>
            <Textarea
              placeholder="Describe the event here..."
              maxLength={500}
              className=" resize-none "
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              value={description}
            />
          </div>
          <div className="p-5 px-5 pb-2 grid max-w-sm items-center gap-1.5 justify-center mx-auto">
          <Label htmlFor="imgLib" className="custom-file-upload">
            Upload Image Library
          </Label>
          <Input
            placeholder="Title"
            type="file"
            id="imgLib"
            className="file-upload-btn2 cursor-pointer"
            onChange={(e) => {
              if (e.target.files && e.target.files.length > 0) {
                setFiles(Array.from(e.target.files));
              } else {
                setFiles(null);
              }
            }}
            multiple
          />
        </div>
          <div className="p-2 px-5 text-center">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditComponent;
