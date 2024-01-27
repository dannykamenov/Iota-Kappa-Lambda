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

const ManageComponent = () => {

    const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    getEvents().then((res) => {
      setEvents(res.data.events);
      console.log(events)
    });
  }, []);

  return (
    <div className=" w-1/2 mx-auto ">
      {events.map((event) => {
        return (
          <HoverCard>
            <HoverCardTrigger>
              <Card className={event._id}>
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{event.summary}</CardDescription>
                </CardContent>
                <CardContent>
                  <CardDescription>{event.description}</CardDescription>
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
