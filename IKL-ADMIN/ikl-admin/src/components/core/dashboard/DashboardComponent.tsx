import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { FormDescription } from "@/components/ui/form";
import * as React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import "./Dashboard.css";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { storage } from "@/firebase";
import uploadFile from "@/components/middleware/uploadFile";
import uploadFiles from "@/components/middleware/uploadFiles";

const DashboardComponent = () => {
  const [formData, setFormData] = React.useState({});
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [file, setFile] = React.useState<File | null>(null);
  const [files, setFiles] = React.useState<File[] | null>(null);
  const [selectedTime, setSelectedTime] = React.useState<string | null>(null);
  const [title, setTitle] = React.useState<string>("");
  const [summary, setSummary] = React.useState<string>("");
  const [description, setDescription] = React.useState<string>("");

  const handleForm = (e: any) => {
    e.preventDefault();
/*     const formDataEvent = new FormData();
    formDataEvent.append("title", title);
    formDataEvent.append("summary", summary);
    formDataEvent.append("eventDate", date?.toString() || "");
    formDataEvent.append("startTime", selectedTime || "");
    formDataEvent.append("description", description);
    const year = date?.getFullYear();
    if (file) {
      uploadFile(file, title, year || 0).then((url) => {
        formDataEvent.append("mainImg", url);
      });
    }
    if (files) {
      uploadFiles(files, title, year || 0).then((urls) => {
        if (urls) {
          for (const url of urls) {
            formDataEvent.append("imgLib", url);
          }
        }
      });
    }
    setFormData(formDataEvent); */
    //without using form data
    const formDataEvent = {
      title,
      summary,
      date: date?.toString() || "",
      time: selectedTime || "",
      description,
      mainImg: "",
      images: [] as string[],
    };
    const year = date?.getFullYear();
    if (file) {
      uploadFile(file, title, year || 0).then((url) => {
        formDataEvent.mainImg = url;
      });
    }
    if (files) {
      uploadFiles(files, title, year || 0).then((urls) => {
        if (urls) {
          for(const url of urls){
            formDataEvent.images.push(url);
          }
        }
      });
    }
    setFormData(formDataEvent);
    

  };

  return (
    <>
      <form onSubmit={handleForm} className="rounded-md border">
        <div className="p-5 px-5 pb-2">
          <Label>Title</Label>
          <Input
            placeholder="Title"
            type="text"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
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
          />
        </div>
        <div className="p-2 px-5 mx-auto block">
          <Label>Event Date</Label>
          <Popover>
            <PopoverTrigger asChild className="w-full">
              <Button variant="outline" className="pl-3 text-left font-normal">
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
          <Select onValueChange={setSelectedTime}>
            <SelectTrigger className="">
              <SelectValue placeholder="Pick a time" className="time-select" />
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
          />
        </div>
        <div className="p-5 px-5 pb-2 grid max-w-sm items-center gap-1.5 justify-center mx-auto">
          <Label htmlFor="mainImg" className="custom-file-upload">
            Upload Main Image
          </Label>
          <Input
            placeholder="Title"
            type="file"
            id="mainImg"
            className="file-upload-btn cursor-pointer"
            onChange={(e) => {
              if (e.target.files && e.target.files.length > 0) {
                setFile(e.target.files[0]);
              } else {
                setFile(null);
              }
            }}
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
    </>
  );
};

export default DashboardComponent;
