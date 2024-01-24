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

const DashboardComponent = () => {
  const [formData, setFormData] = useState({});
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  const handleForm = (e: any) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  React.useEffect(() => {
    console.log(date);
  }, [date]);

  return (
    <>
      <form onSubmit={handleForm} className="rounded-md border">
        <div className="p-5">
          <Label>Title</Label>
          <Input placeholder="Title" type="text" />
        </div>
        <div className="p-5 mx-auto block">
          <Label>Event Date</Label>
          <Popover>
            <PopoverTrigger>
              <Button
                variant="outline"
                className="w-[240px] pl-3 text-left font-normal"
              >
                <CalendarIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <span className="sr-only">Toggle calendar</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <Calendar mode="single" selected={date} onSelect={setDate} />
            </PopoverContent>
          </Popover>
        </div>
      </form>
    </>
  );
};

export default DashboardComponent;
