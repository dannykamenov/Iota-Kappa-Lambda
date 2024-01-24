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

const DashboardComponent = () => {
  const [formData, setFormData] = useState({});
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [file, setFile] = React.useState<File | null>(null);
  const [files, setFiles] = React.useState<File[] | null>(null);

  const handleForm = (e: any) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <>
      <form onSubmit={handleForm} className="rounded-md border">
        <div className="p-5 px-5 pb-2">
          <Label>Title</Label>
          <Input placeholder="Title" type="text" />
        </div>
        <div className="p-2 px-5">
          <Label>Summary</Label>
          <Input placeholder="Quick Summary" type="text" />
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
          <Label>Event Description</Label>
          <Textarea
            placeholder="Describe the event here..."
            maxLength={500}
            className=" resize-none "
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
            className="file-upload-btn"
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
            className="file-upload-btn2"
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
            <Button type="submit">
                Submit
            </Button>
        </div>
      </form>
    </>
  );
};

export default DashboardComponent;
