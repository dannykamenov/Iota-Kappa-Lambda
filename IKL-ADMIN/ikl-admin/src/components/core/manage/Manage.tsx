import React, { useEffect, useState } from "react";
import { getEvents } from "@/components/api/eventApi";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ManageComponent = () => {
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    getEvents().then((res) => {
      setEvents(res.data.events);
      console.log(events);
    });
  }, []);

  return (
    <div className=" w-1/2 mx-auto">
      {events.map((event) => {
        return (
          <HoverCard>
            <HoverCardTrigger>
              <Card id={event._id} className="my-10">
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{event.summary}</CardDescription>
                </CardContent>
                <CardContent>
                  <CardDescription>{event.description}</CardDescription>
                </CardContent>
                <CardContent className="mx-auto">
                <strong>Main Image</strong>
                  <CardDescription className="mx-auto">
                    <img src={event.mainImg} alt="" className="mx-auto rounded-md border-5 border-black"/>
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
                      {event.images.map((image:any) => (
                        <CarouselItem
                          className="medium:basis-1/2 large:basis-1/3"
                        >
                          <div className="p-1">
                            <Card>
                              <CardContent className="flex aspect-square items-center justify-center p-0">
                                <img src={image} className="w-full h-full rounded-md border-5 border-black  object-cover">
                                </img>
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
                    {new Date(event.date).toLocaleDateString()} {event.time}
                  </span>
                </CardFooter>
              </Card>
            </HoverCardTrigger>
            <HoverCardContent>
              <Card>
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{event.summary}</CardDescription>
                </CardContent>
                <CardFooter>
                  <span className="text-sm text-gray-400">
                    {event.date} {event.time}
                  </span>
                </CardFooter>
              </Card>
            </HoverCardContent>
          </HoverCard>
        );
      })}
    </div>
  );
};

export default ManageComponent;
