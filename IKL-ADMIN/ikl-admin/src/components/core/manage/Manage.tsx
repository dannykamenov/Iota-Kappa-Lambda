import React, { useEffect, useState } from "react";
import { getEvents, deleteEvent } from "@/components/api/eventApi";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Button, buttonVariants } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { storage } from "@/firebase";
import { deleteObject } from "firebase/storage";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ManageComponent = () => {
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    getEvents().then((res) => {
      setEvents(res.data.events);
    });
  }, []);

  const handleDelete = async (e: any) => {
    const id = e.target.id;
    const event = events.find((event) => event._id === id);
    if (!event) return;

    const eventYear = new Date(event.date).getFullYear();
    const eventTitle = event.title;
    const libraryFolderPath = `${eventYear}/${eventTitle}/library`; // Assuming 'library' is your subfolder name
    const eventFolderRef = storage.ref(`${eventYear}/${eventTitle}`);

    try {
      const libraryFolderRef = storage.ref(libraryFolderPath);
      const libraryFiles = await libraryFolderRef.listAll();
      await Promise.all(libraryFiles.items.map((fileRef) => fileRef.delete()));

      const eventFiles = await eventFolderRef.listAll();
      for (const fileRef of eventFiles.items) {
        if (fileRef.fullPath !== libraryFolderPath) {
          await fileRef.delete();
        }
      }

      await deleteEvent(id);
      const newEvents = events.filter((event) => event._id !== id);
      setEvents(newEvents);

      toast.success("Event deleted successfully."); 
    } catch (error) {
      console.error("Error deleting event and associated files:", error);
      toast.error("Failed to delete the event. Please try again.");
    }
  };

  return (
    <div className=" w-1/2 mx-auto">
      {events.map((event) => {
        return (
          <Card id={event._id} className="my-10" key={event._id}>
            <CardHeader>
              <CardTitle>
                <strong>Title: </strong>
                {event.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                <strong>Summary: </strong>
                {event.summary}
              </CardDescription>
            </CardContent>
            <CardContent>
              <CardDescription>
                <strong>Description: </strong>
                {event.description}
              </CardDescription>
            </CardContent>
            <CardContent className="mx-auto">
              <strong>Main Image</strong>
              <CardDescription className="mx-auto">
                <img
                  src={event.mainImg}
                  alt=""
                  className="mx-auto rounded-md border-5 border-black"
                />
              </CardDescription>
            </CardContent>
            <CardContent>
              <strong>Image Library</strong>
              <Carousel
                opts={{
                  align: "start",
                }}
                className="w-full max-w-sm mx-auto"
              >
                <CarouselContent>
                  {event.images.map((image: any, index) => (
                    <CarouselItem
                      className="medium:basis-1/2 large:basis-1/3"
                      key={index}
                    >
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-0">
                            <img
                              src={image}
                              className="w-full h-full rounded-md border-5 border-black  object-cover"
                            ></img>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </CardContent>
            <CardFooter>
              <span className="text-sm text-gray-400">
                <strong>Date & Time: </strong>
                {new Date(event.date).toLocaleDateString()} {event.time}
              </span>
            </CardFooter>
            <CardFooter className="justify-evenly">
              <Link
                className={`${buttonVariants({ variant: "outline" })} w-1/3`}
                to={`/dashboard/${event._id}`}
              >
                Edit
              </Link>
              <Button
                variant="outline"
                className="w-1/3"
                id={event._id}
                onClick={handleDelete}
              >
                Delete
              </Button>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
};

export default ManageComponent;
