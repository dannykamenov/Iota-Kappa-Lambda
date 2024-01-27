import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";
import { Popover, PopoverTrigger, PopoverContent } from "@radix-ui/react-popover";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@radix-ui/react-select";
import { setDate } from "date-fns";
import { CalendarIcon, Calendar } from "lucide-react";
import React from "react";
import { useState, useEffect } from "react";
import { Button } from "react-day-picker";
import { useParams } from "react-router-dom";

const EditComponent = () => {
  const { id } = useParams(); // get id from url
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [file, setFile] = React.useState<File | null>(null);
  const [files, setFiles] = React.useState<File[] | null>(null);
  const [selectedTime, setSelectedTime] = React.useState<string | null>(null);
  const [title, setTitle] = React.useState<string>("");
  const [summary, setSummary] = React.useState<string>("");
  const [description, setDescription] = React.useState<string>("");
  const [event, setEvent] = useState<Event | null>(null); // initialize event state

  useEffect(() => {
    // get event from id
    const fetchEvent = async () => {
      try {
        const response = await fetch(`/api/events/${id}`);
        const data = await response.json();
        setEvent(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEvent();
  }, [id]);

  const handleSubmit = async (formData: FormData) => {
    try {
      const response = await fetch(`/api/events/${id}`, {
        method: "PUT",
        body: formData,
      });
      const data = await response.json();
      console.log(data); // handle response data
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1 className="w-1/4 my-5 mx-auto p-10 text-4xl text-center font-bold small:w-full medium:w-3/4 xl:w-1/2 ">
        Add Event
      </h1>
      <div className=" w-1/3 my-5 mx-auto small:w-full medium:w-3/4 xl:w-1/2">
        <form onSubmit={handleSubmit} className="rounded-md border">
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
            <Select onValueChange={setSelectedTime}>
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
      </div>
    </>
  );
};

export default EditComponent;
